import { Flex, Menu, MenuButton, MenuItem, MenuList, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { DownArrowIcon } from '../icons/downArrow'

type nav={
    name: string,
    more: boolean,
}

const Navigation = ({name, more=true}:nav) => {
  return (
      <Menu>
      <MenuButton 
      as={Button}  
      p='0'
      _hover={{ bg: 'transparent' }}
      _expanded={{ bg: 'transparent' }}
      _focus={{ boxShadow: 'none' }}
      >
        {/* <Text fontSize='18px' fontWeight='600' color='gray.500'>{name}</Text> */}
        <Flex gap='6px' alignItems='center'>
            <Text fontSize='18px' fontWeight='600' color='gray.500'>{name}</Text>
            {
                more && (<DownArrowIcon color='gray.500'/>)
            }
            
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
    
  )
}

export default Navigation