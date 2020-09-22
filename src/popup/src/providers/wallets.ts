import Arweave from 'arweave'
import axios from 'axios'
import { Store } from 'webext-redux'
import { initialStateType, wallet, page, pdf } from '../background'
import ArweaveCrypto from './arweaveCrypto'


const store = new Store()
const arweaveCrypto = new ArweaveCrypto();

const getArweaveInstance = async (store: Store): Promise<Arweave> => {
  //await store.ready()
  let state = await store.getState() as initialStateType;
  let protocol = state.settings.gateway.split('://')[0]
  let port = state.settings.gateway.split(':')[2]
  let host = state.settings.gateway.split('//')[1].split(':')[0]
  return Arweave.init({
    host: host,
    port: port,
    protocol: protocol,
  })
}

export const unicodeToAscii = (string: string): string => {
  return btoa(unescape(encodeURIComponent(string)));
}

export const asciiToUnicode = (string: string): string => {
  return decodeURIComponent(escape(atob(string)));
}

export const decryptKey = async (password: string, address: string): Promise<string> => {
  await store.ready()
  let state = await store.getState() as initialStateType;
  let passBuffer = Arweave.utils.b64UrlToBuffer(unicodeToAscii(password))
  let encryptedKeyBuffer = Arweave.utils.b64UrlToBuffer(state.wallets.filter((wallet) => wallet.address === address)[0].key)
  let decryptedKeyBuffer = await arweaveCrypto.decrypt(encryptedKeyBuffer, passBuffer)
  let decryptedKey = asciiToUnicode(Arweave.utils.bufferTob64Url(new Uint8Array(decryptedKeyBuffer)))
  return decryptedKey
}

export const generateKey = async (): Promise<any> => {
  let key = await arweaveCrypto.jwk()
  let arweave = await getArweaveInstance(store)
  //@ts-ignore
  let address = await arweave.wallets.jwkToAddress(key)
  return { address: address, key: key }
}

export const getAddress = async (key: any): Promise<string> => {
  let arweave = await getArweaveInstance(store)
  //@ts-ignore
  let address = await arweave.wallets.jwkToAddress(key)
  return address
}

export const addWallet = async (key: any, nickname: string, password: string): Promise<boolean> => {
  let arweave = await getArweaveInstance(store)
  let address = await arweave.wallets.jwkToAddress(key)
  if (store.getState().wallets.filter((wallet: wallet) => wallet.address === address).length !== 0) return false
  let encryptedKey = Arweave.utils.bufferTob64Url(await arweaveCrypto.encrypt(Arweave.utils.b64UrlToBuffer(unicodeToAscii(JSON.stringify(key))), Arweave.utils.b64UrlToBuffer(unicodeToAscii(password))))
  let balance = await arweave.wallets.getBalance(address)

  await store.ready()
  let result = await store.dispatch({
    type: 'ADD_WALLET',
    payload: {
      key: encryptedKey,
      address: address,
      nickname: nickname,
      balance: arweave.ar.winstonToAr(balance)
    }
  })
  return true
}


export const getFee = async (size: number): Promise<string> => {
  await store.ready()
  let state = store.getState() as initialStateType
  let res = await axios.get(`${state.settings.gateway}/price/${size}`)
  let arweave = await getArweaveInstance(store)
  return arweave.ar.winstonToAr(res.data)
}

export const archivePage = async (page: any, password: string, store: any): Promise<boolean> => {
  try {
    //await store.ready()
    let state = store.getState() as initialStateType
    let arweave = await getArweaveInstance(store)
    let encryptedKey = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].key
    let rawKey = await arweaveCrypto.decrypt(Arweave.utils.b64UrlToBuffer(encryptedKey), Arweave.utils.b64UrlToBuffer(unicodeToAscii(password)))
    let key = JSON.parse(asciiToUnicode(Arweave.utils.bufferTob64Url(new Uint8Array(rawKey))))

    let transaction = await arweave.createTransaction({ data: page.html }, key);
    console.log(transaction)
    transaction.addTag('Content-Type', 'text/html')
    transaction.addTag('App-Name', 'Arweave Web Wallet v2.0')
    await arweave.transactions.sign(transaction, key);

    const response = await arweave.transactions.post(transaction);
    console.log(response);
    chrome.runtime.sendMessage({ success: 'page' })
    transaction.data = Uint8Array.from([]) //Remove data from transaction details being stored with wallet so we don't blow up the session storage limits
    let pageDetails: page = {
      'title': page.title,
      'url': page.url,
      'fee': page.fee,
      'txnId': transaction.id,
      'status': 'pending',
      'timestamp': Date.now().toString(),
      'debug': transaction,
      'size': page.size
    }

    let result = await store.dispatch({
      type: 'ARCHIVE_PAGE',
      payload: pageDetails
    })
  }
  catch (err) {
    console.log(`Error in archiving page - ${err}`)
    chrome.runtime.sendMessage({ failure: 'page' })
    return false
  }
  return true
}

