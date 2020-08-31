import React, { useState} from 'react';
import { Flex, Box, Button, Text, Input, PseudoBox , DrawerContent, DrawerBody, DrawerHeader, DrawerFooter, Stack, List, ListItem } from "@chakra-ui/core";
import { addWallet } from '../providers/wallets'
import Dropzone from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux'
import { initialStateType } from '../background'
import { FaWallet, FaCheck, FaTrash } from 'react-icons/fa'

const Wallets = () => {

  const state = useSelector((rootState: initialStateType) => rootState)
  const dispatch = useDispatch()
  const [wallet, updateWallet] = useState()
  const [processing, setProcessing] = useState(false)
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  


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
        Wallet(wallet) )
    })}</Flex>)
  }

  const Wallet = (wallet: any) => {
    return (
      <PseudoBox borderBottom="1px" borderColor="#44474c" overflow="ellipsis" >
          <Text color="#f9f9f9" fontSize="md" my={2} key={wallet.nickname}>{wallet.nickname}</Text>
          <Text color="#9da1ab" overflow="hidden" key={wallet.address}>{wallet.address}</Text>
          <Text color="#6d727d" key={wallet.balance}>{parseFloat(wallet.balance).toFixed(5).toLocaleString()} AR {(wallet.address === state.activeWallet) && "- ACTIVE"} </Text>
          <Stack isInline>
            <PseudoBox color="white" as="button" onClick={() => {
                dispatch({ type: 'SET_ACTIVE', payload: { address: wallet.address } })
              }} alignContent="start">
              <FaCheck />
              <Text>Use</Text></PseudoBox>
              <PseudoBox color="white" as="button" onClick={() => {
                dispatch({ type: 'REMOVE_WALLET', payload: { address: wallet.address } })
              }} alignContent="center">
              <FaTrash />
              <Text>Remove</Text></PseudoBox>
          </Stack>
      </PseudoBox>
    )
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
              <Input placeholder="Wallet name" value={nickname} onChange={setWalletName} />
              <Input placeholder="Set an encryption phrase" value={password} onChange={updatePassword} type="password" />
              <Text>This encryption passphrase keeps your key file secure, so you'll need it each time you send AR or archive a page.

If you forget your passphrase you'll need to reimport this file again</Text>
              <Button onClick={loadWallet}>Load Wallet</Button>
            </Box>}
        </Flex></DrawerBody>
    </DrawerContent>
  )
}

export default Wallets
