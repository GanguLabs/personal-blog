import { POSTS_PATH, postFilePaths } from "lib/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Flex, Heading, Text, Divider } from "@chakra-ui/layout";
import { ReactNode, Fragment } from "react";
import dynamic from "next/dynamic";

// TODO: Replace next-mdx-remote with mdx-bundler

//custom components
const components = {
  DarkModeSwitch: dynamic<ReactNode>(() =>
    import("../../components/DarkModeSwitch").then((mod) => mod.DarkModeSwitch)
  ),
};

export default function Blog({ source, frontMatter }) {
  return (
    <Fragment>
      <Flex flexDirection="column">
        <Heading as="h1">{frontMatter.title}</Heading>
        <Text>{frontMatter.description}</Text>
      </Flex>
      <Divider />
      <Flex as="main" flexDirection="column">
        <MDXRemote {...source} components={components} />
      </Flex>
    </Fragment>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
