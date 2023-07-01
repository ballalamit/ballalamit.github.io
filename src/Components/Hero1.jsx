import React from 'react'
import hero from '../Images/hero.png';
import { Box,Heading,Highlight,Center,Text, Input, Button, Image,Flex} from '@chakra-ui/react';

function Hero() {
    return (
        <>
          <Flex direction={['column', 'column', 'row']} align={['center', 'center', 'flex-start']}>
            <Box m="auto" width={['100%', '100%', '50%']} p={[4, 4, 8]}>
              <Heading as='h1' size='3xl' my="20px" fontSize={['30px', '40px', '50px']}>
                Hi There, I am <span style={{ color: '#3B82F6' }}>&lt; Amit Ballal /&gt;</span>
              </Heading>
    
              <Heading as='h3' size='md' fontWeight='500' my="5px">
                [... "Creative Thinker", "Developer", "Devops Engineer", "Marketer"]
              </Heading>
    
              <Text my="25px" maxW={['100%', '100%', '600px']}>
                A software engineer based in New York experienced in building web applications, mobile applications, and backend services.
              </Text>
    
              <Input w={['100%', '100%', '250px']} placeholder='Start typing...' />
    
              <Button mx={5} mt={2}>
                Send
              </Button>
            </Box>
    
            <Box width={['100%', '100%', '50%']}>
              <Center>
                <Image borderRadius="60%" width={['100%', '100%', 600]} src={hero} />
              </Center>
            </Box>
          </Flex>
        </>
      );
}

export default Hero