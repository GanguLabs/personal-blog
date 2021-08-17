import React from "react";
import { Flex, Box, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import Date from "components/shared/Date";

interface IPost {
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
}

const PostItem: React.FC<IPost> = ({
  title,
  publishedAt,
  description,
  slug,
}) => {
  const router = useRouter();

  return (
    <Flex
      as="li"
      justifyContent="space-between"
      onClick={() => router.push(`/blog/${slug}`)}
      flexDirection={["column", "row", "row", "row"]}
    >
      <Box>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </Box>
      <Box>
        <Text>
          <Date date={publishedAt} />
        </Text>
      </Box>
    </Flex>
  );
};

export default PostItem;
