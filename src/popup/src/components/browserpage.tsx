import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link as ReactLink, useHistory } from 'react-router-dom';
import {
  Flex, ButtonGroup, Button, Link, Drawer, Text, Box,
  DrawerOverlay, useDisclosure, PseudoBox, Stack, useToast,
  Code, Textarea,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Modal, CSSReset
} from "@chakra-ui/core";
import { FaRegFileAlt, FaMoneyCheckAlt, FaWallet, FaFilePdf, FaCog, FaCircle } from 'react-icons/fa'
import Wallets from './wallets'
import Pages from './pages'
import Pdfs from './pdfs'
import Preview from './preview'
import Transfers from './transfers'
import Settings from './settings'
import { useSelector } from 'react-redux'
import { initialStateType, wallet } from '../background'
import TransferModal from './transferModal'

const ArweaveLogo = () => {
  return (<svg width="184" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M55.36 20.772a2.503 2.503 0 0 1-.174-.47 6.211 6.211 0 0 1-.122-.561c-.157.17-.337.33-.541.48-.205.15-.433.282-.684.398a3.961 3.961 0 0 1-.817.255 4.37 4.37 0 0 1-.97.103 4.791 4.791 0 0 1-1.563-.245 3.711 3.711 0 0 1-1.215-.685 3.13 3.13 0 0 1-.796-1.041 3.1 3.1 0 0 1-.286-1.328c0-1.164.432-2.062 1.297-2.695.871-.64 2.168-.96 3.89-.96h1.583v-.653c0-.531-.174-.95-.521-1.256-.347-.314-.848-.47-1.501-.47-.579 0-1 .126-1.266.378-.266.245-.398.575-.398.99h-2.839c0-.47.102-.915.306-1.338.211-.422.514-.792.909-1.112.402-.32.888-.572 1.46-.756.579-.19 1.24-.286 1.981-.286.667 0 1.287.082 1.858.245a4.465 4.465 0 0 1 1.501.725c.422.32.753.725.99 1.215.24.483.358 1.045.358 1.685v4.738c0 .592.038 1.082.113 1.47.074.388.183.722.326 1v.174h-2.88zm-2.706-1.99c.286 0 .551-.035.796-.103.245-.068.467-.156.664-.265.198-.11.368-.232.51-.368a2.06 2.06 0 0 0 .338-.429v-1.899h-1.45c-.443 0-.82.044-1.134.133-.313.081-.568.2-.766.357-.197.15-.343.334-.439.552a1.667 1.667 0 0 0-.142.694c0 .381.132.697.398.95.272.251.68.377 1.225.377zM68.95 9.52c.43 0 .824.03 1.185.092.367.054.664.116.888.184l-.418 2.828a9.058 9.058 0 0 0-1.154-.194 9.132 9.132 0 0 0-1.113-.071c-.797 0-1.436.153-1.92.46-.476.305-.834.744-1.072 1.316v6.637h-2.839V9.724h2.645l.133 1.807a5.014 5.014 0 0 1 1.613-1.47 4.04 4.04 0 0 1 2.052-.541zM80.642 17.31l.96-7.586h2.603l-1.98 11.048h-2.492l-1.45-7.025-1.399 7.025h-2.491L72.412 9.724h2.593l.96 7.617 1.389-7.617h1.9l1.388 7.587zM91.496 20.977c-.851 0-1.624-.14-2.318-.42a5.527 5.527 0 0 1-1.787-1.133 5.1 5.1 0 0 1-1.154-1.694 5.507 5.507 0 0 1-.398-2.094v-.408c0-.844.133-1.614.398-2.308a5.354 5.354 0 0 1 1.113-1.807 5.02 5.02 0 0 1 1.695-1.174 5.376 5.376 0 0 1 2.134-.419c.797 0 1.505.133 2.124.398a4.307 4.307 0 0 1 1.583 1.103c.436.476.766 1.052.99 1.726.225.667.337 1.405.337 2.215v1.205H88.72c.054.375.163.718.326 1.031.17.307.385.572.644.797.258.225.554.398.888.52.333.123.698.184 1.092.184.28 0 .555-.027.828-.081.279-.055.544-.133.796-.235.252-.109.487-.242.704-.398.218-.157.409-.34.572-.552l1.42 1.532c-.177.252-.409.5-.695.745-.279.239-.612.453-1 .644a6.53 6.53 0 0 1-1.277.449c-.47.116-.977.174-1.521.174zm-.337-9.16c-.32 0-.613.058-.878.174a2.06 2.06 0 0 0-.705.48 2.863 2.863 0 0 0-.5.755c-.136.293-.238.62-.306.98h4.656v-.224a2.684 2.684 0 0 0-.174-.847 1.939 1.939 0 0 0-.439-.684 1.947 1.947 0 0 0-.704-.46 2.413 2.413 0 0 0-.95-.174zM105.597 20.772a2.538 2.538 0 0 1-.174-.47 6.463 6.463 0 0 1-.122-.561c-.157.17-.337.33-.541.48-.205.15-.433.282-.684.398a3.99 3.99 0 0 1-.817.255c-.3.069-.623.103-.97.103a4.798 4.798 0 0 1-1.563-.245 3.716 3.716 0 0 1-1.215-.685 3.128 3.128 0 0 1-.796-1.041 3.1 3.1 0 0 1-.286-1.328c0-1.164.432-2.062 1.297-2.695.871-.64 2.168-.96 3.89-.96h1.583v-.653c0-.531-.174-.95-.521-1.256-.347-.314-.848-.47-1.501-.47-.579 0-1.001.126-1.266.378-.266.245-.398.575-.398.99h-2.839c0-.47.102-.915.306-1.338.211-.422.514-.792.91-1.112.401-.32.887-.572 1.459-.756.579-.19 1.239-.286 1.981-.286.667 0 1.287.082 1.859.245a4.465 4.465 0 0 1 1.5.725c.423.32.753.725.991 1.215.238.483.357 1.045.357 1.685v4.738c0 .592.038 1.082.113 1.47.075.388.183.722.326 1v.174h-2.879zm-2.706-1.99a2.974 2.974 0 0 0 1.46-.368 2.44 2.44 0 0 0 .511-.368 2.07 2.07 0 0 0 .337-.429v-1.899h-1.45c-.443 0-.82.044-1.134.133-.313.081-.568.2-.765.357-.198.15-.344.334-.439.552a1.656 1.656 0 0 0-.143.694c0 .381.132.697.398.95.272.251.681.377 1.225.377zM115.951 17.495l.143.796.143-.766 2.43-7.8h2.961l-4.197 11.047h-2.665l-4.217-11.048h2.961l2.441 7.77zM129.174 20.977c-.851 0-1.624-.14-2.318-.42a5.521 5.521 0 0 1-1.787-1.133 5.095 5.095 0 0 1-1.154-1.694 5.517 5.517 0 0 1-.398-2.094v-.408c0-.844.133-1.614.398-2.308a5.37 5.37 0 0 1 1.113-1.807 5.03 5.03 0 0 1 1.695-1.174 5.379 5.379 0 0 1 2.134-.419c.797 0 1.504.133 2.124.398a4.312 4.312 0 0 1 1.583 1.103c.435.476.765 1.052.99 1.726.225.667.337 1.405.337 2.215v1.205h-7.495c.055.375.164.718.327 1.031.17.307.385.572.643.797.259.225.555.398.889.52.333.123.697.184 1.092.184.279 0 .555-.027.827-.081a4.32 4.32 0 0 0 .797-.235 3.76 3.76 0 0 0 .704-.398c.218-.157.409-.34.572-.552l1.419 1.532c-.177.252-.408.5-.694.745a4.779 4.779 0 0 1-1.001.644 6.514 6.514 0 0 1-1.276.449c-.47.116-.977.174-1.521.174zm-.337-9.16c-.32 0-.613.058-.878.174a2.055 2.055 0 0 0-.705.48 2.87 2.87 0 0 0-.5.755c-.136.293-.239.62-.307.98h4.656v-.224a2.67 2.67 0 0 0-.173-.847 1.945 1.945 0 0 0-.439-.684 1.954 1.954 0 0 0-.705-.46 2.411 2.411 0 0 0-.949-.174z" fill="#222326" /><circle cx="16.376" cy="15.992" r="14.664" stroke="#222326" strokeWidth="2.5" /><path d="M19.114 21.29a2.623 2.623 0 0 1-.182-.49 6.511 6.511 0 0 1-.128-.588 3.897 3.897 0 0 1-.566.502 4.097 4.097 0 0 1-.716.417 4.141 4.141 0 0 1-.854.267 4.574 4.574 0 0 1-1.015.107 5.01 5.01 0 0 1-1.634-.257 3.88 3.88 0 0 1-1.271-.716 3.274 3.274 0 0 1-.834-1.089c-.199-.427-.299-.89-.299-1.389 0-1.217.453-2.157 1.357-2.82.911-.669 2.268-1.004 4.07-1.004h1.655v-.683c0-.556-.181-.994-.545-1.314-.363-.328-.886-.491-1.57-.491-.605 0-1.047.131-1.324.395-.278.256-.417.602-.417 1.036h-2.97c0-.491.107-.958.321-1.4.22-.44.538-.829.95-1.163.42-.335.93-.599 1.528-.79.605-.2 1.296-.3 2.072-.3.698 0 1.346.085 1.944.256.606.171 1.129.424 1.57.759.442.334.787.758 1.037 1.27.249.506.373 1.094.373 1.763v4.956c0 .62.04 1.133.118 1.538.078.406.192.755.342 1.047v.182h-3.012zm-2.83-2.082c.298 0 .576-.036.832-.107.257-.071.488-.164.695-.278.206-.114.384-.242.534-.384.15-.15.267-.3.352-.449v-1.986H17.18c-.462 0-.858.046-1.185.138-.328.086-.595.21-.801.374a1.44 1.44 0 0 0-.46.577c-.1.22-.15.463-.15.726 0 .4.14.73.417.994.285.263.712.395 1.282.395z" fill="#222326" /></svg>)
}


const BrowserPage = (route: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const [drawer, setDrawer] = useState('')
  const state = useSelector((rootState: initialStateType) => rootState)
  const [modal, openModal] = useState(false)
  const [arModal, setArModal] = useState(false)
  const toast = useToast();

  const headerLabel: { [key: string]: string } = {
    'transfers': 'Transfers',
    'pdfs': 'PDFs',
    'pages': 'Archived Pages'
  }

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.hasOwnProperty('success')) {
        switch (message.success) {
          case 'page': toast({
            title: `Page archived successfully.  You should see it shortly`,
            status: 'success',
            duration: 5000,
            position: 'bottom',
            isClosable: true
          }); break;
          case 'pdf': toast({
            title: `PDF archived successfully.  You should see it shortly`,
            status: 'success',
            duration: 5000,
            position: 'bottom',
            isClosable: true
          }); break;
          case 'transfer': toast({
            title: `Transaction submitted successfully.  You should see it shortly`,
            status: 'success',
            duration: 5000,
            position: 'bottom',
            isClosable: true
          })
        }
      }
      if (message.hasOwnProperty('failure')) {
        toast({
          title: `Error submitting transaction.  Please check your connection and try again`,
          status: 'error',
          duration: 5000,
          position: 'bottom',
          isClosable: true
        })
      }
      if (message.hasOwnProperty('pending')) {
        switch (message.pending) {
          case 'page': toast({
            title: `Page is being archived - please wait a few moments`,
            status: 'info',
            duration: 3000,
            position: 'bottom',
            isClosable: true
          }); break;
          case 'pdf': toast({
            title: `PDF is being archived - please wait a few moments`,
            status: 'info',
            duration: 3000,
            position: 'bottom',
            isClosable: true
          }); break;
          case 'transfer': toast({
            title: `Transfer is being processed - please wait a few moments`,
            status: 'info',
            duration: 3000,
            position: 'bottom',
            isClosable: true
          }); break;
        }
      }
    });
  }, [])

  useEffect(() => {
    switch (window.location.hash) {
      case '#/mainpage/transfers/modal':  setArModal(true); break;
      case '#/mainpage/settings': onOpen(); break;
    }
    
  },[])

  const handleClose = () => {
    onClose()
  }

  function closeTransferModal () {
    setArModal(false)
  }

  const NetworkModal = () => {
    return (<Modal isOpen={modal} onClose={() => openModal(false)} >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Network Info
        <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Stack borderTop="1px" color="black" isInline>
            <Stack>
              <Text color="#888">Last Updated</Text>
              <Text color="#333">{state.lastUpdated}</Text>
            </Stack>
            <Stack>
              <Text color="#888">Height</Text>
              <Text color="#333">{state.network.height}</Text>
            </Stack>
          </Stack>
          <Stack>
            <Text>Node</Text>
            <Text>{state.settings.gateway}</Text>
          </Stack>
          <Stack>
            <Text>Response</Text>
            <Code>
              <Textarea defaultValue={JSON.stringify(state.network.response, null, '\t')} />
            </Code>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>)

  }

  const handleOpen = (route: string) => {
    if (history.location.pathname === "/mainpage/wallets/open") {
      onOpen()
      history.replace('transfers') //Redirect main page to transfers if wallets is selected from popup
    }

    switch (route) {
      case 'wallets': setDrawer('wallets'); onOpen(); break;
      case 'settings': setDrawer('settings');
        onOpen();
        break;
    }
    return null
  }

  return (<Router basename="/mainpage" >
    <CSSReset />
    <Switch>
      <Route exact path="/preview">
        <Preview />
      </Route>
      <Route path="/">
        <Flex overflow="none" w="100%" px={5} py={4} justifyContent="space-around" alignItems="center" borderBottom="1px" borderBottomColor="gray.200">
          <Flex flexDirection="row" justifyContent="center" alignItems="center">
            <ArweaveLogo />
          </Flex>
          <ButtonGroup marginLeft="auto">
            {/* @ts-ignore*/}  {/* Just following the Chakra-ui docs!*/}
            <Link as={ReactLink} to="/pdfs"><Button leftIcon={FaFilePdf} bg="white" color="grey" border="none" size="lg">PDFs</Button></Link>
            {/* @ts-ignore*/}
            <Link as={ReactLink} to="/pages"><Button leftIcon={FaRegFileAlt} bg="white" color="grey" border="none" size="lg">Pages</Button></Link>
            {/*@ts-ignore*/}
            <Link as={ReactLink} to="/transfers"><Button leftIcon={FaMoneyCheckAlt} bg="white" color="grey" border="none" size="lg">Transfers</Button></Link>
            <Button leftIcon={FaWallet} bg="white" color="grey" border="none" size="lg" onClick={() => handleOpen('wallets')}>Wallets</Button>
            <Button leftIcon={FaCog} bg="white" color="grey" border="none" size="lg" onClick={() => handleOpen('settings')}>Settings</Button>
          </ButtonGroup>
        </Flex >
        <PseudoBox bg="#4a4a4a" px={2}>
          <Flex direction="row" alignItems="center" justifyContent="space-around">
            <Text justifySelf="start" color="white" fontSize={24}>{headerLabel[history.location.pathname.split('/')[2].toString()]}</Text>
            <Stack fontSize={14} color="white" marginLeft="auto">
              <Text>{state.activeWallet ? state.activeWallet : null}</Text>
              <Text>{state.activeWallet ? parseFloat(state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].balance).toFixed(6) : 0} AR </Text>
            </Stack>
            <Button marginLeft={2} color="black" bg="white" onClick={() => setArModal(true)}>Send AR</Button>
          </Flex>
        </PseudoBox>
        <Box position="absolute" bg="#f6f6f7" w="100%" h="90%" px={8} pt={4} justifyContent="space between" alignItems="center">
          <Switch>
            <Route path="/pages">
              <Pages />
            </Route>
            <Route path="/pdfs">
              <Pdfs />
            </Route>
            <Route path="/transfers">
              <Transfers />
            </Route>
            <Route path="/wallets/open">
              {() => {handleOpen('wallets'); console.log('i see wallets')}}
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>
          </Switch>
          <PseudoBox position="fixed" bottom="20px" right="20px" bg="#434750" color="white" cursor="pointer"
            onClick={() => openModal(true)}>
            <Stack isInline align="center" px="5px" py="10px">
              <Text>{state.network.connected ? "Connected" : "Disconnected"}</Text>
              <FaCircle color={state.network.connected ? "#86dc22" : "red"} />
            </Stack>
          </PseudoBox>
          <TransferModal open={arModal} close={closeTransferModal}/>
          <NetworkModal />
        </Box>
        <Drawer
          size="sm"
          placement="right"
          onClose={handleClose}
          isOpen={isOpen}>
          <DrawerOverlay />
          {drawer === 'wallets' ? <Wallets /> : <Settings />}
        </Drawer>
      </Route>
    </Switch>
  </Router>
  )
}


export default BrowserPage
