import React, { Fragment, useState } from 'react';
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom';
import {
  Text, Flex, Button, Modal, SimpleGrid, Input, Spinner, Stack, Code, Textarea,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Link
} from "@chakra-ui/core";
import axios from 'axios'
import { FaCheckDouble } from 'react-icons/fa'
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
  const [pageModal, setPageOpen] = useState({ open: false, page: {} as page || null })
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
      'size': '',
      'html': pageSource.html
    }
    archivePage(pageDeets, password)
  }

  const PageRow = (page: page) => {
    return <SimpleGrid background="white" my={1} columns={4} cursor="pointer" key={page.txnId + '1'} onClick={() => { console.log(pageModal); setPageOpen({ open: true, page: page }) }}>
      <Text overflow="hidden" key={page.title}>{page.title}</Text>
      <Text overflow="hidden" key={page.url} >{page.url}</Text>
      <Text key={page.fee}>{parseFloat(page.fee).toFixed(6).toLocaleString()} AR</Text>
      <Stack isInline><Text key={page.timestamp}>{Date.now() - parseInt(page.timestamp)} ago</Text>
        {page.status === 'pending' ? <Spinner size="md" color="red.500" /> : <FaCheckDouble color="green" size={24} />}
      </Stack>
    </SimpleGrid>
  }

  const PageModal = () => {

    return (
      <Modal isOpen={pageModal.open} onClose={() => setPageOpen({ open: false, page: {} as page })}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Archived Page
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody >
            <Text paddingTop={3} borderTop="1px" borderColor="black">ID</Text>
            <Text>{pageModal.page.txnId}</Text>
            <Text>From</Text>
            <Text>{state.activeWallet}</Text>
            <Text>Page Title</Text>
            <Text>{pageModal.page.title}</Text>
            <Text>Page URL</Text>
            <Text>{pageModal.page.url}</Text>
            <Stack isInline>
              <Stack>
                <Text>Page Size</Text>
                <Text>0 KB</Text>
              </Stack>
              <Stack>
                <Text>Fee</Text>
                <Text>{pageModal.page.fee} AR</Text>
              </Stack>
            </Stack>
            <Stack borderBottom="1px" marginBottom="20px" isInline>
              <Stack>
                <Text>Time</Text>
                <Text>{pageModal.page.timestamp}</Text>
              </Stack>
              <Stack>
                <Text>Status</Text>
                <Text>{pageModal.page.status}</Text>
              </Stack>
            </Stack>
            <Stack>
              <Text>Raw Transaction</Text>
              <Link isExternal href={(state.settings ? state.settings.gateway : 'https://arweave.net') + '/tx/' + pageModal.page.txnId}>View raw transaction</Link>
            </Stack>
            <Stack>
              <Text>Block Explorers</Text>
              <Link isExternal href={'https://viewblock.io/arweave/tx/' + pageModal.page.txnId}>View on ViewBlock</Link>
            </Stack>
            {state.settings.debug && <Stack>
              <Stack>
                <Text>Debug Transaction</Text>
                <Code>
                  <Textarea value={JSON.stringify(pageModal.page.debug, null, '\t')} />
                </Code>
                <Text>Debug Response</Text>
                <Code>
                  <Textarea value={JSON.stringify(pageModal.page.debug, null, '\t')} />
                </Code>
              </Stack>
            </Stack>}
          </ModalBody>
          <ModalFooter>
            <Button width="99%" bg="#333" color="white"
              onClick={() => window.open((state.settings ? state.settings.gateway : 'https://arweave.net') + '/' + pageModal.page.txnId, '_blank')}>View Page</Button>
          </ModalFooter></ModalContent>
      </Modal>)
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
        <PageModal />
      </Route>
      <Route path="/pages/" exact={false}>
        <Flex width="100%" direction="column">
          <PagePreview />
          <Button width="200px" onClick={() => setOpen(true)}>Archive Page</Button>
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
                <Input placeholder="Enter your encryption passphrase" value={password} onChange={((evt: any) => setPassword(evt.target.value))} type="password" />
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
