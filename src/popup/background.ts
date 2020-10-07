import { createStore } from 'redux'
import { wrapStore } from 'webext-redux'
import { updateWallets, archivePage, archivePdf, sendTransfer } from './providers/wallets'
import axios from 'axios'

export type wallet = {
  'address': string,
  'nickname': string,
  'pages'?: page[],
  'pdfs'?: pdf[],
  'transfers'?: transfer[],
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

export type transfer = {
  'to': string,
  'fee': string,
  'status': string,
  'txnId': string,
  'timestamp': string,
  'amount': string,
  'message': string
}

export type settings = {
  'gateway': string,
  'debug': boolean,
  'loki': boolean,
  'silo': boolean,
  'lokiGateway': string,
  'incognito': boolean
}

export type pageSource = {
  title: string,
  html: string,
  url: string
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
  pageSource?: pageSource,
  pendingTxns?: {
    pendingPages: number,
    pendingPDFs: number,
    pendingTransfers: number
  }
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
    'lokiGateway': 'http://swyteha53g6q8yyqatsaz3rfyu3kgxetak4yjc7ggf3zz5qqxcgo.lokiswyteha53g6q8yyqatsaz3rfyu3kgxetak4yjc7ggf3zz5qqxcgo',
    'incognito': false
  }
}

const reducer = (state: initialStateType, action: any): initialStateType => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'ADD_WALLET': {
      let newerWallets: wallet[] = []
      if (state.wallets.filter(wallet => wallet.address === action.payload.address).length === 0) {
        let newWallet: wallet = { address: action.payload.address, balance: action.payload.balance, nickname: action.payload.nickname, key: action.payload.key }
        newerWallets = [...state.wallets, newWallet]
      }
      else newerWallets = [...state.wallets]
      let newState = {
        ...state,
        wallets: newerWallets,
        activeWallet: action.payload.address
      }
      localStorage.setItem('wallets', JSON.stringify(newState))
      return newState
    }

    case 'UPDATE_WALLETS':
      {
        let updatedState = action.payload as initialStateType
        localStorage.setItem('wallets', JSON.stringify(updatedState))
        if (updatedState.pendingTxns?.pendingPDFs! > 0 || updatedState.pendingTxns?.pendingPages! > 0 || updatedState.pendingTxns?.pendingTransfers! > 0) {
          chrome.alarms.create('pendingAlarm', { periodInMinutes: 5 }) //If wallets just updated, set a longer time out before checking again
        }
        return updatedState;
      };

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

    case 'UPDATE_NICKNAME':
      let newWallet = state.wallets.filter(wallet => wallet.address === action.payload.address)[0]
      newWallet.nickname = action.payload.nickname
      let otherWallets = state.wallets.filter(wallet => wallet.address !== action.payload.address)
      let index = state.wallets.findIndex(wallet => wallet.address === action.payload.address)
      otherWallets.splice(index, 0, newWallet)
      let postNicknameUpdatedState = {
        ...state,
        wallets: otherWallets
      }
      localStorage.setItem('wallets', JSON.stringify(postNicknameUpdatedState))
      return postNicknameUpdatedState;

    case 'ARCHIVE_PAGE':
      let active = state.wallets.filter(wallet => wallet.address === state.activeWallet)
      let other = state.wallets.filter(wallet => wallet.address !== state.activeWallet)
      let txn = action.payload as page
      active[0].pages ? active[0].pages.push(txn) : active[0].pages = [txn]
      other.push(active[0])
      let newStates4 = {
        ...state,
        wallets: other,
      }
      let newState4 = {
        ...newStates4,
        pendingTxns: {
          pendingPDFs: state.pendingTxns?.pendingPDFs ? state.pendingTxns?.pendingPDFs : 0,
          pendingPages: state.pendingTxns?.pendingPages ? state.pendingTxns.pendingPages + 1 : 1,
          pendingTransfers: state.pendingTxns?.pendingTransfers ? state.pendingTxns?.pendingTransfers : 0
        }
      }
      localStorage.setItem('wallets', JSON.stringify(newState4))
      chrome.alarms.create('pendingAlarm', { periodInMinutes: 3 })
      return newState4;

    case 'ARCHIVE_PDF':
      let active2 = state.wallets.filter(wallet => wallet.address === state.activeWallet)
      let other2 = state.wallets.filter(wallet => wallet.address !== state.activeWallet)
      let txn2 = action.payload as any
      active2[0].pdfs ? active2[0].pdfs.push(txn2) : active2[0].pdfs = [txn2]
      other2.push(active2[0])
      let newStates5 = {
        ...state,
        wallets: other2
      }
      let newState5 = {
        ...newStates5,
        pendingTxns: {
          pendingPDFs: state.pendingTxns?.pendingPDFs ? state.pendingTxns?.pendingPDFs + 1: 1,
          pendingPages: state.pendingTxns?.pendingPages ? state.pendingTxns.pendingPages : 0,
          pendingTransfers: state.pendingTxns?.pendingTransfers ? state.pendingTxns?.pendingTransfers : 0
        }
      }
      localStorage.setItem('wallets', JSON.stringify(newState5))
      chrome.alarms.create('pendingAlarm', { periodInMinutes: 3 })
      return newState5;

    case 'INITIATE_TRANSFER':
      let active3 = state.wallets.filter(wallet => wallet.address === state.activeWallet)
      let other3 = state.wallets.filter(wallet => wallet.address !== state.activeWallet)
      let txn3 = action.payload as any
      active3[0].transfers ? active3[0].transfers.push(txn3) : active3[0].transfers = [txn3]
      other3.push(active3[0])
      let newStates6 = {
        ...state,
        wallets: other3
      }
      let newState6 = {
        ...newStates6,
        pendingTxns: {
          pendingPDFs: state.pendingTxns?.pendingPDFs ? state.pendingTxns?.pendingPDFs : 0,
          pendingPages: state.pendingTxns?.pendingPages ? state.pendingTxns.pendingPages : 0,
          pendingTransfers: state.pendingTxns?.pendingTransfers ? state.pendingTxns?.pendingTransfers + 1: 1
        }
      }
      localStorage.setItem('wallets', JSON.stringify(newState6))
      chrome.alarms.create('pendingAlarm', { periodInMinutes: 3 })
      return newState6;
    case 'UPDATE_SETTINGS':
      let newState7 = {
        ...state,
        settings: action.payload
      }
      localStorage.setItem('wallets', JSON.stringify(newState7))
      return newState7

    case 'SET_PAGE_SOURCE':
      let postPageSourceUpdateState = {
        ...state,
        pageSource: action.payload as pageSource
      }
      return postPageSourceUpdateState

    default: return state;
  }
}

