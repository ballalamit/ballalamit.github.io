import { Box, Center, Flex, Heading, Text,Avatar,Image, Grid, VStack, Highlight } from '@chakra-ui/react'
import React from 'react'
import htmlicon from '../Images/skillsimages/html5.png'
import cssicon from '../Images/skillsimages/css.png'
import jsicon from '../Images/skillsimages/js.png'
import giticon from '../Images/skillsimages/git.png'
import reduxicon from '../Images/skillsimages/redux.png'
import reacticon from '../Images/skillsimages/react.png'
import nodejsicon from '../Images/skillsimages/nodejs.png'
import mongodbicon from '../Images/skillsimages/mongodb.png'
import mernicon from '../Images/skillsimages/mern.png'

function Skills() {
  return (
    <Box width={{ base: "100%", md: "95%", lg: "92%"  }} m={{ base: 0, md: 'auto', lg: "auto"  }}>
        <Center>
            <Heading my={10}>Skills</Heading>         
        </Center>

        <Box>

    <Flex flexDirection={{ base: "column" , md:"row", lg:"row" }}   bg={'#EBF8FF'} borderRadius={20} padding={10}>
            <Box  width={{ base: '100%', md: '30%', lg: '30%' }}>
                
            <Heading lineHeight='mid' textAlign={{base: 'center' , md: 'center', lg: 'left'}}>
            <Highlight
            
                query='technologies'
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
            >
                Here are a few Technologies I've been working with recently,
            </Highlight>
            </Heading>
            <Text fontSize="lg" fontWeight={400} color="blackAlpha.800" align={{base: 'center' , md: 'left', lg: 'left'}}>
             combining them seamlessly to craft robust and dynamic web solutions that push the boundaries of innovation
            </Text>   
            
            </Box>
            <Grid width={{ base: '100%', md: '70%', lg: '70%' }}  templateColumns={{ base: 'repeat(3, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' ,lg: 'repeat(4, 1fr)' }} gap={5} marginTop={{base:'7' , md:"7"}} >
                <VStack className="skills-card" >
                <Image width="70px" src={htmlicon}  className="skills-card-img" />
                <Text  className="skills-card-name">HTML</Text>                    
                </VStack>
                <VStack className="skills-card" >
                <Image width="70px" src={cssicon} className="skills-card-img" />
                <Text className="skills-card-name">CSS</Text>                    
                </VStack >
                <VStack className="skills-card" >
                <Image width="70px" src={jsicon} className="skills-card-img" />
                <Text className="skills-card-name">Javascript</Text>                    
                </VStack>
                <VStack className="skills-card" >
                <Image width="70px" src={giticon} className="skills-card-img" />
                <Text className="skills-card-name">Git</Text>                    
                </VStack>
                <VStack className="skills-card"  >
                <Image width="70px" src={reduxicon} className="skills-card-img" />
                <Text className="skills-card-name">Redux</Text>                    
                </VStack>
                <VStack className="skills-card" >
                <Image width="70px" src={reacticon} className="skills-card-img" />
                <Text className="skills-card-name">React</Text>                    
                </VStack>
                <VStack  className="skills-card">
                <Image width="70px" src={nodejsicon} className="skills-card-img"/>
                <Text className="skills-card-name">Node</Text>                    
                </VStack>
                <VStack  className="skills-card">
                <Image width="70px" src={mongodbicon} className="skills-card-img" />
                <Text className="skills-card-name">MongoDB</Text>                    
                </VStack>
                <VStack className="skills-card" >
                <Image width="70px" src={mernicon}  style={{ mixBlendMode: 'multiply' }} className="skills-card-img"/>
                <Text className="skills-card-name">MERN</Text>                    
                </VStack>
            </Grid>
            </Flex>
       
        </Box>
    </Box>
  )
}

export default Skills