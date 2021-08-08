import React from "react";
import Link from "next/link";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost, prepareMDX } from "../../lib/mdxUtils";

const CustomLink: React.FC<{ as: string; href: string }> = ({
  as,
  href,
  ...otherProps
}) => {
  return (
    <Link as={as} href={href}>
      <a {...otherProps} className="custom-link" />
    </Link>
  );
};

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="wrapper">
      <h1>{frontmatter.title}</h1>
      <Component
        components={{
          a: CustomLink,
        }}
      />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  // const post = await getSinglePost(params.slug);
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
