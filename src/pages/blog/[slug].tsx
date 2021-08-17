import React from "react";
import { MDX } from "mdxTools/mdxClient";
import { getAllPosts, prepareMDX } from "../../mdxTools/mdxServer";
import { PostLayout } from "components/layouts/PostLayout";
import { Heading, Text, Box } from "@chakra-ui/layout";
import Date from "components/shared/Date";

interface IPost {
  frontmatter: {
    [key: string]: string;
  };
  code: string;
}

const Post: React.FC<IPost> = ({ code, frontmatter }) => {
  const lastEdited = frontmatter.publishedAt !== frontmatter.lastEditedAt && (
    <>
      • Last Edited: <Date date={frontmatter.lastEditedAt} />
    </>
  );

  return (
    <PostLayout>
      <Box marginTop="20">
        <Text color="gray.500" fontSize="sm" marginBottom={1}>
          Published: <Date date={frontmatter.publishedAt} />
          {lastEdited}
        </Text>
        <Heading as="h1">{frontmatter.title}</Heading>
      </Box>
      <MDX source={code} />
    </PostLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await prepareMDX(params.slug, {});
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
