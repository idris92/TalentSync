import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { CompanyIcon } from '../icons/logo'
import { DownArrowIcon } from '../icons/downArrow'
import Logo from './Logo'
import Navigation from './Navigation'

const Nav = () => {
    const nav_list =[
        {
            name:'Products',
            more: true,
        },
        {
            name:'Solutions',
            more: true,
        },
        {
            name:'Resources',
            more: true,
        },
        {
            name:'Pricing',
            more: false,
        },
    ]
  return (
    <Flex w='100%' h='52px' p='16px 32px' justifyContent='space-between' alignItems='center' bg='gray.100' border='gray_100' borderRadius='100px'>
        <Logo/>
        <Flex gap='40px'>
            {
                nav_list.map((value, index)=>(
                    <Flex key={index}>
                        <Navigation name={value.name} more={value.more}/>
                    </Flex>
                ))
            }
        </Flex>
        <Flex gap='8px'>
            <Flex w='144px' h='52px' alignItems='center' justifyContent='center' boxShadow='0px 1px 2px 0px rgba(16, 24, 40, 0.05);'>
                <Button variant='secondary' p='14px 24px'>Talk to sales</Button>
            </Flex>
            <Flex w='144px' h='52px' alignItems='center' justifyContent='center' boxShadow='0px 1px 2px 0px rgba(16, 24, 40, 0.05);'>
                <Button variant='primary' p='14px 24px'>Sign up for free</Button>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Nav