export const archivePdf = async (pdf: pdf, password: string, store: Store): Promise<boolean> => {
  try {
    let state = store.getState() as initialStateType
    let arweave = await getArweaveInstance(store)
    let encryptedKey = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].key
    let rawKey = await arweaveCrypto.decrypt(Arweave.utils.b64UrlToBuffer(encryptedKey), Arweave.utils.b64UrlToBuffer(unicodeToAscii(password)))
    let key = JSON.parse(asciiToUnicode(Arweave.utils.bufferTob64Url(new Uint8Array(rawKey))))
    let transaction = await arweave.createTransaction({ data: pdf.source }, key);
    transaction.addTag('Content-Type', 'application/pdf')
    transaction.addTag('App-Name', 'Arweave Web Wallet v2.0')
    await arweave.transactions.sign(transaction, key);

    const response = await arweave.transactions.post(transaction);
    console.log(response);
    transaction.data = Uint8Array.from([])  //Remove data from transaction details being stored with wallet so we don't blow up the session storage limits
    chrome.runtime.sendMessage({ success: 'pdf' })
    let pdfDetails: any = {
      'url': pdf.url,
      'fee': pdf.fee,
      'txnId': transaction.id,
      'status': 'pending',
      'timestamp': Date.now().toString(),
      'debug': transaction,
      'size': pdf.size
    }

    let result = await store.dispatch({
      type: 'ARCHIVE_PDF',
      payload: pdfDetails
    })
  }
  catch (err) {
    console.log(`Error in archiving pdf - ${err}`)
    chrome.runtime.sendMessage({ failure: 'pdf' })
    return false
  }
  return true
}

export const sendTransfer = async (transfer: any, password: string, store: Store): Promise<boolean> => {
  try {
    let state = store.getState() as initialStateType
    let arweave = await getArweaveInstance(store)
    let encryptedKey = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].key
    let rawKey = await arweaveCrypto.decrypt(Arweave.utils.b64UrlToBuffer(encryptedKey), Arweave.utils.b64UrlToBuffer(unicodeToAscii(password)))
    let key = JSON.parse(asciiToUnicode(arweave.utils.bufferTob64Url(new Uint8Array(rawKey))))
    let transaction = await arweave.createTransaction({
      target: transfer.to,
      data: transfer.message !== '' ? Buffer.from(transfer.message) : undefined,
      quantity: arweave.ar.arToWinston(transfer.amount)
    }, key);

    transaction.addTag('App-Name', 'Arweave Web Wallet v2.0')
    await arweave.transactions.sign(transaction, key);

    const response = await arweave.transactions.post(transaction);
    console.log(response);
    chrome.runtime.sendMessage({ success: 'transfer' })

    let transferDetails: any = {
      'to': transfer.to,
      'amount': transfer.amount,
      'message': transfer.message,
      'fee': transfer.fee,
      'txnId': transaction.id,
      'status': 'pending',
      'timestamp': Date.now().toString(),
      'debug': transaction
    }

    let result = await store.dispatch({
      type: 'INITIATE_TRANSFER',
      payload: transferDetails
    })
  }
  catch (err) {
    console.log(`Error sending tranfer - ${err}`)
    chrome.runtime.sendMessage({ failure: 'transfer' })
    return false
  }
  return true
}

export const updateWallets = async () => {
  await store.ready()
  let state = store.getState() as initialStateType

  if (Date.now() - state.lastUpdated < 120000) {
    return
  }
  else {

    let updatedWallets = null
    let connected = false
    let netInfo = {} as any

    try {
      let arweave = await getArweaveInstance(store)
      updatedWallets = await Promise.all(state.wallets.map(async (wallet) => {
        let balance = arweave.ar.winstonToAr(await arweave.wallets.getBalance(wallet.address));
        netInfo = await arweave.api.get(state.settings.gateway)
        connected = netInfo.status === 200
        let pages = wallet.pages ? await Promise.all(wallet.pages?.map(async (txn) => {
          if (txn.status === 'pending') {
            let status = await arweave.transactions.getStatus(txn.txnId)
            console.log('Got status and its ' + status.status)
            return status.status === 200 ? { ...txn, status: 'confirmed' } : txn
          } else return txn
        })) : undefined
        let pdfs = wallet.pdfs ? await Promise.all(wallet.pdfs?.map(async (txn) => {
          if (txn.status === 'pending') {
            let status = await arweave.transactions.getStatus(txn.txnId)
            return status.status === 200 ? { ...txn, status: 'confirmed' } : txn
          }
          return txn
        })) : undefined
        let transfers = wallet.transfers ? await Promise.all(wallet.transfers?.map(async (txn) => {
          if (txn.status === 'pending') {
            let status = await arweave.transactions.getStatus(txn.txnId)
            return status.status === 200 ? { ...txn, status: 'confirmed' } : txn
          }
          return txn
        })) : undefined
        console.log(pages)
        return { address: wallet.address, balance: balance, pages: pages, pdfs: pdfs, transfers: transfers, nickname: wallet.nickname, key: wallet.key }
      }))
    }
    catch (error) {
      console.log(`Error updating wallets - ${error}`)
    }
    let result = store.dispatch({
      type: 'UPDATE_WALLETS',
      payload: { wallets: updatedWallets ? updatedWallets : state.wallets, activeWallet: state.activeWallet, lastUpdated: Date.now(), network: { connected: connected, response: netInfo, height: netInfo ? netInfo.height : undefined }, settings: state.settings }
    })
  }
}

