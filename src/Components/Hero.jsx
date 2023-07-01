import React from 'react';
import hero from '../Images/hero.png';
import amit from '../Images/amit.png';
import resume from "../Resume/Amit_Ballal_Resume.pdf"
import { DownloadIcon,Arrow  } from '@chakra-ui/icons'
import { BsGithub, BsLinkedin, BsTelephonePlus} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md'
import { Link as ReactLink } from 'react-router-dom';

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Center,
    
  } from '@chakra-ui/react';
  
  export default function Hero() {
    const handleDownload = () => {
      window.open('https://drive.google.com/file/d/1_40d0za5Uo4mw6_BxYb4NDBE49CcjF2Q/view', '_blank');
    };
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10,  md: 18 , lg: 5}}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 2  }}>
            <Heading
              lineHeight={1.1}
              fontWeight={800}
              fontSize={{ base: '5xl', sm: '5xl', lg: '6xl' }}
              textAlign={{ base: 'center' , sm: 'left', lg: 'left'  }}
              >
            
              <Text
                as={'span'}
                position={'relative'}
                color={"#2d3748"}
               >
                Hi There, I am 
              </Text>
              <br />
              <Text as={'span'} color={'purple.500'} id="user-detail-name">
              &lt; Amit Ballal /&gt;
              </Text>
            </Heading>
            <Text color={'gray.900'}  fontSize={{ base: 'md', sm: 'lg', lg: 'xl' }} my={{base:"0", sm:"2", lg:"3"}} textAlign={{ base: 'center' , sm: 'left', lg: 'left'  }} fontWeight={500}>CreativeThinker | Developer | Devops Engineer | Marketer</Text>
            {/* <Text color={'gray.900'}  fontSize={{ base: 'md', sm: 'lg', lg: 'xl' }} my={{base:"0", sm:"2", lg:"3"}} textAlign={{ base: 'center' , sm: 'left', lg: 'left'  }}>["Creative Thinker", "Developer", "Devops Engineer", "Marketer"]</Text> */}
            <Text color={'gray.700'} fontSize={{ base: 'sm', sm: 'lg', lg: 'xl' }} textAlign={{ base: 'center' , sm: 'left', lg: 'left'  }} id="user-detail-intro">
            A software engineer based in India experienced in building web applications, mobile applications and backend services.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'row', sm: 'row' }}
              justifyContent={{ base: 'center', sm: 'left' }}
              my={2}
              alignItems={'center'}
              >
              {/* <ReactLink
                to="https://drive.google.com/file/d/1_40d0za5Uo4mw6_BxYb4NDBE49CcjF2Q/view"
                target="_blank"
              >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'purple.500'}
                _hover={{ bg: 'purple.600' }}
                id="resume-button-2"
                >
                <DownloadIcon mx={1}></DownloadIcon>Resume
              </Button>                              
              </ReactLink> */}


<a 
          href={resume} 
          onClick={handleDownload} 
          rel="noreferrer" download={'Amit_Ballal_Resume'} id="resume-button-1" className="contact-button nav-link resume resume-button second-btn">
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'purple.500'}
                _hover={{ bg: 'purple.600' }}
                id="resume-button-2"
                >
                <DownloadIcon mx={1}></DownloadIcon>Resume
              </Button>  
         
          </a>

              <ReactLink
                to='https://github.com/ballalamit'
                target="_blank">
                <BsGithub fontSize="30px" id="contact-github" />
              </ReactLink>
              
              <ReactLink
              to={'https://www.linkedin.com/in/amit-ballal/'}
              target="_blank"
              >
               <BsLinkedin fontSize="30px" id="contact-linkedin" />  
              </ReactLink>
              
              <a href="tel:+919168277239">
                <BsTelephonePlus fontSize="30px" id="contact-phone" />
              </a>

              <a href="mailto:ballalamit2@gmail.com">
                <MdEmail fontSize="36px" id="contact-email" />
              </a>


           
            </Stack>

          </Stack>
          <Flex flex={1} justifyContent={'center'}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={hero}
          width="80%"
          className="home-img"
        />
      </Flex>
        </Stack>
      </Container>
    );
  }
  
