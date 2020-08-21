import React, { useState } from 'react';
import { FaRegFileAlt, FaMoneyCheckAlt, FaWallet, FaFilePdf } from 'react-icons/fa'
import { ThemeProvider, Box, Text, Flex, IconButton, Button } from "@chakra-ui/core";
import { openTab } from '../providers/browser'
import { useSelector } from 'react-redux'
import { initialStateType } from '../background'

type pageType = {
  type: string,
  url: string
}

const Popup = () => {
  const state = useSelector((rootState : initialStateType) => rootState)
  const [url, setUrl] = useState({} as pageType)
  const [wallet, setWallet] = useState(state.activeWallet ? state.wallets.filter((wallet) => wallet.address === state.activeWallet)[0] : {address:'',nickname:'',balance:''})

  //TODO: Move to ContentScript
  const urlChecker = (url: string) => {
    console.log(url.substring(url.length-3,) === 'pdf')
    if (url !== '') {
      if (url.substring(url.length-3,) === 'pdf') {
        setUrl({type:'pdf',url:url})
      }
      else if ((url.split(':')[0] === 'http') || (url.split(':')[0] === 'https')) { 
            setUrl({type:'page',url:url})
        }   
      else setUrl({} as pageType)
    }
  }

  chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT }, (tabs =>
    tabs[0].url ? urlChecker(tabs[0].url) : setUrl({} as pageType)))

  console.log('Current tab url is ' + url + 'and is archivable: ' + (url.url))
  return (
    <ThemeProvider>
      <div className="App">
        {state.activeWallet === '' ?
          <Box w="400px">
            <Box onClick={() => openTab('wallets')}><Button leftIcon={FaWallet} bg="white" color="grey" border="none" size="lg">Load Wallet</Button></Box>
          </Box>
          :
          <Box w="400px">
            <Text fontSize="4xl">{wallet.balance} AR</Text>
            <Text>{wallet.address} </Text>
            <Text>{wallet.nickname}</Text>
  <Button isDisabled={url === ({} as pageType)} onClick={() => openTab(url.type === 'page' ? 'pages/' + url.url : 'pdfs/' + url.url)}>Archive this {url.type}</Button>
            <Flex direction="row" justifyContent="space-evenly" alignItems="space-between" >
              <Box onClick={() => openTab('pdfs')}><IconButton aria-label="PDFs" icon={FaFilePdf} bg="white" color="grey" border="none" size="lg" /><Text>PDFs</Text></Box>
              <Box onClick={() => openTab('pages')}><IconButton aria-label="pages" icon={FaRegFileAlt} bg="white" color="grey" border="none" size="lg" /><Text>Pages</Text></Box>
              <Box onClick={() => openTab('transfers')}><IconButton aria-label="transfers" icon={FaMoneyCheckAlt} bg="white" color="grey" border="none" size="lg" /><Text>Transfers</Text></Box>
              <Box onClick={() => openTab('wallets')}><IconButton aria-label="wallets" icon={FaWallet} bg="white" color="grey" border="none" size="lg" /><Text>Wallets</Text></Box>
            </Flex>
          </Box>}
      </div>
    </ThemeProvider>
  )
}

export default Popup
