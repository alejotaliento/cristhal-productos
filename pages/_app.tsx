import "/styles/globals.css";
import { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import Main from "../ui/layout/Main";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
};

export default App;
