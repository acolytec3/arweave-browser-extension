import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import {
  Text, Flex, Button, Modal, SimpleGrid, Spinner, Stack, Code, Textarea,
  ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Link } from "@chakra-ui/core";
import axios, { AxiosResponse } from 'axios'
import { FaCheckDouble } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { initialStateType, wallet, page } from '../background'
import moment from 'moment'

const Pages = () => {
  const [pageModal, setPageOpen] = useState({ open: false, page: {} as page || null })
  const state = useSelector((rootState: initialStateType) => rootState)
  const [debugResponse, setRes] = useState({} as AxiosResponse)
  const [debugLoading, setLoading] = useState(false)

  const getDebugInfo = async (page: page) => {
    setLoading(true)
    let txn = await axios.get(`${state.settings.gateway}/tx/${page.txnId}`)
    setRes(txn);
    setLoading(false)
  }

  const PageTable = () => {
    let pages = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].pages

    return <Flex direction="column">
      {pages && pages.length > 0 && <SimpleGrid columns={4}>
        <Text fontWeight="bold" key="title">Title</Text>
        <Text fontWeight="bold" key="url">URL</Text>
        <Text fontWeight="bold" key="fee">Fee</Text>
        <Text fontWeight="bold" key="timestamp">Time</Text>
      </SimpleGrid>}
      {pages && pages.length > 0 && pages.map((page: page) => {
        return PageRow(page)
      })}
    </Flex>
  }
  
  const PageRow = (page: page) => {
    return <SimpleGrid background="white" my={1} columns={4} cursor="pointer" key={page.txnId + '1'} borderRadius="2px" borderBottom="1px" borderBottomColor="#eee"
      onClick={() => {
        getDebugInfo(page);
        setPageOpen({ open: true, page: page })
      }}>
      <Text overflow="hidden" key={page.title}>{page.title}</Text>
      <Text overflow="hidden" key={page.url} >{page.url}</Text>
      <Text key={page.fee}>{parseFloat(page.fee).toFixed(6).toLocaleString()} AR</Text>
      <Stack isInline><Text key={page.timestamp}>{moment(parseInt(page.timestamp)).startOf('minute').fromNow()}</Text>
        {page.status === 'pending' ? <Spinner size="md" color="red.500" /> : <FaCheckDouble color="green" size={24} />}
      </Stack>
    </SimpleGrid>
  }

  const PageModal = () => {
    console.log(pageModal.page.size)
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
                <Text>{pageModal.page.size / 1000} KB</Text>
              </Stack>
              <Stack>
                <Text>Fee</Text>
                <Text>{pageModal.page.fee} AR</Text>
              </Stack>
            </Stack>
            <Stack borderBottom="1px" marginBottom="20px" isInline>
              <Stack>
                <Text>Time</Text>
                <Text>{moment(parseInt(pageModal.page.timestamp)).startOf('minute').fromNow()}</Text>
              </Stack>
              <Stack>
                <Text>Status</Text>
                <Text>{pageModal.page.status}</Text>
              </Stack>
            </Stack>
            <Stack>
              <Text>Raw Transaction</Text>
              <Link isExternal href={state.settings.gateway + '/tx/' + pageModal.page.txnId}>View raw transaction</Link>
            </Stack>
            <Stack>
              <Text>Block Explorers</Text>
              <Link isExternal href={'https://viewblock.io/arweave/tx/' + pageModal.page.txnId}>View on ViewBlock</Link>
            </Stack>
            {state.settings.debug && <Stack>
              <Stack>
                <Text>Debug Transaction</Text>
                <Code>
                  {/*@ts-ignore  --makes these readonly text areas, even if the Chakra-UI component doesn't recognize the prop*/}
                  <Textarea readOnly={true} fontSize='xs' defaultValue={JSON.stringify(pageModal.page.debug, null, '\t')} />
                </Code>
                <Text>Debug Response</Text>
                {/*@ts-ignore  --makes these readonly text areas, even if the Chakra-UI component doesn't recognize the prop*/}
                {debugLoading ? <Spinner alignSelf="center" justifySelf="center" /> : <Code><Textarea fontSize="xs" readOnly={true}
                  overflow="auto"
                  maxHeight="30px"
                  defaultValue={JSON.stringify(debugResponse, null, '\t')} />
                </Code>}
              </Stack>
            </Stack>}
          </ModalBody>
          <ModalFooter>
            <Button width="99%" bg="#333" color="white"
              onClick={() => window.open(state.settings.gateway + '/' + pageModal.page.txnId, '_blank')}>View Page</Button>
          </ModalFooter></ModalContent>
      </Modal>)
  }



  return (<HashRouter basename="/mainpage">
    <Switch>
      <Route path="/pages" exact={true}>
        <PageTable />
        <PageModal />
      </Route>
    </Switch>
  </HashRouter>
  )
}

export default Pages
