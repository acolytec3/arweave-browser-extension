import React, { useState } from 'react';
import { Flex, Box, Button, Text, Input, PseudoBox, DrawerContent, DrawerBody, DrawerHeader, Stack, 
Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalCloseButton,
ModalBody,
ModalFooter} from "@chakra-ui/core";
import { addWallet, decryptKey } from '../providers/wallets'
import Dropzone from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { initialStateType } from '../background'
import { FaWallet, FaCheck, FaTrash, FaPen, FaKey } from 'react-icons/fa'
import ArweaveCrypto from '../providers/arweaveCrypto'

const arweaveCrypto = new ArweaveCrypto();

const Wallets = () => {

  const state = useSelector((rootState: initialStateType) => rootState)
  const dispatch = useDispatch()
  const [wallet, updateWallet] = useState()
  const [processing, setProcessing] = useState(false)
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [modal, setModal] = useState(false)
  const [modalAddress, setModalAddress] = useState('')

  const onDrop = (acceptedFiles: any) => {
    setProcessing(true);
    const reader = new FileReader()
    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = async function (event) {
      if (acceptedFiles[0].type === "application/json") {
        updateWallet(JSON.parse(event!.target!.result as string))
      }
      //Add error handling where invalid wallet
    }
    reader.readAsText(acceptedFiles[0])
  }

  const setWalletName = (evt: any) => setNickname(evt.target.value)
  const updatePassword = (evt: any) => setPassword(evt.target.value)

  const WalletTable = () => {
    return (<Flex direction="column" >{state.wallets.length > 0 && state.wallets.map((wallet: any) => {
      return (
        Wallet(wallet))
    })}</Flex>)
  }

  const Wallet = (wallet: any) => {
    const [nick, setNick] = useState(wallet.nickname)
    const [showEdit, setEdit] = useState(false)

    return (
      <PseudoBox key={wallet.nickname + 'pseudo1'} borderBottom="1px" borderColor="#44474c" overflow="ellipsis" >
        {/*@ts-ignore*/}
        {!showEdit ? <Text color="#f9f9f9" fontSize="md" my={2} key={wallet.nickname}>{wallet.nickname}</Text>
          : <Input padding={0}
            bg="#282d33"
            borderBottom="1px"
            border="white"
            color="#f9f9f9"
            fontSize="md"
            my={2}
            key={wallet.nickname + '2'}
            value={nick}
            onChange={(evt: any) => setNick(evt.target.value)}
            onBlur={() => {
              setEdit(false)
              dispatch({ type: 'UPDATE_NICKNAME', payload: { address: wallet.address, nickname: nick } })
            }} />
        }
        <Text color="#9da1ab" overflow="hidden" key={wallet.address}>{wallet.address}</Text>
        <Text color="#6d727d" key={wallet.balance}>{parseFloat(wallet.balance).toFixed(5).toLocaleString()} AR {(wallet.address === state.activeWallet) && "- ACTIVE"} </Text>
        <Stack isInline>
          <PseudoBox key={wallet.nickname + 'pseudo2'} color="white" as="button" onClick={() => {
            dispatch({ type: 'SET_ACTIVE', payload: { address: wallet.address } })
          }} alignContent="start">
            <FaCheck />
            <Text>Use</Text></PseudoBox>
          <PseudoBox color="white" as="button" onClick={() => {
            dispatch({ type: 'REMOVE_WALLET', payload: { address: wallet.address } })
          }} alignContent="center">
            <FaTrash />
            <Text>Remove</Text></PseudoBox>
          <PseudoBox color="white" as="button" onClick={() => setEdit(true)} alignContent="center">
            <FaPen />
            <Text>Rename</Text>
          </PseudoBox>
          <PseudoBox color="white" as="button" onClick={() => {
            setModalAddress(wallet.address)
            setModal(true)
           }} alignContent="center">
            <FaKey />
            <Text>Export Key</Text></PseudoBox>
        </Stack>
      </PseudoBox>
    )
  }

  const decryptWallet = async (password: string) => {
    let decryptedKey = await decryptKey(password, modalAddress)
    const blob = new Blob([decryptedKey],{type:'application/json'});
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `arweave-keyfile-${modalAddress}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const ExportModal = () => {
    const [password, setPassword] = useState('')
    return (<Modal isOpen={modal} onClose={() => setModal(false)} >
              <ModalOverlay />
      <ModalContent>
        <ModalHeader>Export Wallet File
        <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Stack borderTop="1px" color="black" >
            <Stack>
              <Text color="#888">Address</Text>
              <Text color="#333">{modalAddress}</Text>
            </Stack>
            <Stack>
              <Input placeholder="Confirm your wallet password" type="password" borderBottom="1px" border="#999" color="#333"
              value={password} onChange={(evt: any) => setPassword(evt.target.value)} />
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter alignContent="center">
          <Button alignSelf="center" width="100%" bg="#282d33" color="white" onClick={() => {
            decryptWallet(password)
            setPassword('')
            setModal(false)
          }}
            >Download Wallet Keyfile</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>)
  }

  const loadWallet = async () => {
    //TODO: Figure out why State isn't updating after background ADD_WALLET dispatch
    let res = await addWallet(wallet, nickname, password);
    setProcessing(false)
  }

  const WalletLoader = () => {

    return (
      <Box w="200px" borderStyle='dashed' borderWidth="2px">
        <Dropzone onDrop={onDrop} accept="application/json">
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Box flexDirection="row" padding={3}><Text fontSize={14} textAlign="center">Drop a wallet file or click to load wallet</Text></Box>
              </div>
            </section>
          )}
        </Dropzone>
      </Box>
    )
  }

  return (
    <DrawerContent>
      <ExportModal />
      <DrawerHeader borderBottomWidth="1px" bg="#434750" color="#fff">
        <Stack isInline align="center" justify="space-between">
          <Text>Wallets</Text>
          <FaWallet /></Stack></DrawerHeader>
      <DrawerBody bg="#282d33">
        <Flex direction="column">
          {state.activeWallet && !processing && <WalletTable />}
          {(!processing) && <WalletLoader />}
          {(processing) &&
            <Box w="200px">
              <Text>Enter a wallet nickname</Text>
              <Input
                bg="#282d33"
                borderBottom="1px"
                border="white"
                color="#f9f9f9"
                fontSize="md"
                my={2} placeholder="Wallet name" value={nickname} onChange={setWalletName} />
              <Input
                bg="#282d33"
                borderBottom="1px"
                border="white"
                color="#f9f9f9"
                fontSize="md"
                my={2} placeholder="Set an encryption phrase" value={password} onChange={updatePassword} type="password" />
              <Text>This encryption passphrase keeps your key file secure, so you'll need it each time you send AR or archive a page.

If you forget your passphrase you'll need to reimport this file again</Text>
              <Button onClick={loadWallet}>Load Wallet</Button>
            </Box>}
        </Flex></DrawerBody>
    </DrawerContent>
  )
}

export default Wallets
