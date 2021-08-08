import React from "react";
import Link from "next/link";
import { getMDXComponent } from "mdx-bundler/client";
import {
  getAllPosts,
  getSinglePost,
  prepareMDX,
  getComponents,
} from "../../lib/mdxUtils";
import { GetStaticPropsContext } from "next";

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
  const components = await getComponents(
    "C:/Projects/Personal Projects/creative-coding/personal-blog/src/data/posts"
  );
  const post = await prepareMDX(params.slug, { files: components });
  return {
    props: { ...post },
  };
};

// export const getStaticProps = async ({params}: GetStaticPropsContext) => {
//   if(params?.slug){
//     const post = await getPostBySlug([params.year as string, params.month as string, params.slug as string], ['slug', 'title', 'content', 'lead', 'href', 'tags', 'year', 'month', 'day', 'directory'])

//     const components = await getComponents(post.directory)

//     const source = await prepareMDX(post.content, components)

//     return {
//       props: {
//         post: pick(post, ['slug', 'title', 'lead', 'href', 'tags', 'year', 'month', 'day']),
//         source
//       }
//     }
//   }
// }

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
