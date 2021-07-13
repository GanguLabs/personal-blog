import React, { Fragment } from "react";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import fs from "fs";
import { postFilePaths, POSTS_PATH } from "lib/mdxUtils";

import {
  Heading,
  Flex,
  Stack,
  UnorderedList,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";

export default function Blog({ posts }) {
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
          <UnorderedList>
            {posts.map((post) => {
              return (
                <ListItem key={post.filePath}>
                  <Link
                    as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
                    href={`/blog/[slug]`}
                  >
                    <ChakraLink>
                      {post.data.title} - {post.data.description}
                    </ChakraLink>
                  </Link>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Flex>
      </Stack>
    </Fragment>
  );
}

export async function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
