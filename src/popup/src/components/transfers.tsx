import React, { Fragment, useState } from 'react';
import {
  Text, Flex, Button, Modal, SimpleGrid, Input,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";

import { getFee, sendTransfer } from '../providers/wallets'
import { useSelector } from 'react-redux'
import { initialStateType, wallet } from '../background'




const Transfers = () => {
  const [isOpen, setOpen] = useState(false)
  const state = useSelector((rootState: initialStateType) => rootState)
  const [balance, setBalance] = useState(state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].balance)
  const [amount, setAmount] = useState('')
  const [fee, setFee] = useState('0')
  const [to, setToAddress] = useState('')
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')


  const updateFee = () => {
    let messageSize = (message === '' ? 0 : new Blob([message]).size)
    getFee(messageSize).then((cost) => { console.log('Fee is now ' + cost); setFee(cost) })
  }

  const initiateTransfer = async () => {
    let transfterDeets = {
      'to': to,
      'fee': fee,
      'status': 'pending',
      'txnId': '',
      'timestamp': '',
      'amount': amount,
      'message': message
    }
    console.log(amount)
    sendTransfer(transfterDeets, password)
  }

  const TransfersTable = () => {
    console.log(state)
    let transfers = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].transfers
    return (
      <Fragment>
        {transfers != null && <Flex direction="column">
          <SimpleGrid columns={4}>
            <Text fontWeight="bold" key="url">Sendee Address</Text>
            <Text mx={5} fontWeight="bold" key="fee">Fee</Text>
            <Text fontWeight="bold">Amount</Text>
            <Text fontWeight="bold" key="timestamp">Timestamp</Text>
          </SimpleGrid>
          {transfers.map((transfer: any) => {
            return (
              <SimpleGrid columns={4} key={transfer.txnId + '1'} >
                <Text key={transfer.to}>{transfer.to}</Text>
                <Text mx={5} key={transfer.fee}>{transfer.fee} AR</Text>
                <Text key={transfer.amount}>{transfer.amount} AR</Text>
                <Text key={transfer.timestamp}>{transfer.timestamp}</Text>
              </SimpleGrid>
            )
          })}
        </Flex>}
      </Fragment>)
  }

  return (
    <Flex direction="column">
      <SimpleGrid columns={3} minWidth="90%" bg="blue">
        <Text alignSelf="start">Transfers</Text>
        <Text alignSelf="end">{balance} AR</Text>
        <Button alignSelf="end" onClick={() => setOpen(true)}>Send AR</Button>
      </SimpleGrid>
      <TransfersTable />
      {isOpen && <Flex width="100%" direction="column">
        <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Send AR</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>From: {state.activeWallet}</Text>
              <Input placeholder="Send to Arweave wallet address" value={to} onChange={(e: any) => setToAddress(e.target.value)} />
              <Input placeholder="Amount" value={amount} onChange={(e: any) => setAmount(e.target.value)} />
              <Input placeholder="Message (optional)" value={message} onChange={(evt: any) => setMessage(evt.target.value)} onBlur={updateFee}></Input>
              <Text>Fee: {fee}</Text>
              <Text>Balance after transaction: {parseFloat(typeof (balance) === 'string' ? balance : '0') - parseFloat(fee)}</Text>
              <Input value={password} onChange={((evt:any) => setPassword(evt.target.value))} type="password" />
            </ModalBody>
            <ModalFooter>
              <Button onClick={function () {
                initiateTransfer();
                setOpen(false)
              }}>Next</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>}
    </Flex>
  )
}

export default Transfers
