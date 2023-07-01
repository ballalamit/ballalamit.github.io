import { Heading,Tabs,TabList, Tab, TabPanels, TabPanel, Box, Center ,Text } from '@chakra-ui/react'
import React from 'react'
import Hero from './Hero'
import Webdevlopmentprojects from './Webdevlopmentprojects'
import Devopsprojects from './Devopsprojects'
import Skills from './Skills'

function Projects() {
  return (
 
    <Box id="projects">
        <Center>
        <Heading my={10}>Projects</Heading>         
        </Center>

        <Box width={{ base: "100%", md: "95%", lg: "92%"  }} m={{ base: 0, md: 'auto', lg: "auto"  }}> 
        <Tabs variant='unstyled'>
        <TabList>
            <Tab _selected={{ color: 'white', bg: 'purple.600' }} width="50%"><Text fontSize={{ base: 'md', sm: 'xl', lg: 'xl' }} as='b'>Web Development Projects</Text></Tab>
            <Tab _selected={{ color: 'black', bg: 'yellow.400' }} width="50%"><Text fontSize={{ base: 'md', sm: 'xl', lg: 'xl' }} as='b'>Devops Projects</Text></Tab>
        </TabList>
        <TabPanels>
            <TabPanel >
            <Webdevlopmentprojects />
            </TabPanel>
            <TabPanel>
            <Devopsprojects />
            </TabPanel>
        </TabPanels>
        </Tabs>
        </Box>

        
    </Box>

  )
}

export default Projects