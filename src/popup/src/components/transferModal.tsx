import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom'
import {
    Text, Button, Input, Stack,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useToast, InputRightElement, InputGroup, FormControl, FormErrorMessage, FormHelperText, FormLabel, Modal
} from "@chakra-ui/core";
import { getFee, sendTransfer } from '../providers/wallets'
import { useSelector } from 'react-redux'
import { initialStateType, wallet } from '../background'

const TransferModal = (open: any) => {
    const [isOpen, setOpen] = useState(open.open)
    const state = useSelector((rootState: initialStateType) => rootState)
    const [balance, setBalance] = useState(state ? state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].balance : '')
    const [amount, setAmount] = useState('')
    const [fee, setFee] = useState('0')
    const [to, setToAddress] = useState('')
    const [message, setMessage] = useState('')
    const [password, setPassword] = useState('')
    const [next, setNext] = useState(false)
    const [validAmount, setValid] = useState(true)
    const history = useHistory();
    const toast = useToast()

    useEffect(() => {
        updateFee()
    }, [message])

    useEffect(() => {
        setOpen(open.open)    
    },[open])

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
        chrome.runtime.sendMessage({ action: 'send.transfer', payload: { transfer: transfterDeets, password: password } })
        setOpen(false)
    }

    const validateAmount = () => {
        amount === '' ? 
            setValid(true) : 
            setValid(parseFloat((parseFloat(balance) - parseFloat(fee) - parseFloat(amount)).toFixed(12)) >= 0)
    }

    const setMax = async () => {
        let balance = parseFloat(state.wallets.filter(wallet => wallet.address === state.activeWallet)[0].balance)
        let amount = balance - parseFloat(fee)       
        setAmount(amount.toString())
    }

    return (<Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Send AR</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Stack spacing={2}>
                    <Stack>
                        <Text>From:</Text>
                        <Text fontSize={14}>{state.activeWallet}</Text>
                    </Stack>
                    {!next && <Fragment>
                        <Stack spacing={2}>
                            <FormControl isInvalid={to === state.activeWallet}>
                                <FormLabel htmlFor='to' fontSize={12} color="grey">Send to Arweave wallet address</FormLabel>
                                <Input placeholder="Send to Arweave wallet address"
                                    value={to}
                                    onChange={(e: any) => setToAddress(e.target.value)}
                                    onBlur={updateFee}
                                    isInvalid={to === state.activeWallet} />
                                <FormErrorMessage>Recipient address cannot be the same as the sending address</FormErrorMessage>
                            </FormControl>
                            <Stack isInline>
                                <FormControl isInvalid={!validAmount}>
                                    <InputGroup>
                                        <Input
                                            placeholder="Amount"
                                            value={amount}
                                            onChange={(e: any) => setAmount(e.target.value)}
                                            onBlur={() => validateAmount()}
                                            isInvalid={!validAmount}
                                        />
                                        <InputRightElement children='AR' />
                                    </InputGroup>
                                    <FormErrorMessage>Amount cannot be greater than wallet balance</FormErrorMessage>
                                </FormControl>
                                <Button border="none" onClick={setMax}>Entire Wallet</Button>
                            </Stack>
                            <Input placeholder="Message (optional)" value={message} onChange={(evt: any) => setMessage(evt.target.value)} onBlur={updateFee} />
                            <Text>Fee</Text>
                            <Text fontSize={14}>{fee} AR</Text>
                            <Text>Total (including fee)</Text>
                            <Text fontSize={14}>{(parseFloat(fee) + parseFloat(amount ? amount : '0')).toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: (fee != '0') ? fee.split('.')[1].length : 1 })} AR</Text>
                        </Stack>
                    </Fragment>}
                    {next && <Fragment>
                        <Stack spacing={2}>
                            <Stack>
                                <Text>To:</Text>
                                <Text fontSize={14}>{to}</Text>
                            </Stack>
                            <Stack isInline>
                                <Stack>
                                    <Text>Sending</Text>
                                    <Text>{amount} AR</Text>
                                </Stack>
                                <Stack>
                                    <Text>Fee</Text>
                                    <Text>{fee} AR</Text>
                                </Stack>
                            </Stack>
                            <Stack>
                                <Text>Total</Text>
                                <Text>{(parseFloat(fee) + parseFloat(amount ? amount : '0')).toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: (fee != '0') ? fee.split('.')[1].length : 1 })} AR</Text>
                            </Stack>
                            <Stack>
                                <Text>Balance after transaction</Text>
                                <Text>{(parseFloat(balance) - parseFloat(fee) - parseFloat(amount)).toString()} AR</Text>
                            </Stack>
                            <Text>Enter password to confirm transaction</Text>
                            <Input value={password} onChange={((evt: any) => setPassword(evt.target.value))} type="password" />
                        </Stack>
                    </Fragment>}
                </Stack>
            </ModalBody>
            <ModalFooter>
                {!next ? <Button isDisabled={!validAmount || (to === '')} onClick={() => setNext(true)}>Next</Button> :
                    <Button onClick={function () {
                        initiateTransfer();
                        history.push('/transfers')
                        setOpen(false)
                    }}>Confirm and Send AR</Button>}
            </ModalFooter>
        </ModalContent>
    </Modal>
    )
}

export default TransferModal
