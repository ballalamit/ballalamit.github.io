import React from 'react'
import {
    Flex,
    Box,
    Text,
  } from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsTelephonePlus} from 'react-icons/bs';
import {Link as ReactLink} from 'react-router-dom'

function Footer() {
  return (
    <Box as="footer" bg="gray.200" py={4}>
    <Flex justifyContent="center" alignItems="center" direction={{base:'column'}} gap={{base:'3'}}>
      <Text fontSize="md" fontWeight={400}>Designed and Developed by Amit Ballal</Text>
      <Flex marginLeft={5} gap={4}>
      <ReactLink
                to='https://github.com/ballalamit'
                target="_blank">
                <BsGithub fontSize="18px"/>
              </ReactLink>
              
              <ReactLink
              to={'https://www.linkedin.com/in/amit-ballal/'}
              target="_blank"
              >
               <BsLinkedin fontSize="18px"/>  
              </ReactLink>
              
              <a href="tel:+919196277239">
                <BsTelephonePlus fontSize="18px" />
              </a>
      </Flex>


    </Flex>
    </Box>
  )
}

export default Footer