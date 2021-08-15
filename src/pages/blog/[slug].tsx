import React from "react";
import { MDX } from "components/mdx";
import { getAllPosts, prepareMDX, getComponents } from "../../lib/mdxUtils";
import { PostLayout } from "layouts/PostLayout";

const Post = ({ code, frontmatter }) => {
  return (
    <PostLayout>
      <h1>{frontmatter.title}</h1>
      <MDX source={code} />
    </PostLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  const components = await getComponents("");
  const post = await prepareMDX(params.slug, { files: components });
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
