import React, { Fragment, useState } from 'react';
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom';
import {
  Text, Flex, Button, Modal, SimpleGrid, Input, Spinner, Stack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";
import axios from 'axios'
import { FaCheckDouble} from 'react-icons/fa'
import inline from '../providers/inline'
import { getFee, archivePage } from '../providers/wallets'
import { useSelector } from 'react-redux'
import { initialStateType, wallet, page } from '../background'
interface inline {
  title: string,
  size: number,
  html: any
}

var pageSource: inline = { title: '', size: 0, html: undefined }
var fee: string = '0'
const PagePreview = (): any => {
  const [source, setSource] = useState(null as any)

  axios.get(window.location.hash.substr(17,).split('#')[0])
    .then((res) => inline.html(res.data, window.location.hash.substr(17,).split('#')[0]))
    .then((res) => { pageSource = res; setSource(res.html) })

  getFee(pageSource.size).then((res) => fee = res)

  return (<Flex direction="column" width="100%"><Text>Preview of {window.location.hash.substr(17,).split('#')[0]}</Text>
    <iframe height="100%" width="80%" srcDoc={source ? source : undefined} ></iframe></Flex>)
}

const Pages = () => {
  const [isOpen, setOpen] = useState(false)
  const state = useSelector((rootState: initialStateType) => rootState)
  const [balance, setBalance] = useState(state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].balance)
  const history = useHistory();
  const [password, setPassword] = useState('')
  const pageSaver = () => {
    let pageDeets = {
      'title': pageSource.title,
      'url': window.location.hash.substr(17,).split('#')[0],
      'fee': fee,
      'status': 'pending',
      'txnId': '',
      'timestamp': '',
      'html': pageSource.html
    }
    archivePage(pageDeets, password)
  }

  const PageRow = (page: page) => {
    return <SimpleGrid columns={4} key={page.txnId + '1'} onClick={() => {}}>
      <Text overflow="hidden" key={page.title}>{page.title}</Text>
      <Text key={page.url}>{page.url}</Text>
      <Text key={page.fee}>{parseFloat(page.fee).toFixed(6).toLocaleString()} AR</Text>
      <Stack isInline><Text key={page.timestamp}>{Date.now() - parseInt(page.timestamp)} ago</Text>
      {page.status === 'pending' ? <Spinner size="md" color="red.500" /> : <FaCheckDouble color="green" size={24} />}
      </Stack>
      
    </SimpleGrid>
  }
  const PageTable = () => {
    let pages = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].pages

    return <Fragment><Flex direction="column">
      {pages && pages.length > 0 && <SimpleGrid columns={4}>
        <Text fontWeight="bold" key="title">Title</Text>
        <Text fontWeight="bold" key="url">URL</Text>
        <Text fontWeight="bold" key="fee">Fee</Text>
        <Text fontWeight="bold" key="timestamp">Time</Text>
      </SimpleGrid>}
      {pages && pages.length > 0 && pages.map((page: page) => {
        return PageRow(page)
      })}
    </Flex></Fragment>
  }

  return (<HashRouter basename="/mainpage">
    <Switch>
      <Route path="/pages" exact={true}>
        <PageTable />
      </Route>
      <Route path="/pages/" exact={false}>
        <Flex width="100%" direction="column">
          <PagePreview />
          <Button width="200px" onClick={() => setOpen(true)}> Archive Page</Button>
          <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirm Transaction</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>From: {state.activeWallet}</Text>
                <Text>Page Title: {pageSource.title}</Text>
                <Text>Page URL: {window.location.hash.substr(17,).split('#')[0]}</Text>
                <Text>Page Size: {pageSource.size}</Text>
                <Text>Fee: {fee}</Text>
                <Text>Balance after transaction: {parseFloat(typeof (balance) === 'string' ? balance : '0') - parseFloat(fee)}</Text>
                <Input value={password} onChange={((evt: any) => setPassword(evt.target.value))} type="password" />
              </ModalBody>
              <ModalFooter>
                <Button onClick={function () {
                  pageSaver();
                  history.push('/pages')
                }}>Archive Page</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Route>
    </Switch>
  </HashRouter>
  )
}

export default Pages
