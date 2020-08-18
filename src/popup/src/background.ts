import Arweave from 'arweave/web'
import { createStore } from 'redux'
import { wrapStore } from 'webext-redux'

const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https',
})

export type wallet = {
  'address': string,
  'nickname': string,
  'pages'?: page[],
  'pdfs'?: any[],
  'transfers'?: any[],
  'balance': string,
  'key': any
}

export type page = {
  'title': string,
  'url': string,
  'fee': string,
  'timestamp': string,
  'txnId': string,
  'status': string
}

export type initialStateType = {
  wallets: wallet[],
  activeWallet: string,
  pageSource?: any
}

const initialState = {
  wallets: [],
  activeWallet: '',
}

const reducer = (state: initialStateType, action: any): initialStateType => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'ADD_WALLET':
      let wallets = state.wallets
      if (wallets.filter(wallet => wallet.address === action.payload.address).length === 0) {
        wallets.push({'address': action.payload.address, 'balance': action.payload.balance, 'nickname': action.payload.nickname, key: action.payload.key})
      }
      return {
        ...state,
        wallets: wallets,
        activeWallet: action.payload.address
      };
    case 'SET_ACTIVE':
      return {
        ...state,
        activeWallet: action.payload.address
      };
    case 'REMOVE_WALLET':
      let newWallets = state.wallets.filter(wallet => wallet.address !== action.payload.address)
      let newActive = newWallets.length > 0 ? newWallets[0].address : ''
      return {
        ...state,
        wallets: newWallets,
        activeWallet: newActive
      }
    case 'ARCHIVE_PAGE':
      let active = state.wallets.filter(wallet => wallet.address === state.activeWallet)
      let other = state.wallets.filter(wallet => wallet.address !== state.activeWallet)
      let txn = action.payload as page
      active[0].pages ? active[0].pages.push(txn) : active[0].pages = [txn]
      other.push(active[0])
      return {
        ...state,
        wallets:other
      }
    default: return state;
  }
}

//@ts-ignore
const store = createStore<InitialStateType,null,null,null>(reducer, initialState!)
wrapStore(store);

chrome.runtime.onStartup.addListener(() => {
  console.log('starting up!')
  let walletData = localStorage.getItem('wallets');
  var wallets = walletData ? JSON.parse(walletData) : undefined
})
