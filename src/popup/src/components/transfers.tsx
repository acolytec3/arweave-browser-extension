import React, { Fragment, useState } from 'react';
import {
  Text, Flex, Modal, SimpleGrid, Stack, Spinner, Link, Code, Textarea,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";
import { FaCheckDouble } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { initialStateType, wallet, transfer } from '../background'
import axios, { AxiosResponse } from 'axios'



const Transfers = () => {
  const state = useSelector((rootState: initialStateType) => rootState)
  const [transferModal, setTransferModal] = useState({ open: false, transfer: {} as transfer })
  const [debugResponse, setRes] = useState({} as AxiosResponse)
  const [debugLoading, setLoading] = useState(false)
 
  const getDebugInfo = async (transfer: transfer) => {
    setLoading(true)
    let txn = await axios.get(`${state.settings.gateway}/tx/${transfer.txnId}`)
    setRes(txn);
    setLoading(false)
  }

  const TransferModal = () => {
    console.log(`Debug status is ${state.settings.debug}`)
    return (
      <Modal isOpen={transferModal.open} onClose={() => setTransferModal({ open: false, transfer: {} as transfer })}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Archived Page
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody >
            <Text paddingTop={3} borderTop="1px" borderColor="black">ID</Text>
            <Text>{transferModal.transfer.txnId}</Text>
            <Text>From:</Text>
            <Text>{state.activeWallet}</Text>
            <Text>To:</Text>
            <Text>{transferModal.transfer.to}</Text>
            <Stack isInline>
              <Stack>
                <Text>Amount</Text>
                <Text>{transferModal.transfer.amount} AR</Text>
              </Stack>
              <Stack>
                <Text>Fee</Text>
                <Text>{transferModal.transfer.fee} AR</Text>
              </Stack>
            </Stack>
            <Stack borderBottom="1px" marginBottom="20px" isInline>
              <Stack>
                <Text>Time</Text>
                <Text>{transferModal.transfer.timestamp}</Text>
              </Stack>
              <Stack>
                <Text>Status</Text>
                <Text>{transferModal.transfer.status}</Text>
              </Stack>
            </Stack>
            <Stack>
              <Text>Raw Transaction</Text>
              <Link isExternal href={state.settings.gateway + '/tx/' + transferModal.transfer.txnId}>View raw transaction</Link>
            </Stack>
            <Stack>
              <Text>Block Explorers</Text>
              <Link isExternal href={'https://viewblock.io/arweave/tx/' + transferModal.transfer.txnId}>View on ViewBlock</Link>
            </Stack>
            {state.settings.debug && <Stack>
              <Stack>
                <Text>Debug Transaction</Text>
                <Code>
                  {/*@ts-ignore  --makes these readonly text areas, even if the Chakra-UI component doesn't recognize the prop*/}
                  <Textarea readOnly={true} fontSize='xs' defaultValue={JSON.stringify(transferModal.transfer.debug, null, '\t')} />
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
              <SimpleGrid columns={4} key={transfer.txnId + '1'} cursor="pointer" onClick={() => { 
                getDebugInfo(transfer);
                setTransferModal({ open: true, transfer: transfer }) }}>
                <Text key={transfer.to}>{transfer.to}</Text>
                <Text mx={5} key={transfer.fee}>{parseFloat(transfer.fee).toFixed(6).toLocaleString()} AR</Text>
                <Text key={transfer.amount}>{parseFloat(transfer.amount).toFixed(6).toLocaleString()} AR</Text>
                <Stack isInline><Text key={transfer.timestamp}>{Date.now() - parseInt(transfer.timestamp)} seconds ago</Text>
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