const retrievedStateData = localStorage.getItem('wallets')
console.log(retrievedStateData)
//@ts-ignore
const store = createStore<InitialStateType, null, null, null>(reducer, retrievedStateData ? JSON.parse(retrievedStateData) : initialState!)
wrapStore(store);


chrome.alarms.onAlarm.addListener((alarm) => {
  if ((alarm.name === 'update') || (alarm.name === 'pendingAlarm')) {
    console.log('Updating wallets in background')
    updateWallets(store)
  }
})

chrome.alarms.create('update', { periodInMinutes: 720 }) //Set alarm to update Wallet balances/transaction status twice a day

chrome.runtime.onMessage.addListener(async (res: any) => {
  console.log(res)
  switch (res.action) {
    case 'archive.page':
      archivePage(res.payload.page, res.payload.password, store);
      break;
    case 'archive.pdf':
      console.log(res.payload.pdf)
      axios({
        url: res.payload.pdf.url,
        method: 'get',
        responseType: 'blob',
        headers: {
          Accept: 'application/pdf',
          'Content-Type': 'application/pdf',
          mode: 'no-cors'
        }
      })
        .then(response => {
          console.log(response)
          const reader = new FileReader()
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = ((file) => {
            let pdf = { ...res.payload.pdf, source: file!.target!.result as ArrayBuffer }
            console.log(pdf)
            archivePdf(pdf, res.payload.password, store);
          })
          reader.readAsArrayBuffer(response.data)
        })
        .catch(err => console.log(err))

      break;
    case 'send.transfer':
      sendTransfer(res.payload.transfer, res.payload.password, store);
      break;
    case 'update.wallets':
      updateWallets(store)
  }
}
)

chrome.contextMenus.removeAll();
chrome.contextMenus.create({
  title: "Send AR",
  contexts: ["browser_action"],
  onclick: function () {
    chrome.tabs.create({
      url: chrome.extension.getURL(`popup/index.html#/mainpage/transfers/modal`)
    });
  }
});

chrome.contextMenus.create({
  title: "View archives",
  contexts: ["browser_action"],
  onclick: function () {
    chrome.tabs.create({
      url: chrome.extension.getURL(`popup/main.html#pages`)
    });
  }
});
chrome.contextMenus.create({
  title: "View transfers",
  contexts: ["browser_action"],
  onclick: function () {
    chrome.tabs.create({
      url: chrome.extension.getURL(`popup/index.html#/mainpage/transfers`)
    });
  }
});

chrome.contextMenus.create({
  title: "Copy wallet address to clipboard",
  contexts: ["browser_action"],
  onclick: function () {
    let state = store.getState() as initialStateType
    const input = document.createElement("input");
    input.style.position = "fixed";
    input.style.opacity = '0';
    input.value = state.activeWallet ? state.activeWallet : '';
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    document.body.removeChild(input);
  }
});

chrome.contextMenus.create({
  title: "Settings",
  contexts: ["browser_action"],
  onclick: function () {
    chrome.tabs.create({
      url: chrome.extension.getURL(`popup/index.html#/mainpage/settings`)
    });
  }
});

