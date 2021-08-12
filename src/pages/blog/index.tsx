import Link from "next/link";
import { getAllPosts, getComponents } from "../../lib/mdxUtils";

export default function BlogList({ posts }) {
  console.log(posts);
  return (
    <div className="wrapper">
      <h1>All Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts().filter(
    (post) => post.frontmatter.draft !== "true"
  );
  const components = await getComponents(
    "C:/Projects/Personal Projects/creative-coding/personal-blog/src/data/posts"
  );

  return {
    props: { posts, components },
  };
};
