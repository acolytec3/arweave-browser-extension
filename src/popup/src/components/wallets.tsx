import React, { useState, Fragment } from 'react';
import { Flex, Box, Button, Text, Input, SimpleGrid, DrawerContent, DrawerBody, DrawerHeader, DrawerFooter, Stack, List, ListItem } from "@chakra-ui/core";
import { addWallet } from '../providers/wallets'
import Dropzone from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { initialStateType } from '../background'
import { FaWallet, FaCheck, FaTrash } from 'react-icons/fa'

const Wallets = () => {

  const state = useSelector((rootState: initialStateType) => rootState)
  const dispatch = useDispatch()
  const [wallet, updateWallet] = useState()
  const [address, setAddress] = useState(state.activeWallet)
  const [processing, setProcessing] = useState(false)
  const [nickname, setNickname] = useState('')


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

  const WalletTable = () => {
    return (<List spacing={0} >{state.wallets.length > 0 ? state.wallets.map((wallet: any) => {
      return (
        Wallet(wallet) )
    }) : <span>No wallets</span>}</List>)
  }

  const Wallet = (wallet: any) => {
    return (
      <ListItem border="1px" >
        <Box alignItems="start">
          <Text fontSize="sm"key={wallet.nickname}>{wallet.nickname}</Text>
          <Text key={wallet.address}>{wallet.address}</Text>
          <Text key={wallet.balance}>{wallet.balance} AR</Text>
          <Stack isInline>
            <Stack align="center" justifyContent="center">
              <FaCheck />
              <Button bg="white" border="none" onClick={() => {
                dispatch({ type: 'SET_ACTIVE', payload: { address: wallet.address } })
              }}>Use</Button></Stack>
            <Stack align="center" justifyContent="center">
              <FaTrash />
              <Button bg="white" border="none" onClick={() => {
                dispatch({ type: 'REMOVE_WALLET', payload: { address: wallet.address } })
              }}>
                Remove</Button></Stack>
          </Stack>
        </Box>
      </ListItem>
    )
  }
  const loadWallet = async () => {
    //TODO: Figure out why State isn't updating after background ADD_WALLET dispatch
    let res = await addWallet(wallet, nickname);
    setProcessing(false)
  }

  const WalletLoader = () => {

    return (
      <Box w="400px" borderStyle='dashed' borderWidth="2px">
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
      <DrawerHeader borderBottomWidth="1px" bg="#434750" color="#fff">
        <Stack isInline align="center" justify="space-between">
          <Text>Wallets</Text>
          <FaWallet /></Stack></DrawerHeader>
      <DrawerBody>
        <Flex direction="column">
          {state.activeWallet && !processing && <WalletTable />}
          {(!processing) && <WalletLoader />}
          {(processing) &&
            <Box w="400px">
              <Text>Enter a wallet nickname</Text>
              <Input value={nickname} onChange={setWalletName} />
              <Button onClick={loadWallet}>Load Wallet</Button>
            </Box>}
        </Flex></DrawerBody>
    </DrawerContent>
  )
}

export default Wallets
