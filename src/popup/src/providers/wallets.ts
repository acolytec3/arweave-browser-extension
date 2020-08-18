import Arweave from 'arweave/web'
import axios from 'axios'
import { Store } from 'webext-redux'
import { initialStateType, wallet, page } from '../background'
import { time } from 'console'
const arweave = Arweave.init({
  //TODO: Import node address from settings
  host: 'arweave.net',
  port: 443,
  protocol: 'https',
})

const store = new Store()

export const addWallet = async (key: any, nickname: string): Promise<any> => {
  let address = await arweave.wallets.jwkToAddress(key)
  let balance = await arweave.wallets.getBalance(address)
  await store.ready()
  let result = await store.dispatch({ 
    type: 'ADD_WALLET', 
    payload: { 
      key: key, 
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
  return arweave.ar.winstonToAr(res.data)
}

export const archivePage = async (page: any) => {
  await store.ready()
  let state = store.getState() as initialStateType
  let key = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].key
  let transaction = await arweave.createTransaction({ data: page.html }, key);
  console.log(transaction)
  transaction.addTag('Content-Type', 'text/html')
  transaction.addTag('App-Name', 'Arweave Web Wallet v2.0')
  await arweave.transactions.sign(transaction, key);
  let pageDetails:page = { 
    'title': page.title, 
    'url': page.url, 
    'fee': page.fee,
    'txnId': transaction.id,
    'status': 'pending',
    'timestamp': Date.now().toString()
  }

  await store.ready()
  let result = await store.dispatch({ 
    type: 'ARCHIVE_PAGE', 
    payload: pageDetails
  })
  /*const response = await arweave.transactions.post(transaction);
  console.log(response.status);
  if (response.status === 200) {
    localStorage.setItem('transaction', JSON.stringify({ 'title': page.title, 'fee': transaction.reward }))
  }*/
}




