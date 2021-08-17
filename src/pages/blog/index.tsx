import { getAllPosts } from "../../mdxTools/mdxServer";
import { Stack, Heading, Box, StackDivider } from "@chakra-ui/layout";
import PostItem from "components/shared/PostList/PostItem";
import { parseDate } from "utils";

export default function BlogList({ posts }) {
  return (
    <Box maxWidth="75ch" width="100%" className="wrapper">
      <Heading as="h1" mb={4}>
        All Posts
      </Heading>
      <Stack
        as="ul"
        direction={["column"]}
        spacing="2"
        divider={<StackDivider borderColor="gray.600" />}
      >
        {posts.map((post, index) => (
          <PostItem
            key={index}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            publishedAt={post.frontmatter.publishedAt}
            slug={post.slug}
          />
        ))}
      </Stack>
    </Box>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts()
    .filter((post) => post.frontmatter.draft !== "true")
    .sort(
      (a, b) =>
        parseDate(b.frontmatter.publishedAt).getTime() -
        parseDate(a.frontmatter.publishedAt).getTime()
    );
  return {
    props: { posts },
  };
};
