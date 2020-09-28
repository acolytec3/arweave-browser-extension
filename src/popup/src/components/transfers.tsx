import React, { Fragment, useState } from 'react';
import {
  Text, Flex, Modal, SimpleGrid, Stack, Spinner, Link, Code, Textarea,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton, Divider, PseudoBox, useClipboard
} from "@chakra-ui/core";
import { FaCheckDouble, FaClone } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { initialStateType, wallet, transfer } from '../background'
import axios, { AxiosResponse } from 'axios'
import moment from 'moment'


const Transfers = () => {
  const state = useSelector((rootState: initialStateType) => rootState)
  const [transferModal, setTransferModal] = useState({ open: false, transfer: {} as transfer })
  const [debugResponse, setRes] = useState({} as AxiosResponse)
  const [debugLoading, setLoading] = useState(false)
  const [txnHover, setTxnHover] = useState(false)
  const [fromAddrHover, setFromAddrHover] = useState(false)
  const [toAddrHover, setToAddrHover] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyValue, setCopy] = useState('')
  const { onCopy, hasCopied } = useClipboard(copyValue);

  const getDebugInfo = async (transfer: transfer) => {
    setLoading(true)
    let txn = await axios.get(`${state.settings.gateway}/tx/${transfer.txnId}`)
    setRes(txn);
    setLoading(false)
  }

  const TransferModal = () => {
    return (
      <Modal isOpen={transferModal.open} onClose={() => setTransferModal({ open: false, transfer: {} as transfer })} size="450px">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Transfer
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody >
            <Text paddingTop={3} borderTop="1px" borderColor="black" color="#888">ID</Text>
            <PseudoBox cursor="pointer" onMouseEnter={() => setTxnHover(true)} onMouseLeave={() => setTxnHover(false)}
              onClick={() => {
                setCopy(transferModal.transfer.txnId)
                onCopy!();
                setCopied(true);
                setTimeout(() => setCopied(false), 2000)
              }
              }>
              {!txnHover && <Text fontSize={14} paddingBottom="5px">{transferModal.transfer.txnId}</Text>}
              {txnHover && !copied && <Stack isInline justify="center"><FaClone color="grey" size={12} /><Text>Click to copy</Text></Stack>}
              {txnHover && copied && <Stack isInline justify="center"><FaClone color="grey" size={12} /><Text>Copied!</Text></Stack>}
            </PseudoBox>
            <Text color="#888">From</Text>
            <PseudoBox cursor="pointer" onMouseEnter={() => setFromAddrHover(true)} onMouseLeave={() => setFromAddrHover(false)}
              onClick={() => {
                setCopy(state.activeWallet)
                onCopy!();
                setCopied(true);
                setTimeout(() => setCopied(false), 2000)
              }
              }>
              {!fromAddrHover && <Text fontSize={14} paddingBottom="5px">{state.activeWallet}</Text>}
              {fromAddrHover && !copied && <Stack isInline justify="center"><FaClone color="grey" size={12} /><Text>Click to copy</Text></Stack>}
              {fromAddrHover && copied && <Stack isInline justify="center"><FaClone color="grey" size={12} /><Text>Copied!</Text></Stack>}
            </PseudoBox>
            <Text color="#888">To:</Text>
            <PseudoBox cursor="pointer" onMouseEnter={() => setToAddrHover(true)} onMouseLeave={() => setToAddrHover(false)}
              onClick={() => {
                setCopy(transferModal.transfer.to)
                onCopy!();
                setCopied(true);
                setTimeout(() => setCopied(false), 2000)
              }
              }>
              {!toAddrHover && <Text fontSize={14} paddingBottom="5px">{transferModal.transfer.to}</Text>}
              {toAddrHover && !copied && <Stack isInline justify="center"><FaClone color="grey" size={12} /><Text>Click to copy</Text></Stack>}
              {toAddrHover && copied && <Stack isInline justify="center"><FaClone color="grey" size={12} /><Text>Copied!</Text></Stack>}
            </PseudoBox>
            <Stack isInline>
              <Stack w="50%">
                <Text color="#888">Amount</Text>
                <Text fontSize={14}>{transferModal.transfer.amount} AR</Text>
              </Stack>
              <Stack>
                <Text color="#888">Fee</Text>
                <Text fontSize={14}>{transferModal.transfer.fee} AR</Text>
              </Stack>
            </Stack>
            <Stack isInline>
              <Stack w="50%">
                <Text color="#888">Time</Text>
                <Text fontSize={14}>{moment(parseInt(transferModal.transfer.timestamp)).format()}</Text>
              </Stack>
              <Stack>
                <Text color="#888">Status</Text>
                <Text fontSize={14}>{transferModal.transfer.status}</Text>
              </Stack>
            </Stack>
            <Divider />
            <Stack paddingBottom="5px">
              <Text>Raw Transaction</Text>
              <Link isExternal href={state.settings.gateway + '/tx/' + transferModal.transfer.txnId}>View raw transaction</Link>
            </Stack>
            <Stack paddingBottom="5px">
              <Text>Block Explorers</Text>
              <Link isExternal href={'https://viewblock.io/arweave/tx/' + transferModal.transfer.txnId}>View on ViewBlock</Link>
            </Stack>
            {state.settings.debug && <Divider />}
            {state.settings.debug && <Stack>
              <Stack>
                <Text>Debug Transaction</Text>
                <Code>
                  {/*@ts-ignore  --makes these readonly text areas, even if the Chakra-UI component doesn't recognize the prop*/}
                  <Textarea overflow="scroll" height="200px" readOnly={true} fontSize='xs' defaultValue={JSON.stringify(transferModal.transfer.debug, null, '\t')} />
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
        </ModalContent>
      </Modal>
    )
  }

  const TransfersTable = () => {
    let transfers = state.wallets.filter((wallet: wallet) => wallet.address === state.activeWallet)[0].transfers
    return (
      <Fragment>
        {transfers != null && <Flex direction="column">
          <SimpleGrid columns={4}>
            <Text fontWeight="bold" key="url">Sendee Address</Text>
            <Text mx={5} fontWeight="bold" key="fee">Fee</Text>
            <Text fontWeight="bold">Amount</Text>
            <Text fontWeight="bold" key="timestamp">Time</Text>
          </SimpleGrid>
          {transfers.map((transfer: any) => {
            return (
              <SimpleGrid columns={4} key={transfer.txnId + '1'} cursor="pointer"
                borderRadius="2px" borderBottom="1px" borderBottomColor="#eee" onClick={() => {
                  getDebugInfo(transfer);
                  setTransferModal({ open: true, transfer: transfer })
                }}>
                <Text key={transfer.to}>{transfer.to}</Text>
                <Text mx={5} key={transfer.fee}>{parseFloat(transfer.fee).toFixed(6).toLocaleString()} AR</Text>
                <Text key={transfer.amount}>{parseFloat(transfer.amount).toFixed(6).toLocaleString()} AR</Text>
                <Stack isInline><Text key={transfer.timestamp}>{moment(parseInt(transfer.timestamp)).startOf('minute').fromNow()}</Text>
                  {transfer.status === 'pending' ? <Spinner size="md" color="red.500" /> : <FaCheckDouble color="green" size={24} />}
                </Stack>
              </SimpleGrid>
            )
          })}
        </Flex>}
      </Fragment>)
  }

  return (
    <Flex direction="column">
      <TransfersTable />
      <TransferModal />
    </Flex>
  )
}

export default Transfers
