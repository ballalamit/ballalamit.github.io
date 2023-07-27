import React from 'react'
import { Box, Center, Image, VStack, Text, Container,Flex, Heading } from '@chakra-ui/react';
import amit from '../Images/amit.png';
function About() {
    return (
        <Box id="about"  bg={'#EBF8FF'} width={{ base: "100%", md: "95%", lg: "92%"  }} m={{ base: 0, md: 'auto', lg: "auto"  }} borderRadius={5}  marginTop={{ base: "0", md: "20px", lg: "100px"  }} className="about section">

        <Container maxW="container.lg">
          <Flex py={8} direction={{ base: 'column', md: 'row' }} align="center" justify="center">
            <Box maxW={{ base: '100%', md: '300px' }} mb={{ base: 8, md: 0 }} mr={{ base: 0, md: 8 }}>
              <Image src={amit} alt="About Image" borderRadius="full" boxSize="100%" objectFit="cover" width="900px" />
            </Box>
    
            <Box>
              <VStack spacing={4} align={{ base: 'center', md: 'start' }}>
                <Heading fontSize="xl" fontWeight="bold">About Me</Heading>
                <Text textAlign={{ base: 'center', md: 'start' }}>Welcome to my world of software development! I am a passionate software developer and Devops enthusiast who loves creating projects and exploring open-source software. My expertise spans across HTML5, CSS3, JavaScript, ReactJs, NodeJs, Express, and I'm well-versed in working with database technologies like MongoDB.  I completed my Bachelor in Mechanical Engineering from Pune University. I have a broad understanding of software and engineering systems. When I'm not working, you can find me binge watching movies.</Text>
    
                <Text fontWeight="bold" textAlign={{base:'center', }}>Seeking Full-time Software Engineering Opportunities</Text>
                <Text textAlign={{ base: 'center', md: 'start' }}>After completing my Bachelor degree, I am now actively looking for full-time Software Engineering opportunities. I am open to positions in PAN India. If you have a role that could benefit from my skills and knowledge, I would love to hear from you. I am eager to contribute to innovative projects and continue growing as a professional.</Text>
    
                <Text textAlign={{ base: 'center', md: 'start' }}>Thank you for visiting my portfolio and joining me on this software development journey. Let's embark on this exciting adventure together!</Text>
              </VStack>
            </Box>
          </Flex>
        </Container>
        </Box>
      );
  
}

export default About