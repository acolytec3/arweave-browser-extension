import React, { useState } from 'react';
import {
  Flex, Box, Button, Text, Input, PseudoBox, DrawerContent, DrawerBody, DrawerHeader, Stack, useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter, DrawerFooter
} from "@chakra-ui/core";
import { addWallet, decryptKey, generateKey, getAddress } from '../providers/wallets'
import Dropzone from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { initialStateType } from '../background'
import { FaWallet, FaCheck, FaTrash, FaPen, FaKey } from 'react-icons/fa'
import csv from '../providers/csv'

const Wallets = () => {

  const state = useSelector((rootState: initialStateType) => rootState)
  const dispatch = useDispatch()
  const [wallet, updateWallet] = useState()
  const [processingWallet, setProcessing] = useState(false)
  const [loadingWallet, setLoadingWallet] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalAddress, setModalAddress] = useState('')
  const [loadingWalletAddress, setLoadingWalletAddress] = useState('')
  const toast = useToast();

  const onDrop = async (acceptedFiles: any) => {
    setProcessing(true);
    setLoadingWallet(false);
    const reader = new FileReader()
    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = async function (event) {
      if (acceptedFiles[0].type === "application/json") {
        try {
          let walletObject = JSON.parse(event!.target!.result as string)
          setLoadingWalletAddress(await getAddress(walletObject))
          updateWallet(walletObject)
        }
        catch (err) {
          console.log('Invalid json in wallet file')
          setProcessing(false)
          toast({
            title: 'Error loading wallet',
            status: 'error',
            duration: 3000,
            position: 'bottom-left',
            description: 'Invalid JSON in wallet file'
          })
        }
      }
      else {
        console.log('Invalid file type')
        setProcessing(false)
        toast({
          title: 'Error loading wallet',
          status: 'error',
          duration: 3000,
          position: 'bottom-left',
          description: 'Invalid file type'
        })
      }
    }
    try {
      reader.readAsText(acceptedFiles[0])
    }
    catch (err) {
      console.log('Invalid file type')
      setProcessing(false)
      toast({
        title: 'Error loading wallet',
        status: 'error',
        duration: 3000,
        position: 'bottom-left',
        description: 'Invalid file type'
      })
    }
  }

  const WalletTable = () => {
    let wallets = state.wallets
    return (<Stack spacing={0} margin="none" padding="none" width="100%" >{wallets.length > 0 && wallets.map((wallet: any) => {
      return (
        Wallet(wallet))
    })}</Stack>)
  }

  const Wallet = (wallet: any) => {
    const [nick, setNick] = useState(wallet.nickname)
    const [showEdit, setEdit] = useState(false)

    return (
      <PseudoBox key={wallet.nickname + 'pseudo1'} p="20px" marginBottom="10px" w="100%" bg="#32353c" borderBottom="1px" borderColor="#44474c" overflow="ellipsis" >
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
    const blob = new Blob([decryptedKey], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `arweave-keyfile-${modalAddress}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const generateWallet = async () => {
    let wallet = await generateKey()
    const blob = new Blob([JSON.stringify(wallet.key, null, 2)], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `arweave-keyfile-${wallet.address}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    updateWallet(wallet.key)
    setLoadingWalletAddress(wallet.address)
    setProcessing(true);
  }


  const generateCSV = async () => {
    let wallet = state.wallets.filter((wallet) => wallet.address === state.activeWallet)[0]
    let file = await csv.csv(wallet);
    const blob = new Blob([file], { type: 'text/csv' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `${wallet.address}-transactions.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const loadWallet = async (nickname: string, password: string) => {
    let res = await addWallet(wallet, nickname, password);
    if (res === true) {
      toast({
        title: 'Success loading wallet',
        status: 'success',
        duration: 3000,
        position: 'bottom-left',
        description: `Address - ${loadingWalletAddress}`
      })
    }
    else {
      toast({
        title: 'Error loading wallet',
        status: 'error',
        duration: 3000,
        position: 'bottom-left',
        description: `Address - ${loadingWalletAddress} already loaded`
      })
    }
    setProcessing(false)
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

  const WalletLoader = () => {
    return (
      <Box w="100%" borderStyle='dashed' borderWidth="2px">
        <Dropzone onDrop={onDrop} accept="application/json">
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Box flexDirection="row" padding={3}><Text fontSize={14} textAlign="center" color="white">Drop a wallet file or click to load wallet</Text></Box>
              </div>
            </section>
          )}
        </Dropzone>
        <Stack direction="column" width="90%" position="fixed" bottom="10px">
          <Button onClick={() => {
            setLoadingWallet(false);
            setProcessing(false);
          }}>Go Back</Button>
        </Stack>
      </Box>
    )
  }

  const WalletProcessor = () => {
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    return (
      <Box w="100%">
        <Stack>
          <Text color="white">Address</Text>
          <Text color="white">{loadingWalletAddress}</Text>
        </Stack>
        <Text color="white">Enter a wallet nickname</Text>
        <Input
          bg="#282d33"
          borderBottom="1px"
          border="white"
          color="#f9f9f9"
          fontSize="md"
          my={2} placeholder="Wallet name" value={nickname} onChange={(evt: any) => setNickname(evt.target.value)} />
        <Input
          bg="#282d33"
          borderBottom="1px"
          border="white"
          color="#f9f9f9"
          fontSize="md"
          my={2} placeholder="Set an encryption phrase" value={password} onChange={(evt: any) => setPassword(evt.target.value)} type="password" />
        <Text color="white">This encryption passphrase keeps your key file secure, so you'll need it each time you send AR or archive a page.
        If you forget your passphrase you'll need to reimport this file again</Text>
        <Stack direction="column" width="90%" position="fixed" bottom="10px">
          <Button onClick={() => loadWallet(nickname, password)}>Continue</Button>
          <Button onClick={() => {
            setLoadingWallet(false);
            setProcessing(false);
          }}>Go Back</Button>
        </Stack>
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
      <DrawerBody padding="0px" bg="#282d33">
          {state.activeWallet && !loadingWallet && !processingWallet &&
            <WalletTable />}
          {(loadingWallet) && <WalletLoader />}
          {(processingWallet) &&
            <WalletProcessor />}
      </DrawerBody>
      <DrawerFooter bg="#282d33">
        {!loadingWallet && !processingWallet &&
          <Stack width="100%" direction="column" >
            <Button onClick={() => setLoadingWallet(true)}>Load Wallet</Button>
            <Button onClick={generateWallet}>Create New Wallet</Button>
            <Button onClick={generateCSV}>Export Transactions</Button></Stack>}
        {loadingWallet && !processingWallet}
      </DrawerFooter>
    </DrawerContent>
  )
}

export default Wallets
