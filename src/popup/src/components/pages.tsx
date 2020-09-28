import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import {
  Text, Flex, Button, Modal, SimpleGrid, Spinner, Stack, Code, Textarea,
  ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Link, Divider, PseudoBox, useClipboard } from "@chakra-ui/core";
import axios, { AxiosResponse } from 'axios'
import { FaCheckDouble, FaClone } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { initialStateType, wallet, page } from '../background'
import moment from 'moment'

const Pages = () => {
  const [pageModal, setPageOpen] = useState({ open: false, page: {} as page || null })
  const state = useSelector((rootState: initialStateType) => rootState)
  const [debugResponse, setRes] = useState({} as AxiosResponse)
  const [debugLoading, setLoading] = useState(false)
  const [txnHover, setTxnHover] = useState(false)
  const [addrHover, setAddrHover] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyValue, setCopy] = useState('')
  const { onCopy } = useClipboard(copyValue);

  const getDebugInfo = async (page: page) => {
    setLoading(true)
    let txn = await axios.get(`${state.settings.gateway}/tx/${page.txnId}`)
    setRes(txn);
    setLoading(false)
  }

  const PageTable = () => {
    let pages = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].pages

    return <Flex direction="column">
      {pages && pages.length > 0 && <SimpleGrid color="#888" columns={4}>
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
    return <SimpleGrid background="white" my={1} fontSize={14} columns={4} cursor="pointer" key={page.txnId + '1'} borderRadius="2px" borderBottom="1px" borderBottomColor="#eee"
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
    return (
      <Modal isOpen={pageModal.open} onClose={() => setPageOpen({ open: false, page: {} as page })} scrollBehavior="inside" size="450px">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Archived Page
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody >
            <Text color="#888" paddingTop={3} borderTop="1px" borderColor="black">ID</Text>
            <PseudoBox cursor="pointer" onMouseEnter={() => setTxnHover(true)} onMouseLeave={() => setTxnHover(false)} 
            onClick={() => {
              onCopy!();
              setCopy(pageModal.page.txnId)
              setCopied(true);
              setTimeout(() => setCopied(false),2000)
            }
            }>
              {!txnHover && <Text fontSize={14} paddingBottom="5px">{pageModal.page.txnId}</Text>}
              {txnHover && !copied && <Stack isInline justify="center"><FaClone color="grey" size={12}/><Text>Click to copy</Text></Stack>}
              {txnHover && copied && <Stack isInline justify="center"><FaClone color="grey" size={12}/><Text>Copied!</Text></Stack>}
            </PseudoBox>
            <Text color="#888">From</Text>
            <PseudoBox cursor="pointer" onMouseEnter={() => setAddrHover(true)} onMouseLeave={() => setAddrHover(false)} 
            onClick={() => {
              onCopy!();
              setCopy(state.activeWallet)
              setCopied(true);
              setTimeout(() => setCopied(false),2000)
            }
            }>
              {!addrHover && <Text fontSize={14} paddingBottom="5px">{state.activeWallet}</Text>}
              {addrHover && !copied && <Stack isInline justify="center"><FaClone color="grey" size={12}/><Text>Click to copy</Text></Stack>}
              {addrHover && copied && <Stack isInline justify="center"><FaClone color="grey" size={12}/><Text>Copied!</Text></Stack>}
            </PseudoBox>
            <Text color="#888">Page Title</Text>
            <Text fontSize={14} paddingBottom="5px">{pageModal.page.title}</Text>
            <Text color="#888">Page URL</Text>
            <Link isExternal fontSize={14} paddingBottom="5px" href={pageModal.page.url}>{pageModal.page.url}</Link>
            <Stack isInline>
              <Stack w="50%">
                <Text color="#888">Page Size</Text>
                <Text fontSize={14}>{pageModal.page.size / 1000} KB</Text>
              </Stack>
              <Stack>
                <Text color="#888">Fee</Text>
                <Text fontSize={14}>{pageModal.page.fee} AR</Text>
              </Stack>
            </Stack>
            <Stack marginBottom="20px" isInline>
              <Stack w="50%">
                <Text color="#888">Time</Text>
                <Text fontSize={14}>{moment(parseInt(pageModal.page.timestamp)).format()}</Text>
              </Stack>
              <Stack>
                <Text color="#888">Status</Text>
                <Text fontSize={14}>{pageModal.page.status}</Text>
              </Stack>
            </Stack>
            <Divider />
            <Stack>
              <Text color="#888">Raw Transaction</Text>
              <Link fontSize={14} isExternal href={state.settings.gateway + '/tx/' + pageModal.page.txnId}>View raw transaction</Link>
            </Stack>
            <Stack>
              <Text color="#888">Block Explorers</Text>
              <Link fontSize={14} isExternal href={'https://viewblock.io/arweave/tx/' + pageModal.page.txnId}>View on ViewBlock</Link>
            </Stack>
            {state.settings.debug && <Stack>
              <Stack>
                <Divider />
                <Text>Debug Transaction</Text>
                <Code>
                  {/*@ts-ignore  --makes these readonly text areas, even if the Chakra-UI component doesn't recognize the prop*/}
                  <Textarea overflow="scroll" height="200px" readOnly={true} fontSize='xs' defaultValue={JSON.stringify(pageModal.page.debug, null, '\t')} />
                </Code>
                <Text>Debug Response</Text>
                {/*@ts-ignore  --makes these readonly text areas, even if the Chakra-UI component doesn't recognize the prop*/}
                {debugLoading ? <Spinner alignSelf="center" justifySelf="center" /> : <Code><Textarea fontSize="xs" readOnly={true}
                  overflow="scroll"
                  height="200px"
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
