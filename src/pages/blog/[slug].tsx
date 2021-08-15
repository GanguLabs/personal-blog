import React from "react";
import { MDX } from "mdxTools/mdxClient";
import { getAllPosts, prepareMDX } from "../../mdxTools/mdxServer";
import { PostLayout } from "components/layouts/PostLayout";

const Post = ({ code, frontmatter }) => {
  return (
    <PostLayout>
      <h1>{frontmatter.title}</h1>
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
