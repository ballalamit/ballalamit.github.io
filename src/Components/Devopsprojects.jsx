import React from 'react'
import cicd from '../Images/cicd.png';
import docker from '../Images/docker.jpg';
import cycleclone from '../Images/specializedcycles.png';
import {Link as ReactLink} from 'react-router-dom';
import { TfiWorld} from 'react-icons/tfi';
import { BsGithub, BsFillPlayBtnFill} from 'react-icons/bs';
import { Heading,Tabs,TabList, Tab, TabPanels, TabPanel, Box, Center ,Text, border, Flex ,Image,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Link,
    Container,
    VStack,} from '@chakra-ui/react'

function Devopsprojects() {
    return (
        <>
        <Box
            marginTop={{ base: '4', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between"
            boxShadow='base'
            >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center"
              >
              <Box
                // width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                // marginLeft={{ base: '0', sm: '5%' }}
                // marginTop="5%"
                margin="2%"
                >
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    borderRadius="lg"
                    src={cicd}
                    alt="cicd"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={useColorModeValue(
                    'radial(purple.600 1px, transparent 1px)',
                    'radial(purple.300 1px, transparent 1px)'
                  )}
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: '3', sm: '0', lg:'2' }}>
              
              <Heading marginTop="1" p={2}>
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                CI/CD pipeline with Jenkins and GitHub.
                </Link>
              </Heading>
              <Text
                as="p"
                marginTop="2"
                p={2}
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="lg">
                By seamlessly connecting Jenkins to GitHub, I enabled automatic build triggering and real-time deployments, ensuring a smooth and continuous delivery process.
              </Text>
    
              <Flex gap='5' mt={3}>
    
            {/* <TfiWorld style={{ marginLeft: "10px", fontSize: "20px" }} /> */}

            <ReactLink
                to='https://www.linkedin.com/feed/update/urn:li:activity:6965177385973366784/'
                target="_blank">
            <BsFillPlayBtnFill style={{ marginLeft: "10px", fontSize: "24px" }}/>
            </ReactLink>
            </Flex>
    
              <Flex>
              <Text marginTop="2"
                p={2}
                color={useColorModeValue('gray.600', 'gray.200')}
                fontSize="md">Github</Text>
              <Text marginTop="2"
                p={2}
                color={useColorModeValue('gray.600', 'gray.200')}
                fontSize="md">Jenkins</Text>
              <Text marginTop="2"
                p={2}
                color={useColorModeValue('gray.600', 'gray.200')}
                fontSize="md">Docker</Text>
              <Text marginTop="2"
                p={2}
                color={useColorModeValue('gray.600', 'gray.200')}
                fontSize="md">Linux</Text>
              <Text marginTop="2"
                p={2}
                color={useColorModeValue('gray.600', 'gray.200')}
                fontSize="md">Azure</Text>
              </Flex>
              
              
              
            </Box>
          </Box>
    
    
    {/* 
    
    */}
    
    <Box
            marginTop={{ base: '4', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between"
            boxShadow='base'
           
            
            >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center">
              <Box
                // width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                // marginLeft={{ base: '0', sm: '5%' }}
                // marginTop="5%"
                margin="2%"
                >
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    borderRadius="lg"
                    src={docker}
                    alt="docker"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={useColorModeValue(
                    'radial(purple.600 1px, transparent 1px)',
                    'radial(purple.300 1px, transparent 1px)'
                  )}
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: '3', sm: '0' }}>
              
              <Heading marginTop="1" p={2}>
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Host Static Website on Docker
                </Link>
              </Heading>
              <Text
                as="p"
                marginTop="2"
                p={2}
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="lg">
                I have successfully utilized Virtual Machines (VMs) to host static websites within Docker containers. By combining the power of VMs and Docker's containerization, I achieved reliable and scalable hosting solutions. This approach ensured efficient resource allocation, simplified deployment processes, and enhanced performance and security for the hosted websites.
              </Text>
              <Flex gap='5' mt={3}>
    
              <ReactLink
                to='https://www.linkedin.com/feed/update/urn:li:activity:6947553484162363392/'
                target="_blank">
              <BsFillPlayBtnFill style={{ marginLeft: "10px", fontSize: "24px" }}/>
              </ReactLink>
              </Flex>
    
              <Flex>
              <Text marginTop="2"
                p={2}
                color={useColorModeValue('gray.600', 'gray.200')}
                fontSize="md">Docker</Text>
              <Text marginTop="2"
                p={2}
                color={useColorModeValue('gray.600', 'gray.200')}
                fontSize="md">Azure</Text>
              <Text marginTop="2"
                p={2}
                color={useColorModeValue('gray.600', 'gray.200')}
                fontSize="md">Linux</Text>
              <Text marginTop="2"
                p={2}
                color={useColorModeValue('gray.600', 'gray.200')}
                fontSize="md">Apache</Text>
              </Flex>
              
            </Box>
          </Box>
  
    
    
    
        </>
      )
}

export default Devopsprojects