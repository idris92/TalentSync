import { Flex, Image } from '@chakra-ui/react'
import React from 'react'


type avatar={
    bg: string,
    imageUrl: string
}
const Avatar = ({bg, imageUrl}: avatar) => {
  return (
    <Flex boxSize='130px' borderRadius='12px' bg={bg} overflow='hidden' justifyContent='center' alignItems='center'>
            <Image src={imageUrl} alt='image21' objectFit='cover' width='130px' height='130px'/>
    </Flex>

  )
}

export default Avatar