import React, { Fragment, useState, useEffect } from 'react';
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom';
import {
  Text, Flex, Button, Modal, SimpleGrid,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";
import axios from 'axios'

import { getFee, archivePdf } from '../providers/wallets'
import { useSelector } from 'react-redux'
import { initialStateType, wallet, page } from '../background'



const Pdfs = () => {
  const [isOpen, setOpen] = useState(false)
  const state = useSelector((rootState: initialStateType) => rootState)
  const [balance, setBalance] = useState(state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].balance)
  const history = useHistory();
  const [source, setSource] = useState(null as any)
  const [fee,setFee] = useState('0')
  const [size, setSize] = useState('0')
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
          setOpen(true)})
        reader.readAsArrayBuffer(response.data)
      })
  
  },[])

  const pdfSaver = () => {
    let pdfDeets = {
      'url': window.location.hash.substr(16,).split('#')[0],
      'fee': fee,
      'status': 'pending',
      'txnId': '',
      'timestamp': '',
      'source': source
    }
    console.log(source)
    archivePdf(pdfDeets)
  }

  const PdfTable = () => {
    console.log(state)
    let pdfs = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].pdfs
    console.log(pdfs)
    return <Fragment><Flex direction="column">
      <SimpleGrid columns={3}>
        <Text fontWeight="bold" key="url">URL</Text>
        <Text mx={5} fontWeight="bold" key="fee">Fee</Text>
        <Text fontWeight="bold" key="timestamp">Timestamp</Text>
      </SimpleGrid>
      {pdfs ? pdfs.map((pdf: page) => {
        return (
          <SimpleGrid columns={3} key={pdf.txnId + '1'} >
            <Text key={pdf.url}>{pdf.url}</Text>
            <Text mx={5} key={pdf.fee}>{pdf.fee}</Text>
            <Text key={pdf.timestamp}>{pdf.timestamp}</Text>
          </SimpleGrid>
        )
      }) :
        <span>You shouldn't be seeing this</span>}
    </Flex></Fragment>
  }

  return (<HashRouter basename="/mainpage">
    <Switch>
      <Route path="/pdfs" exact={true}>
        <PdfTable />
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
                <Text>Page Size: {parseInt(size)/1000} kb</Text>
                <Text>Fee: {fee}</Text>
                <Text>Balance after transaction: {parseFloat(typeof (balance) === 'string' ? balance : '0') - parseFloat(fee)}</Text>
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
