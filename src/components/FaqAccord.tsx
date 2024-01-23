import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex } from '@chakra-ui/react'
import React from 'react'


type faq={
    title: string;
    content: string
}

const FaqAccord = ({title, content}:faq) => {
  return (
    <Accordion w='100%' bg='white.100'  allowToggle>
        <AccordionItem >
        {({ isExpanded }) => (
            <>
            <h2>
            <AccordionButton _hover={{bg:'white.100'}} p='32px'>
                    <Box as="span" flex='1' textAlign='left'>
                    {
                        title
                    }
                    </Box>
                    {isExpanded ? (
                        <Flex boxSize='24px' bg='transparent' border='1px solid #175CD3' rounded='100%' justifyContent='center' alignItems='center' color='blue.700'>
                                -
                        </Flex>
                
                    ) : (
                        <Flex boxSize='24px' bg='transparent' border='1px solid #175CD3' rounded='100%' justifyContent='center' alignItems='center' color='blue.700'>
                                +
                        </Flex>
                    )}
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            {
                content
            }
            </AccordionPanel>
            </>
        )}
        </AccordionItem>
    </Accordion>
  )
}

export default FaqAccord