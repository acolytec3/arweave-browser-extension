import React, { Fragment, useState, useEffect } from 'react';
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom';
import {
  Text, Flex, Button, Modal, SimpleGrid, Input, Spinner, Stack, Code, Textarea, useToast, Switch as ChakraSwitch, FormLabel,
  ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Link } from "@chakra-ui/core";
import axios, { AxiosResponse } from 'axios'
import inline from '../providers/inline'
import { getFee, archivePage } from '../providers/wallets'
import { useSelector } from 'react-redux'
import { initialStateType, wallet } from '../background'

interface inline {
  title: string,
  size: number,
  html: any
}

var fee: string = '0'

const PagePreview = () => {
    const state = useSelector((rootState: initialStateType) => rootState)
    const [source, setSource] = useState({} as inline)
    const [incognito, setIncognito] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [password, setPassword] = useState('')
    const [balance, setBalance] = useState(state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].balance)
    const toast = useToast();
    const history = useHistory();
    
    const pageSaver = async () => {
      let pageDeets = {
        'title': source.title,
        'url': state.pageSource!.url,
        'fee': fee,
        'status': 'pending',
        'txnId': '',
        'timestamp': '',
        'size': source.size,
        'html': source.html
      }
      let res = await archivePage(pageDeets, password)
      res ? toast({
        title: 'Page archived',
        status: 'success',
        duration: 3000,
        position: 'bottom-left'
      }) : toast({
        title: 'Error archiving page',
        status: 'error',
        duration: 3000,
        position: 'bottom-left'
      })
    }

    let options = {}
    if (incognito) {
        options = {
        withCredentials: false,
        headers: {
            'Cache-Control': 'no-cache',
            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0'
        }
    }}

    useEffect(() => {
        if (!incognito) {
            inline.html(state.pageSource!.html, state.pageSource!.url).then((res) => {
                getFee(res.size).then((res) => fee = res)
                setSource(res)
                console.log(source)})
        }
        else {
            axios.get(state.pageSource!.url, options)
            .then((res) => inline.html(res.data, state.pageSource!.url))
            .then((res) => { 
                getFee(res.size).then((res) => fee = res)
                setSource(res);
                console.log(source)
            })
        } 
    },[incognito])


    
    return (<Flex direction="column" width="100%" height="100%">
        <Flex direction="row" justifyContent="space-between"><Text>Preview of {source.title}</Text>
        <Stack isInline alignContent="center" alignSelf="end" justifyContent="space-between">
        <FormLabel htmlFor='incognito' color="black">Incognito mode</FormLabel>
        <ChakraSwitch id="incognito" size="md" color="green" value={incognito} isChecked={incognito} 
        onChange={() => { 
            setIncognito(!incognito) 
            }} />
        </Stack></Flex>
        {/* @ts-ignore */}
        <iframe sandbox="" height="90%" srcDoc={source ? source.html : undefined} ></iframe>
                  <Button width="200px" onClick={() => setOpen(true)}>Archive Page</Button>
                  <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Confirm Transaction</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Text>From: {state.activeWallet}</Text>
                        <Text>Page Title: {state.pageSource!.title}</Text>
                        <Text>Page URL: {state.pageSource!.url}</Text>
                        <Text>Page Size: {source.size}</Text>
                        <Text>Fee: {fee}</Text>
                        <Text>Balance after transaction: {parseFloat(typeof (balance) === 'string' ? balance : '0') - parseFloat(fee)}</Text>
                        <Input placeholder="Enter your encryption passphrase" value={password} onChange={((evt: any) => setPassword(evt.target.value))} type="password" />
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={function () {
                          pageSaver();
                          history.push('/pages')
                        }}>Archive Page</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal></Flex>)
    }

export default PagePreview