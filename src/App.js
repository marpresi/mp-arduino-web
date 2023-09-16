import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading>DISTANCIA</Heading>
            <Text fontSize='10rem' color='tomato'>
              200
            </Text>
            <Logo h="40vmin" pointerEvents="none" />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
