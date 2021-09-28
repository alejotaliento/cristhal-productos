import React from "react";
import {
  ChakraProvider,
  Container,
  VStack,
  Image,
  Heading,
  Text,
  Box,
  Divider,
} from "@chakra-ui/react";
import { AppProps } from "next/app";

import { INFORMATION } from "../app/constants";
import theme from "../theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box papdding={4}>
        <Container
          backgroundColor="white"
          borderRadius="sm"
          boxShadow="md"
          maxWidth="container.xl"
          padding={4}
        >
          <VStack marginBottom={6}>
            <Image alt="Home" borderRadius={9999} src={INFORMATION.avatar} />
            <Heading>{INFORMATION.title}</Heading>
            <Text>{INFORMATION.description}</Text>
          </VStack>
          <Divider margin={6} />
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
