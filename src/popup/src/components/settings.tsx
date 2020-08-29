import React, { useState } from 'react';
import { Flex,  Text, Input, Switch, FormErrorMessage, FormHelperText, Button, Divider, Link, 
  FormControl, FormLabel, DrawerContent, DrawerBody, DrawerHeader, DrawerFooter, Stack, useToast } from "@chakra-ui/core";
import { useSelector, useDispatch } from 'react-redux'
import { initialStateType } from '../background'
import { FaCog, FaExclamationTriangle } from 'react-icons/fa'

const Settings = () => {

  const state = useSelector((rootState: initialStateType) => rootState)
  const dispatch = useDispatch()
  const toast = useToast();
  const [debug, setDebug] = useState(state.settings?.debug)
  const [silo, setSilo] = useState(state.settings?.silo)
  const [loki, setLoki] = useState(state.settings?.loki)
  const [gateway, setGateway] = useState(state.settings?.gateway || 'https://arweave.net:443')
  const [lokiGateway, setLokiGateway] = useState(state.settings?.lokiGateway || 'http://swyteha53g6q8yyqatsaz3rfyu3kgxetak4yjc7ggf3zz5qqxcgo.lokiswyteha53g6q8yyqatsaz3rfyu3kgxetak4yjc7ggf3zz5qqxcgo')
  const [validGateway, setValidGateway] = useState(true)

  const updateSettings = () => {
    let payload = {
      debug: debug,
      silo: silo,
      loki: loki,
      gateway: gateway,
      lokiGateway: lokiGateway
    };
    dispatch({ type: 'UPDATE_SETTINGS', payload: payload})
    .then(() => toast({
      title: 'Settings updated',
      status:'success',
      duration:3000,
      position:'bottom-left'
    }))
  }

  const validateAddress = (address: string) => {
    let parts = address.split(':')
    console.log(parts)
    if (parts.length !== 3) {
      setValidGateway(false);
      return
    }
    if (parts[0] !== 'http' && parts[0] !== 'https')
    { console.log('protocol not valid');setValidGateway(false);return }  
      
    if (parseInt(parts[2]) <= 0 && parseInt(parts[2]) >= 65555) 
    { setValidGateway(false); console.log('port not valid'); return}
    console.log('looks good!')
    setValidGateway(true)

  }

  return (
    <DrawerContent>
      <DrawerHeader borderBottomWidth="1px" bg="#434750" color="#fff">
        <Stack isInline align="center" justify="space-between">
          <Text>Settings</Text>
          <FaCog /></Stack></DrawerHeader>
      <DrawerBody bg="#282d33">
        <Flex direction="column" >
          <Stack isInline alignContent="center" justifyContent="space-between">
            <FormLabel htmlFor='debug-toggle' color="white">Debug</FormLabel>
            <Switch id="debug-toggle" size="md" color="green" value={debug} isChecked={debug} onChange={() => {setDebug(!debug)}}/>
          </Stack>
          <Text fontSize="small" color="#999">Show debug information on transaction receipts.</Text>
          <Divider bg="white" />
          <FormControl isInvalid={!validGateway}>
          <FormLabel htmlFor='host' color="white">Host</FormLabel>
          <Input isInvalid={validGateway} errorBorderColor="blue.300" onBlur={() => validateAddress(gateway)} value={gateway} onChange={(evt:any) => setGateway(evt.target.value)}></Input>
          <FormErrorMessage>Gateway address is invalid</FormErrorMessage>
          <FormHelperText>
            Use an alternative host when connecting to Arweave. E.g. https://arweave.net:443 or http://159.65.213.43:1984
          </FormHelperText>
          </FormControl>

          <Divider bg="white" />
          <Stack isInline align="center" bg="#ea9c00"><FaExclamationTriangle size="12" color="white" /><Text color="white">EXPERIMENTAL FEATURE</Text></Stack>
          <Stack isInline alignContent="center" justifyContent="space-between">
            <FormLabel htmlFor='silo-toggle' color="white">Silo</FormLabel>
            <Switch id="silo-toggle" size="md" color="green" value={silo} isChecked={silo} onChange={() => setSilo(!silo)}/>
          </Stack>
          <Text fontSize="small" color="#999">Enable clearnet Silo protocol using web+silo:// links.</Text>
          <Stack isInline alignContent="center" justifyContent="space-between">
            <FormLabel htmlFor='loki-toggle' color="white">Silo+Loki</FormLabel>
            <Switch id="loki-toggle" size="md" color="green" value={loki} isChecked={loki} onChange={() => setLoki(!loki)}/>
          </Stack>
          <Text fontSize="small" color="#999">Use Loki when accessing Silo data.</Text>
          <Input isDisabled={!loki || !silo} value={lokiGateway} onChange={(evt:any) => setLokiGateway(evt.target.value)}></Input>
          <Text fontSize="small" color="#999">Set the Silo + Loki gateway host to use.</Text>
          <Divider />
          <Text fontSize="small" color="#999">We do not collect any user data in this web extension, this is outlined in our </Text><Link href="https://docs.arweave.org/info/wallets/privacy-policy">privacy policy</Link>
        </Flex></DrawerBody>
        <DrawerFooter bg="#282d33" alignItems="center">
          <Button isDisabled={!validGateway} onClick={updateSettings} >Save Changes</Button>
        </DrawerFooter>
    </DrawerContent>
  )
}

export default Settings
