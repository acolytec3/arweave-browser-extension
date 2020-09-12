import React, { Fragment, useState, useEffect } from 'react';
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom';
import {
  Text, Flex, Button, Modal, SimpleGrid, Input, Spinner, Stack, Code, Textarea, useToast, Switch as ChakraSwitch, FormLabel,
  ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Link } from "@chakra-ui/core";
import axios, { AxiosResponse } from 'axios'
import inline from '../providers/inline'
import { getFee, archivePage } from '../providers/wallets'
import { useSelector } from 'react-redux'
import { initialStateType } from '../background'

interface inline {
  title: string,
  size: number,
  html: any
}

var pageSource: inline = { title: '', size: 0, html: undefined }
var fee: string = '0'

const PagePreview = () => {
    const state = useSelector((rootState: initialStateType) => rootState)
    const [source, setSource] = useState({} as inline)
    const [incognito, setIncognito] = useState(false)

    let options = {}
    if (incognito) {
        options = {
        withCredentials: false,
        headers: {
            'Cache-Control': 'no-cache',
            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0'
        }
    }}

    useEffect(() => {
        if (!incognito) {
            inline.html(state.pageSource.html, state.pageSource.url).then((res) => {
                setSource(res)
                console.log(source)})
        }
        else {
            axios.get(state.pageSource.url, options)
            .then((res) => inline.html(res.data, state.pageSource.url))
            .then((res) => { 
                setSource(res);
                console.log(source)
            })
        } 
    },[incognito])

    useEffect(() => {
        if (source.size) getFee(source.size).then((res) => fee = res)
    },[state])

    return (<Flex direction="column" width="100%" height="100%">
        <Flex direction="row" justifyContent="space-between"><Text>Preview of {source.title}</Text>
        <Stack isInline alignContent="center" alignSelf="end" justifyContent="space-between">
        <FormLabel htmlFor='incognito' color="black">Incognito mode</FormLabel>
        <ChakraSwitch id="incognito" size="md" color="green" value={incognito} isChecked={incognito} 
        onChange={() => { 
            setIncognito(!incognito) 
            }} />
        </Stack></Flex>
        {/* @ts-ignore */}
        <iframe sandbox="" height="90%" srcDoc={source ? source.html : undefined} ></iframe></Flex>)
    }

export default PagePreview