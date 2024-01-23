import React from 'react'
import { CompanyIcon } from '../icons/logo'
import { Flex, Text } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Flex gap='10px' justifyContent='center' alignItems='center'>
        <CompanyIcon size='28px'/>
        <Text fontFamily='heading' fontSize='24px' fontWeight='600' color='gray.900'>ClearLink<Text as='span' color='blue.400'></Text>.</Text>
    </Flex>
  )
}

export default Logo