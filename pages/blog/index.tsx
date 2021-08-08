import Link from "next/link";
import { getAllPosts } from "../../lib/mdxUtils";

export default function BlogList({ posts }) {
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
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
