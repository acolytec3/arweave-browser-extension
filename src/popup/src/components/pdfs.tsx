import React, { Fragment, useState, useEffect } from 'react';
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom';
import {
  Text, Flex, Button, Modal, SimpleGrid, Input, Spinner, Stack, Link, Code, Textarea, useToast,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";
import axios, { AxiosResponse } from 'axios'
import { FaCheckDouble } from 'react-icons/fa'
import { getFee, archivePdf } from '../providers/wallets'
import { useSelector } from 'react-redux'
import { initialStateType, wallet, pdf } from '../background'



const Pdfs = () => {
  const [isOpen, setOpen] = useState(false)
  const state = useSelector((rootState: initialStateType) => rootState)
  const [balance, setBalance] = useState(state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].balance)
  const history = useHistory();
  const [source, setSource] = useState(null as any)
  const [fee, setFee] = useState('0')
  const [size, setSize] = useState('0')
  const [password, setPassword] = useState('')
  const [pdfModal, setPdfModal] = useState({ open: false, pdf: {} as pdf })
  const [debugResponse, setRes] = useState({} as AxiosResponse)
  const [debugLoading, setLoading] = useState(false)
  const toast = useToast();

  useEffect(() => {
    console.log(window.location.hash.substr(16,))
    axios({
      url: window.location.hash.substr(16,).split('#')[0],
      method: 'get',
      responseType: 'blob',
      headers: {
        Accept: 'application/pdf',
        'Content-Type': 'application/pdf',
        mode: 'no-cors'
      }
    })
      .then(response => {

        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = ((file) => {
          setSource(file!.target!.result)
        })
        setSize(response.data.size)
        getFee(response.data.size).then((res) => {
          setFee(res);
          setOpen(true)
        })
        .catch(() => toast({
          title: 'Error',
          status: 'error',
          duration: 3000,
          position: 'bottom-left',
          description: 'Error getting fee, check your network connection and try again'
        }))
        reader.readAsArrayBuffer(response.data)
      })

  }, [])

  const pdfSaver = async () => {
    let pdfDeets = {
      'url': window.location.hash.substr(16,).split('#')[0],
      'fee': fee,
      'status': 'pending',
      'txnId': '',
      'timestamp': '',
      'source': source,
      'debug':{},
      'size':parseInt(size)
    }

    let res = await archivePdf(pdfDeets, password)
    res ? toast({
      title: 'PDF archived',
      status: 'success',
      duration: 3000,
      position: 'bottom-left'
    }) :toast({
      title: 'Error archiving PDF',
      status: 'error',
      duration: 3000,
      position: 'bottom-left'
    })
  }

  const getDebugInfo = async (pdf: pdf) => {

    setLoading(true)
    let txn = await axios.get(`${state.settings.gateway}/tx/${pdf.txnId}`)
    setRes(txn);
    setLoading(false)
  }

  const PdfModal = () => {

    return (
      <Modal isOpen={pdfModal.open} onClose={() => setPdfModal({ open: false, pdf: {} as pdf })}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Archived Page
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody >
            <Text paddingTop={3} borderTop="1px" borderColor="black">ID</Text>
            <Text>{pdfModal.pdf.txnId}</Text>
            <Text>From</Text>
            <Text>{state.activeWallet}</Text>
            <Text>PDF URL</Text>
            <Text>{pdfModal.pdf.url}</Text>
            <Stack isInline>
              <Stack>
                <Text>PDF Size</Text>
                <Text>{parseInt(size)/1000} KB</Text>
              </Stack>
              <Stack>
                <Text>Fee</Text>
                <Text>{pdfModal.pdf.fee} AR</Text>
              </Stack>
            </Stack>
            <Stack borderBottom="1px" marginBottom="20px" isInline>
              <Stack>
                <Text>Time</Text>
                <Text>{pdfModal.pdf.timestamp}</Text>
              </Stack>
              <Stack>
                <Text>Status</Text>
                <Text>{pdfModal.pdf.status}</Text>
              </Stack>
            </Stack>
            <Stack>
              <Text>Raw Transaction</Text>
              <Link isExternal href={state.settings.gateway + '/tx/' + pdfModal.pdf.txnId}>View raw transaction</Link>
            </Stack>
            <Stack>
              <Text>Block Explorers</Text>
              <Link isExternal href={'https://viewblock.io/arweave/tx/' + pdfModal.pdf.txnId}>View on ViewBlock</Link>
            </Stack>
            {state.settings.debug && <Stack>
              <Stack>
                <Text>Debug Transaction</Text>
                <Code>
                  {/*@ts-ignore  --makes these readonly text areas, even if the Chakra-UI component doesn't recognize the prop*/}
                  <Textarea readOnly={true} fontSize='xs' defaultValue={JSON.stringify(pdfModal.pdf.debug, null, '\t')} />
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
              onClick={() => window.open(state.settings.gateway  + '/' + pdfModal.pdf.txnId, '_blank')}>View PDF</Button>
          </ModalFooter></ModalContent>
      </Modal>)
  }

  const PdfRow = (pdf: pdf) => {
    return (
      <SimpleGrid columns={3} background="white" my={1} cursor="pointer" key={pdf.txnId + '1'} onClick={() => { 
        getDebugInfo(pdf);
        setPdfModal({ open: true, pdf: pdf }) }}>
        <Text key={pdf.url}>{pdf.url}</Text>
        <Text key={pdf.fee}>{parseFloat(pdf.fee).toFixed(6).toLocaleString()} AR</Text>
        <Stack isInline><Text key={pdf.timestamp}>{Date.now() - parseInt(pdf.timestamp)} ago</Text>
          {pdf.status === 'pending' ? <Spinner size="md" color="red.500" /> : <FaCheckDouble color="green" size={24} />}
        </Stack>
      </SimpleGrid>
    )
  }
  const PdfTable = () => {

    let pdfs = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].pdfs
    return <Fragment><Flex direction="column">
      <SimpleGrid columns={3}>
        <Text fontWeight="bold" key="url">URL</Text>
        <Text mx={5} fontWeight="bold" key="fee">Fee</Text>
        <Text fontWeight="bold" key="timestamp">Time</Text>
      </SimpleGrid>
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
                <Text>Fee: {fee}</Text>
                <Text>Balance after transaction: {parseFloat(typeof (balance) === 'string' ? balance : '0') - parseFloat(fee)}</Text>
                <Input value={password} onChange={((evt: any) => setPassword(evt.target.value))} type="password" />
              </ModalBody>
              <ModalFooter>
                <Button onClick={function () {
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
