import React, { useState} from 'react';
import { Flex, Box, Button, Text, Input, PseudoBox , DrawerContent, DrawerBody, DrawerHeader, DrawerFooter, Stack } from "@chakra-ui/core";
import { useSelector, useDispatch } from 'react-redux'
import { initialStateType } from '../background'
import { FaCog } from 'react-icons/fa'

const Settings = () => {

  const state = useSelector((rootState: initialStateType) => rootState)
  const dispatch = useDispatch()

  return (
    <DrawerContent>
      <DrawerHeader borderBottomWidth="1px" bg="#434750" color="#fff">
        <Stack isInline align="center" justify="space-between">
          <Text>Settings</Text>
          <FaCog /></Stack></DrawerHeader>
      <DrawerBody>
        <Flex direction="column">
        
            <Box w="200px">
                Settings
            </Box>
        </Flex></DrawerBody>
    </DrawerContent>
  )
}

export default Settings
