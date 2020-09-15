import React, { Fragment, useState, useEffect } from 'react';
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom';
import {
  Text, Flex, Button, Modal, SimpleGrid, Input, Spinner, Stack, Code, Textarea, useToast, Switch as ChakraSwitch, FormLabel,
  ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Link
} from "@chakra-ui/core";
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
  const [source, setSource] = useState({ title: '', size: 0, html: '' } as inline)

  const [isOpen, setOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [balance, setBalance] = useState(state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].balance)
  const toast = useToast();
  const history = useHistory();
  let incognito = false

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

  const getIncognitoRequest = () => {
    console.log('getting incognito request')
    axios.get(state.pageSource!.url, {
      withCredentials: false
    })
      .then((res) => inline.html(res.data, state.pageSource!.url))
      .then((res) => {
        getFee(res.size).then((res) => fee = res)
        setSource(res);
        console.log(source)
      })
      .catch(() => toast({
        title: 'Network error',
        status: 'error',
        duration: 3000,
        position: 'bottom-left',
        description: 'Error fetching page, check your network connection and try again'
      }))
  }

  const getRegularRequest = () => {
    inline.html(state.pageSource!.html, state.pageSource!.url).then((res) => {
      getFee(res.size).then((res) => fee = res)
      setSource(res)
    })
      .catch(() => toast({
        title: 'Processing error',
        status: 'error',
        duration: 3000,
        position: 'bottom-left',
        description: 'Error fetching page, please try again'
      }))
  }

  useEffect(() => {
    inline.html(state.pageSource!.html, state.pageSource!.url).then((res) => {
      getFee(res.size).then((res) => fee = res)
      setSource(res)
    })
      .catch(() => toast({
        title: 'Processing error',
        status: 'error',
        duration: 3000,
        position: 'bottom-left',
        description: 'Error fetching page, please try again'
      }))
  }, [])



  return (<Flex direction="column" width="100%" height="100%">
    <Flex direction="row" justifyContent="space-between"><Text>Preview of {source.title}</Text>
      <Stack isInline alignContent="center" alignSelf="end" justifyContent="space-between">
        <FormLabel htmlFor='incognito' color="black">Incognito mode</FormLabel>
        <ChakraSwitch id="incognito" size="md" color="green" value={incognito}
          onChange={() => {
            incognito = !incognito
            if (incognito) {
              attachIncognitoFilter();
              getIncognitoRequest();
            }
            else {
              removeIncognitoFilter();
              getRegularRequest();
            }
          }} />
      </Stack></Flex>
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

const attachIncognitoFilter = () => {
  chrome
    .webRequest
    .onBeforeSendHeaders
    .addListener(
      incognitoRequestFilter,
      { urls: ['<all_urls>'] },
      ['blocking', 'requestHeaders', 'extraHeaders']
    );
}

const removeIncognitoFilter = () => {
  chrome
    .webRequest
    .onBeforeSendHeaders
    .removeListener(
      incognitoRequestFilter
    );
}

const incognitoRequestFilter = (request: any) => {
  // Apply this filter to our requests only

  if (request.initiator != 'chrome-extension://' + chrome.runtime.id) {
    return;
  }
  if (request.url.match('^https?') == null) {
    return { cancel: true };
  }
  let headers = request.requestHeaders.filter((header: any) => {
    return header.name == 'User-Agent'
  });
  headers.push({
    name: 'Accept',
    value: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0'
  });
  headers.push({
    name: 'Cache-Control',
    value: 'no-cache'
  });
  return {
    requestHeaders: headers
  };
}