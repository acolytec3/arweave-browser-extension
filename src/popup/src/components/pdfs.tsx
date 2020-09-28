import React, { Fragment, useState, useEffect } from 'react';
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom';
import {
  Text, Flex, Button, Modal, SimpleGrid, Input, Spinner, Stack, Link, Code, Textarea, useToast,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Divider, useClipboard, PseudoBox
} from "@chakra-ui/core";
import axios, { AxiosResponse } from 'axios'
import { FaCheckDouble } from 'react-icons/fa'
import { getFee } from '../providers/wallets'
import { useSelector } from 'react-redux'
import { initialStateType, wallet, pdf } from '../background'
import moment from 'moment'
import { FaClone } from 'react-icons/fa'

const Pdfs = () => {
  const [isOpen, setOpen] = useState(false)
  const state = useSelector((rootState: initialStateType) => rootState)
  const [balance, setBalance] = useState(state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].balance)
  const history = useHistory();
  const [fee, setFee] = useState('0')
  const [size, setSize] = useState('0')
  const [password, setPassword] = useState('')
  const [pdfModal, setPdfModal] = useState({ open: false, pdf: {} as pdf })
  const [debugResponse, setRes] = useState({} as AxiosResponse)
  const [debugLoading, setLoading] = useState(false)
  const toast = useToast();
  const [txnHover, setTxnHover] = useState(false)
  const [addrHover, setAddrHover] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyValue, setCopy] = useState('')
  const { onCopy } = useClipboard(copyValue);

  useEffect(() => {
    let location = window.location.hash.substr(16,).split('#')[0]

    if (!location) return;  //only run this effect if actually retrieving a PDF and not just navigating to the PDFs page

    axios.head(location).
      then((res) => {
        let size = parseInt(res.headers["content-length"])
        setSize(size.toString())
        return getFee(size)
      })
      .then((res) => {
        setFee(res);
        setOpen(true);
      })
      .catch(() => toast({
        title: 'Error',
        status: 'error',
        duration: 3000,
        position: 'bottom-left',
        description: 'Error getting fee, check your network connection and try again'
      }))
  }, [])

  const pdfSaver = async () => {
    let pdfDeets = {
      'url': window.location.hash.substr(16,).split('#')[0],
      'fee': fee,
      'status': 'pending',
      'txnId': '',
      'timestamp': '',
      'source': null,
      'debug': {},
      'size': parseInt(size)
    }

    chrome.runtime.sendMessage({ action: 'archive.pdf', payload: { pdf: pdfDeets, password: password } })
  }

  const getDebugInfo = async (pdf: pdf) => {

    setLoading(true)
    let txn = await axios.get(`${state.settings.gateway}/tx/${pdf.txnId}`)
    setRes(txn);
    setLoading(false)
  }

  const PdfModal = () => {

    return (
      <Modal isOpen={pdfModal.open} onClose={() => setPdfModal({ open: false, pdf: {} as pdf })} scrollBehavior="inside" size="450px">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Archived PDF
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody >
            <Text paddingTop={3} borderTop="1px" borderColor="black" color="#888">ID</Text>
            <PseudoBox cursor="pointer" onMouseEnter={() => setTxnHover(true)} onMouseLeave={() => setTxnHover(false)} 
            onClick={() => {
              setCopy(pdfModal.pdf.txnId)
              onCopy!();
              setCopied(true);
              setTimeout(() => setCopied(false),2000)
            }
            }>
              {!txnHover && <Text fontSize={14} paddingBottom="5px">{pdfModal.pdf.txnId}</Text>}
              {txnHover && !copied && <Stack isInline justify="center"><FaClone color="grey" size={12}/><Text>Click to copy</Text></Stack>}
              {txnHover && copied && <Stack isInline justify="center"><FaClone color="grey" size={12}/><Text>Copied!</Text></Stack>}
            </PseudoBox>
            <Text color="#888">From</Text>
            <PseudoBox cursor="pointer" onMouseEnter={() => setAddrHover(true)} onMouseLeave={() => setAddrHover(false)} 
            onClick={() => {
              setCopy(state.activeWallet)
              onCopy!();
              setCopied(true);
              setTimeout(() => setCopied(false),2000)
            }
            }>
              {!addrHover && <Text fontSize={14} paddingBottom="5px">{state.activeWallet}</Text>}
              {addrHover && !copied && <Stack isInline justify="center"><FaClone color="grey" size={12}/><Text>Click to copy</Text></Stack>}
              {addrHover && copied && <Stack isInline justify="center"><FaClone color="grey" size={12}/><Text>Copied!</Text></Stack>}
            </PseudoBox>
            <Text color="#888" >File URL</Text>
            <Link isExternal fontSize={14} paddingBottom="5px" href={pdfModal.pdf.url}>{pdfModal.pdf.url}</Link>
            <Divider />
            <Stack isInline>
              <Stack w="50%">
                <Text color="#888">PDF Size</Text>
                <Text fontSize={14} >{parseInt(size) / 1000} KB</Text>
              </Stack>
              <Stack>
                <Text color="#888">Fee</Text>
                <Text fontSize={14} >{pdfModal.pdf.fee} AR</Text>
              </Stack>
            </Stack>
            <Stack isInline>
              <Stack w="50%">
                <Text color="#888">Time</Text>
                <Text fontSize={14} >{moment(parseInt(pdfModal.pdf.timestamp)).startOf('minute').fromNow()}</Text>
              </Stack>
              <Stack>
                <Text color="#888">Status</Text>
                <Text fontSize={14} >{pdfModal.pdf.status}</Text>
              </Stack>
            </Stack>
            <Divider />
            <Stack marginBottom="10px">
              <Text color="#888">Raw Transaction</Text>
              <Link isExternal href={state.settings.gateway + '/tx/' + pdfModal.pdf.txnId}>View raw transaction</Link>
            </Stack>
            <Stack>
              <Text color="#888">Block Explorers</Text>
              <Link isExternal href={'https://viewblock.io/arweave/tx/' + pdfModal.pdf.txnId}>View on ViewBlock</Link>
            </Stack>
            {state.settings.debug && <Stack>
              <Divider />
              <Stack>
                <Text>Debug Transaction</Text>
                <Code>
                  {/*@ts-ignore  --makes these readonly text areas, even if the Chakra-UI component doesn't recognize the prop*/}
                  <Textarea overflow="scroll" height="200px" readOnly={true} fontSize='xs' defaultValue={JSON.stringify(pdfModal.pdf.debug, null, '\t')} />
                </Code>
                <Text>Debug Response</Text>
                {/*@ts-ignore  --makes these readonly text areas, even if the Chakra-UI component doesn't recognize the prop*/}
                {debugLoading ? <Spinner alignSelf="center" justifySelf="center" /> : <Code><Textarea fontSize="xs" readOnly={true}
                  overflow="auto"
                  height="200px"
                  defaultValue={JSON.stringify(debugResponse, null, '\t')} />
                </Code>}
              </Stack>
            </Stack>}
          </ModalBody>
          <ModalFooter>
            <Button width="99%" bg="#333" color="white"
              onClick={() => window.open(state.settings.gateway + '/' + pdfModal.pdf.txnId, '_blank')}>View PDF</Button>
          </ModalFooter></ModalContent>
      </Modal>)
  }

  const PdfRow = (pdf: pdf) => {
    return (
      <SimpleGrid columns={3} background="white" fontSize={14} my={1} cursor="pointer" key={pdf.txnId + '1'}
        borderRadius="2px" borderBottom="1px" borderBottomColor="#eee"
        onClick={() => {
          getDebugInfo(pdf);
          setPdfModal({ open: true, pdf: pdf })
        }}>
        <Text key={pdf.url}>{pdf.url}</Text>
        <Text key={pdf.fee}>{parseFloat(pdf.fee).toFixed(6).toLocaleString()} AR</Text>
        <Stack isInline><Text key={pdf.timestamp}>{moment(parseInt(pdf.timestamp)).format()}</Text>
          {pdf.status === 'pending' ? <Spinner size="md" color="red.500" /> : <FaCheckDouble color="green" size={24} />}
        </Stack>
      </SimpleGrid>
    )
  }

  const PdfTable = () => {

    let pdfs = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].pdfs
    return <Fragment><Flex direction="column">
      {pdfs && <SimpleGrid colr="#888" columns={3}>
        <Text fontWeight="bold" key="url">URL</Text>
        <Text fontWeight="bold" key="fee">Fee</Text>
        <Text fontWeight="bold" key="timestamp">Time</Text>
      </SimpleGrid>}
      {pdfs && pdfs.map((pdf: pdf) => {
        return PdfRow(pdf)
      })}
    </Flex></Fragment>
  }

  return (<HashRouter basename="/mainpage">
    <Switch>
      <Route path="/pdfs" exact={true}>
        <PdfTable />
        <PdfModal />
      </Route>
      <Route path="/pdfs/" exact={false}>
        <Flex width="100%" direction="column">
          <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirm Transaction</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>From: {state.activeWallet}</Text>
                <Text>Page URL: {window.location.hash.substr(16,).split('#')[0]}</Text>
                <Text>Page Size: {parseInt(size) / 1000} kb</Text>
                <Text>Fee: {fee} AR</Text>
                <Text>Balance after transaction: {parseFloat(typeof (balance) === 'string' ? balance : '0') - parseFloat(fee)} AR</Text>
                <Input value={password} onChange={((evt: any) => setPassword(evt.target.value))} type="password" />
              </ModalBody>
              <ModalFooter>
                <Button bg="#333" color="white" onClick={function () {
                  pdfSaver();
                  history.push('/pdfs')
                }}>Confirm and Archive Pdf</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Route>
    </Switch>
  </HashRouter>
  )
}

export default Pdfs
