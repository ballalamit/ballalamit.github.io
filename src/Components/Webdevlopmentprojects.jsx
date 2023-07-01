import React from 'react'
import tata1mg from '../Images/tata1mg.png';
import bewakoof from '../Images/bewakoof.png';
import cycleclone from '../Images/specializedcycles.png';
import { Link as ReactLink } from 'react-router-dom';
import { TfiWorld} from 'react-icons/tfi';
import { BsGithub} from 'react-icons/bs';
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

function Webdevlopmentprojects() {

    let data ={
        projects :[
            {
                id:1,
                title:"TATA 1mg Clone",
                desceiption:"Tata 1mg is your trusted online healthcare partner. With a wide range of genuine medicines, reliable diagnostic tests, and convenient home delivery, we ensure your health is our top priority.",
            }
        ]
    }

  return (
    <>
    <Box
        marginTop={{ base: '4', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        boxShadow='base'
        className="project-card"
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
                src={tata1mg}
                alt="tata1mg"
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
          
          <Heading marginTop="1" p={2} className="project-title">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              TATA 1mg Clone
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            p={2}
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            className="project-description"
            >
            Tata 1mg is your trusted online healthcare partner. With a wide range of genuine medicines, reliable diagnostic tests, and convenient home delivery, we ensure your health is our top priority.
          </Text>

          <Flex gap='5' mt={3}>
        <ReactLink
          to={'https://friendly-marshmallow-64edc5.netlify.app'}
          target="_blank"
        >
          <TfiWorld style={{ marginLeft: "10px", fontSize: "20px" }} className="project-deployed-link"  />
        </ReactLink>
        
        <ReactLink
          to={'https://github.com/ballalamit/1mg-clone'}
          target="_blank"
        >
          <BsGithub fontSize="20px" className="project-github-link" />
        </ReactLink>
       
        </Flex>

          <Flex>
          <Text marginTop="2"
            p={2}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize="md">HTML</Text>
          <Text marginTop="2"
            p={2}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize="md">CSS</Text>
          <Text marginTop="2"
            p={2}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize="md">Vanilla JS</Text>
          <Text marginTop="2"
            p={2}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize="md">Bootstrap</Text>
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
        className="project-card"
        
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
                src={bewakoof}
                alt="tata1mg"
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
          
          <Heading marginTop="1" p={2} className="project-title">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Bewakoof.com Clone
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            p={2}
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            className="project-description">
            Beewakoof.com is your go-to destination for trendy and stylish clothing designed exclusively for youngsters. Express your style effortlessly with their curated collection of cool graphic tees, comfortable joggers, chic dresses, and funky accessories.
          </Text>
          <Flex gap='5' mt={3}>

          <ReactLink
          to={'https://keen-beijinho-ffb7b1.netlify.app/'}
          target="_blank"
        >
          <TfiWorld style={{ marginLeft: "10px", fontSize: "20px" }} className="project-deployed-link" />
        </ReactLink>
        
        <ReactLink
          to={'https://github.com/ballalamit/Bewakoof_Clone'}
          target="_blank"
        >
          <BsGithub fontSize="20px"  className="project-github-link"/>
        </ReactLink>

          </Flex>

          <Flex>
          <Text marginTop="2"
            p={2}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize="md">HTML</Text>
          <Text marginTop="2"
            p={2}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize="md">CSS</Text>
          <Text marginTop="2"
            p={2}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize="md">Vanilla JS</Text>
          <Text marginTop="2"
            p={2}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize="md">Bootstrap</Text>
          </Flex>
          
        </Box>
      </Box>
{/* Cycle website */}

      <Box
        marginTop={{ base: '4', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        boxShadow='base'
        className="project-card"
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
                src={cycleclone}
                alt="tata1mg"
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
          
          <Heading marginTop="1" p={2} className="project-title">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Specialized Cylces Clone
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            p={2}
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            className="project-description">
            Specialized Cycles is a leading inline cycle ecommerce platform, offering a seamless shopping experience for cycling enthusiasts. With an extensive selection of high-quality bicycles, accessories, and gear, we cater to riders of all levels and disciplines. 
          </Text>

          <Flex gap='5' mt={3}>

          <ReactLink
          to={'https://specialized-cycles.netlify.app'}
          target="_blank"
        >
          <TfiWorld style={{ marginLeft: "10px", fontSize: "20px" }} className="project-deployed-link"  />
        </ReactLink>
        
        <ReactLink
          to={'https://github.com/ballalamit/Specialized-cycle-clone'}
          target="_blank"
        >
          <BsGithub fontSize="20px" className="project-github-link" />
        </ReactLink>

        </Flex>

          <Flex>
          <Text marginTop="2"
            p={2}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize="md">HTML</Text>
          <Text marginTop="2"
            p={2}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize="md">CSS</Text>
          <Text marginTop="2"
            p={2}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize="md">Vanilla JS</Text>
          <Text marginTop="2"
            p={2}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize="md">Bootstrap</Text>
          </Flex>
          
          
        </Box>
      </Box>



    </>
  )
}

export default Webdevlopmentprojects