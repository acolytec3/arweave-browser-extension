import React, { useState, useEffect } from 'react';
import { FaRegFileAlt, FaMoneyCheckAlt, FaWallet, FaFilePdf, FaClone } from 'react-icons/fa'
import { ThemeProvider, Box, Text, Flex, Button, PseudoBox, useClipboard, Stack } from "@chakra-ui/core";
import { openTab } from '../providers/browser'
import { useSelector } from 'react-redux'
import { initialStateType } from '../background'
import { updateWallets } from '../providers/wallets';

type pageType = {
  type: string,
  url: string
}

const Popup = () => {
  const state = useSelector((rootState: initialStateType) => rootState)
  const [url, setUrl] = useState({} as pageType)
  const [wallet, setWallet] = useState(state.activeWallet ? state.wallets.filter((wallet) => wallet.address === state.activeWallet)[0] : { address: '', nickname: '', balance: '' })
  const { onCopy, hasCopied } = useClipboard(wallet.address);
  const [hover, setHover] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    updateWallets()
  },[])

  useEffect(() => {
    chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT }, (tabs => {
    chrome.tabs.sendMessage(tabs[0].id!,{action:'archive.page'}, (res => console.log(res)))
  }))
  },[])

  const urlChecker = (url: string) => {
    if (url !== '') {
      if (url.substring(url.length - 3,) === 'pdf') {
        setUrl({ type: 'pdf', url: url })
      }
      else if ((url.split(':')[0] === 'http') || (url.split(':')[0] === 'https')) {
        setUrl({ type: 'page', url: url })
      }
    }
  }

  chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT }, (tabs =>
    tabs[0].url ? urlChecker(tabs[0].url) : undefined))

  return (
    <ThemeProvider>
      <div className="App">
        {state.activeWallet === '' ?
          <Box w="400px">
            <Box onClick={() => openTab('wallets')}><Button leftIcon={FaWallet} bg="white" color="grey" border="none" size="lg">Load Wallet</Button></Box>
          </Box>
          :
          <Box w="400px" alignContent="space-between">
            <Text fontSize="4xl">{parseFloat(wallet.balance).toFixed(3).toLocaleString()} AR</Text>
            <PseudoBox cursor="pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} 
            onClick={() => {
              onCopy!();
              setCopied(true);
              setTimeout(() => setCopied(false),2000)
            }
            }>
              {!hover && <Text>{wallet.address}</Text>}
              {hover && !copied && <Stack isInline justify="center"><FaClone color="grey" size={12}/><Text>Click to copy</Text></Stack>}
              {hover && copied && <Stack isInline justify="center"><FaClone color="grey" size={12}/><Text>Copied!</Text></Stack>}
            </PseudoBox>
            <Text>{wallet.nickname}</Text>
            {(url.type !== undefined) ? <Button onClick={() => openTab(url.type === 'page' ? 'preview/' : 'pdfs/' + url.url)}
            >Archive this {url.type}</Button>
              :
              <Text background="gray" color="white" fontSize="xl">Content type not currently supported</Text>}

            <Flex direction="row" justifyContent="space-evenly" alignItems="space-between" >
              <PseudoBox bg="white" border="none" as="button" onClick={() => openTab('pdfs')}><FaFilePdf color="grey" size={24} /><Text>PDFs</Text></PseudoBox>
              <PseudoBox bg="white" border="none" as="button" onClick={() => openTab('pages')}><FaRegFileAlt color="grey" size={24} /><Text>Pages</Text></PseudoBox>
              <PseudoBox bg="white" border="none" as="button" onClick={() => openTab('transfers')}><FaMoneyCheckAlt color="grey" size={24} /><Text>Transfers</Text></PseudoBox>
              <PseudoBox bg="white" border="none" as="button" onClick={() => openTab('wallets/open')}><FaWallet color="grey" size={24} /><Text>Wallets</Text></PseudoBox>
            </Flex>
          </Box>}
      </div>
    </ThemeProvider>
  )
}

export default Popup
