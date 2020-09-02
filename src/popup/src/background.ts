import { createStore } from 'redux'
import { wrapStore } from 'webext-redux'
import { updateWallets } from './providers/wallets'


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
  'status': string,
  'debug': any,
  'size': number,
}

export type pdf = {
  'url': string,
  'fee': string,
  'timestamp': string,
  'txnId': string,
  'status': string,
  'source': ArrayBuffer
  'debug': any,
  'size': number
}

export type settings = {
  'gateway': string,
  'debug': boolean,
  'loki': boolean,
  'silo': boolean,
  'lokiGateway': string
}

export type initialStateType = {
  wallets: wallet[],
  activeWallet: string,
  lastUpdated: number,
  network: {
    connected: boolean,
    height: number,
    response: any
  }
  settings: settings,
}

const initialState = {
  wallets: [],
  activeWallet: '',
  lastUpdated: 0,
  connected: false,
  settings: {
    'gateway': 'https://arweave.net:443',
    'debug': false,
    'loki': false,
    'silo': false,
    'lokiGateway': 'http://swyteha53g6q8yyqatsaz3rfyu3kgxetak4yjc7ggf3zz5qqxcgo.lokiswyteha53g6q8yyqatsaz3rfyu3kgxetak4yjc7ggf3zz5qqxcgo'
  }
}

const reducer = (state: initialStateType, action: any): initialStateType => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'ADD_WALLET':
      let wallets = state.wallets
      if (wallets.filter(wallet => wallet.address === action.payload.address).length === 0) {
        wallets.push({ 'address': action.payload.address, 'balance': action.payload.balance, 'nickname': action.payload.nickname, key: action.payload.key })
      }
      let newState = {
        ...state,
        wallets: wallets,
        activeWallet: action.payload.address
      }
      localStorage.setItem('wallets', JSON.stringify(newState))
      return newState;

    case 'UPDATE_WALLETS':
      return action.payload;
      
    case 'SET_ACTIVE':
      let newState2 = {
        ...state,
        activeWallet: action.payload.address
      }  
        localStorage.setItem('wallets', JSON.stringify(newState2))
    return newState2;

    case 'REMOVE_WALLET':
      let newWallets = state.wallets.filter(wallet => wallet.address !== action.payload.address)
      let newActive = newWallets.length > 0 ? newWallets[0].address : ''
      let newState3 = {
        ...state,
        wallets: newWallets,
        activeWallet: newActive
      }
      localStorage.setItem('wallets', JSON.stringify(newState3))
      return newState3;

    case 'ARCHIVE_PAGE':
      let active = state.wallets.filter(wallet => wallet.address === state.activeWallet)
      let other = state.wallets.filter(wallet => wallet.address !== state.activeWallet)
      let txn = action.payload as page
      active[0].pages ? active[0].pages.push(txn) : active[0].pages = [txn]
      other.push(active[0])
      let newState4 = {
        ...state,
        wallets: other
      }
      localStorage.setItem('wallets', JSON.stringify(newState4))
      return newState4;

    case 'ARCHIVE_PDF':
      let active2 = state.wallets.filter(wallet => wallet.address === state.activeWallet)
      let other2 = state.wallets.filter(wallet => wallet.address !== state.activeWallet)
      let txn2 = action.payload as any
      active2[0].pdfs ? active2[0].pdfs.push(txn2) : active2[0].pdfs = [txn2]
      other2.push(active2[0])
      let newState5 = {
        ...state,
        wallets: other2
      }
      localStorage.setItem('wallets', JSON.stringify(newState5))
      return newState5;
    case 'INITIATE_TRANSFER':
      let active3 = state.wallets.filter(wallet => wallet.address === state.activeWallet)
      let other3 = state.wallets.filter(wallet => wallet.address !== state.activeWallet)
      let txn3 = action.payload as any
      active3[0].transfers ? active3[0].transfers.push(txn3) : active3[0].transfers = [txn3]
      other3.push(active3[0])
      let newState6 = {
        ...state,
        wallets: other3
      }
      localStorage.setItem('wallets', JSON.stringify(newState6))
      return newState6;
    case 'UPDATE_SETTINGS':
      let newState7 = {
        ...state,
        settings: action.payload
      }
      localStorage.setItem('wallets', JSON.stringify(newState7))
      return newState7
    default: return state;
  }
}

const retrievedStateData = localStorage.getItem('wallets')
console.log(retrievedStateData)
//@ts-ignore
const store = createStore<InitialStateType, null, null, null>(reducer, retrievedStateData ? JSON.parse(retrievedStateData) : initialState!)
wrapStore(store);


chrome.runtime.onStartup.addListener(() => {
  console.log('starting up!')
  let walletData = localStorage.getItem('wallets');
  var wallets = walletData ? JSON.parse(walletData) : undefined
  console.log(wallets)
})

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'update') {
    console.log('Updating wallets in background')
    updateWallets()
  }
})

chrome.alarms.create('update',{periodInMinutes:720}) //Set alarm to update Wallet balances/transaction status twice a day
