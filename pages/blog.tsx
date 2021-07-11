import { useState, Fragment } from "react";
import Head from "next/head";

import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export default function Blog() {
  return (
    <Fragment>
      <Head>
        <title>Blog - chrislicodes.</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          px={4}
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Blog
          </Heading>
        </Flex>
      </Stack>
    </Fragment>
  );
}

// export async function getStaticProps() {
//   //todo fetch blog posts
//   const posts = [];

//   return {
//     props: {
//       posts,
//     },
//   };
// }
