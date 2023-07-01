import React from 'react';
import {
  Heading,
  Box,
  Center,
  Image,
  VStack,
  HStack,
  Container,
} from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';

function GithubCalendar() {
  return (
    <Center py={8} >
      <VStack spacing={8} alignItems="center">
        <Heading as="h6" size="sm" className="subtitle"></Heading>
        <Heading className="section-title mb-4">
          My Contributions and Stats
        </Heading>

        <Box className="react-activity-calendar calendar" mt={{base:"2" , md:"5", lg:"5"}} width={{base:"97%"}}>
          <GitHubCalendar username="ballalamit" />
        </Box>

        <VStack spacing={4} w="100%" align="center">
          <HStack spacing={4} wrap="wrap" justifyContent="center">
            <Image
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com/?user=ballalamit"
              alt="streaks"
              maxW="460px"
              width="100%"
              height="auto"
              borderRadius={5}
              
            />
            <Image
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=ballalamit&show_icons=true"
              alt="stats"
              maxW="440px"
              width="100%"
              height="auto"
            />
          </HStack>
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ballalamit&hide_progress=true"
            alt="language"
            maxW="430px"
            width="100%"
            height="auto"
          />
        </VStack>
      </VStack>
    </Center>
  );
}

export default GithubCalendar;
