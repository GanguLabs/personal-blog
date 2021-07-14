import { ChakraProvider } from "@chakra-ui/react";

import theme from "../styles/theme";
import { AppProps } from "next/app";

import AppLayout from "../layouts/AppLayout";

import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AppLayout>
        <DefaultSeo />
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
