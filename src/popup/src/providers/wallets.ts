import Arweave from 'arweave'
import axios, { AxiosResponse } from 'axios'
import { Store } from 'webext-redux'
import { initialStateType, wallet, page, pdf } from '../background'
import ArweaveCrypto from './arweaveCrypto'




const store = new Store()
const arweaveCrypto = new ArweaveCrypto();

const getArweaveInstance = async (): Promise<Arweave> => {
  await store.ready()
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
function unicodeToAscii(string: string) {
  return btoa(unescape(encodeURIComponent(string)));
}

function asciiToUnicode(string: string) {
  return decodeURIComponent(escape(atob(string)));
}

export const addWallet = async (key: any, nickname: string, password: string): Promise<any> => {
  await store.ready()
  let state = await store.getState() as initialStateType;
  let arweave = await getArweaveInstance()
  let address = await arweave.wallets.jwkToAddress(key)
  let encryptedKey = Arweave.utils.bufferTob64Url(await arweaveCrypto.encrypt(Arweave.utils.b64UrlToBuffer(unicodeToAscii(JSON.stringify(key))), Arweave.utils.b64UrlToBuffer(unicodeToAscii(password))))
  let balance = await arweave.wallets.getBalance(address)
  let result = await store.dispatch({
    type: 'ADD_WALLET',
    payload: {
      key: encryptedKey,
      address: address,
      nickname: nickname,
      balance: arweave.ar.winstonToAr(balance)
    }
  })
  return result
}


export const getFee = async (size: number): Promise<string> => {
  //TODO: Change out URL for node from settings
  let res = await axios.get(`https://arweave.net/price/${size}`)
  let arweave = await getArweaveInstance()
  return arweave.ar.winstonToAr(res.data)
}

export const archivePage = async (page: any, password: string) => {
  await store.ready()
  let state = store.getState() as initialStateType
  let arweave = await getArweaveInstance()
  let encryptedKey = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].key
  let rawKey = await arweaveCrypto.decrypt(Arweave.utils.b64UrlToBuffer(encryptedKey), Arweave.utils.b64UrlToBuffer(unicodeToAscii(password)))
  let key = JSON.parse(asciiToUnicode(arweave.utils.bufferTob64Url(new Uint8Array(rawKey))))

  let transaction = await arweave.createTransaction({ data: page.html }, key);
  console.log(transaction)
  transaction.addTag('Content-Type', 'text/html')
  transaction.addTag('App-Name', 'Arweave Web Wallet v2.0')
  await arweave.transactions.sign(transaction, key);


  const response = await arweave.transactions.post(transaction);
  console.log(response);

  let pageDetails: page = {
    'title': page.title,
    'url': page.url,
    'fee': page.fee,
    'txnId': transaction.id,
    'status': 'pending',
    'timestamp': Date.now().toString(),
    'debug': {
      'txn': transaction,
      'response': {} as AxiosResponse
    }
  }
  await store.ready()
  let result = await store.dispatch({
    type: 'ARCHIVE_PAGE',
    payload: pageDetails
  })
}

export const archivePdf = async (pdf: pdf, password: string) => {
  await store.ready()
  let state = store.getState() as initialStateType
  let arweave = await getArweaveInstance()
  let encryptedKey = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].key
  let rawKey = await arweaveCrypto.decrypt(Arweave.utils.b64UrlToBuffer(encryptedKey), Arweave.utils.b64UrlToBuffer(unicodeToAscii(password)))
  let key = JSON.parse(asciiToUnicode(arweave.utils.bufferTob64Url(new Uint8Array(rawKey))))
  let transaction = await arweave.createTransaction({ data: pdf.source }, key);
  console.log(transaction)
  console.log(pdf)
  transaction.addTag('Content-Type', 'application/pdf')
  transaction.addTag('App-Name', 'Arweave Web Wallet v2.0')
  await arweave.transactions.sign(transaction, key);

  const response = await arweave.transactions.post(transaction);
  console.log(response);

  let pdfDetails: any = {
    'url': pdf.url,
    'fee': pdf.fee,
    'txnId': transaction.id,
    'status': 'pending',
    'timestamp': Date.now().toString(),
    'debug': response
  }

  let result = await store.dispatch({
    type: 'ARCHIVE_PDF',
    payload: pdfDetails
  })
}

export const sendTransfer = async (transfer: any, password: string) => {
  await store.ready()
  let state = store.getState() as initialStateType
  let arweave = await getArweaveInstance()
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

  let transferDetails: any = {
    'to': transfer.to,
    'amount': transfer.amount,
    'message': transfer.message,
    'fee': transfer.fee,
    'txnId': transaction.id,
    'status': 'pending',
    'timestamp': Date.now().toString(),
    'debug': response
  }

  let result = await store.dispatch({
    type: 'INITIATE_TRANSFER',
    payload: transferDetails
  })

}

export const updateWallets = async () => {
  await store.ready()
  let state = store.getState() as initialStateType
  if (Date.now() - state.lastUpdated < 360000) return
  let updatedWallets = null
  let connected = false
  let netInfo = {} as any

  try {
    let arweave = await getArweaveInstance()
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
      return { address: wallet.address, balance: balance, pages: pages, pdfs: pdfs, transfers: transfers, nickname: wallet.nickname }
    }))
  }
  catch (error) {

  }
  let result = store.dispatch({
    type: 'UPDATE_WALLETS',
    payload: { wallets: updatedWallets ? updatedWallets : state.wallets, activeWallet: state.activeWallet, lastUpdated: Date.now(), network: { connected: connected, response: netInfo, height: netInfo ? netInfo.height : undefined}, settings: state.settings }
  })
}

