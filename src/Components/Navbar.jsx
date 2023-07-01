import React from 'react';
import { Box, Flex, IconButton, Text, Collapse, useBreakpointValue , Button , chakra} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {Link as ReactLink} from 'react-router-dom';

const ChakraLink = chakra(ReactLink); 

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(true);
  const isMobile = useBreakpointValue({ base: true, md: false}) ?? true;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    setIsOpen(isMobile);
  }, [isMobile]);

  return (
    <Flex
      py={4}
      px={8}
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex="sticky"
      bg="white"
      justifyContent="space-between"
      alignItems="center"
      id="nav-menu"
    >
      <ChakraLink
      to={'/'}
      >
      <Text fontSize="xl" fontWeight="bold" color={'purple.500'}>
      &lt; Amit Ballal /&gt;
      </Text>
      </ChakraLink>

      <Flex alignItems="center">
        <IconButton
          aria-label="Menu"
          icon={!isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          ml={4}
          onClick={toggleMenu}
        />

        <Collapse in={!isOpen || !isMobile} animateOpacity>
          <Flex
            direction={isMobile ? 'column' : 'row'}
            alignItems={isMobile ? 'flex-start' : 'center'}
            mt={{ base: isMobile ? 0 : 0, md: 0 }}
            ml={{ base: 0, md: 4 }}
            bg="white"
            // boxShadow="md"
            rounded="md"
            pl={{base:'50'}}
            paddingBottom={{base:'7' , md: 0 , lg: 0}}
            position={isMobile ? 'absolute' : 'static'}
            top={isMobile ? '100%' : 'auto'}
            left={isMobile ? 0 : 'auto'}
            right={isMobile ? 0 : 'auto'}
            zIndex={10}
          >
            <ChakraLink
              to={'/'}
              color="purple.500"
              textDecoration="none"
              _hover={{ textDecoration: 'none', color: 'blue.500' }}
              mb={isMobile ? 2 : 0}
              mr={isMobile ? 0 : 4}
              fontSize="16px"
              fontWeight={600}
              className="nav-link home"
            >
              Home
            </ChakraLink>

            <ChakraLink
              to={'/about'}
              color="purple.500"
              textDecoration="none"
              _hover={{ textDecoration: 'none', color: 'blue.500' }}
              mb={isMobile ? 2 : 0}
              mr={isMobile ? 0 : 4}
              fontSize="16px"
              fontWeight={600}
              className="nav-link about"
            >
              About
            </ChakraLink>

            <ChakraLink
              to={'/skills'}
              color="purple.500"
              textDecoration="none"
              _hover={{ textDecoration: 'none', color: 'blue.500' }}
              mb={isMobile ? 2 : 0}
              mr={isMobile ? 0 : 4}
              fontSize="16px"
              fontWeight={600}
              className="nav-link skills"
            >
              Skills
            </ChakraLink>
            <ChakraLink
              to={'/projects'}
              color="purple.500"
              textDecoration="none"
              _hover={{ textDecoration: 'none', color: 'blue.500' }}
              mb={isMobile ? 2 : 0}
              mr={isMobile ? 0 : 4}
              fontSize="16px"
              fontWeight={600}
              className="nav-link projects"
            >
              Projects
            </ChakraLink>
            <ChakraLink
              to={'/contact'}
              color="purple.500"
              textDecoration="none"
              _hover={{ textDecoration: 'none', color: 'blue.500' }}
              mb={isMobile ? 2 : 0}
              mr={isMobile ? 0 : 4}
              fontSize="16px"
              fontWeight={600}
              className="nav-link contact"
            >
              Contact
            </ChakraLink>

            <ChakraLink 
            to="https://drive.google.com/file/d/1_40d0za5Uo4mw6_BxYb4NDBE49CcjF2Q/view?usp=sharing"
            target="_blank"
            >
            <Button
            as="a"
            color="white"
            bg="purple.500"
            px={4}
            py={2}
            borderRadius="md"
            textDecoration="none"
            _hover={{ textDecoration: 'none', bg: 'purple.600' }}
            className="nav-link resume"
            id="resume-button-1"
          >
            Resume
          </Button>
          </ChakraLink>

          </Flex>
        </Collapse>
      </Flex>
    </Flex>
  );
}

export default Navbar;
