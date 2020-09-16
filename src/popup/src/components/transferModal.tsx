import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom'
import {
    Text, Button, Input,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useToast
} from "@chakra-ui/core";
import { getFee, sendTransfer } from '../providers/wallets'
import { useSelector } from 'react-redux'
import { initialStateType, wallet } from '../background'

const TransferModal = () => {
    const [isOpen, setOpen] = useState(true)
    const state = useSelector((rootState: initialStateType) => rootState)
    const [balance, setBalance] = useState(state ? state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].balance : '')
    const [amount, setAmount] = useState('')
    const [fee, setFee] = useState('0')
    const [to, setToAddress] = useState('')
    const [message, setMessage] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    const toast = useToast()
    
    const updateFee = () => {
        let messageSize = (message === '' ? 0 : new Blob([message]).size)
        getFee(messageSize).then(cost => setFee(cost))
        .catch(() => toast({
            title: 'Error',
            status: 'error',
            duration: 3000,
            position: 'bottom-left',
            description: 'Error getting fee, check your network connection and try again'
          }))
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
        sendTransfer(transfterDeets, password)
    }
    return (<Fragment>
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
                <Text>Enter password to confirm transaction</Text>
                <Input value={password} onChange={((evt: any) => setPassword(evt.target.value))} type="password" />
            </ModalBody>
            <ModalFooter>
                <Button onClick={function () {
                    initiateTransfer();
                    setOpen(false)
                    history.push('/transfers')
                }}>Confirm and Send AR</Button>
            </ModalFooter>
        </ModalContent>
    </Fragment>
    )
}

export default TransferModal
