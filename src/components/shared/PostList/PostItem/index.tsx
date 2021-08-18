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
      className="post-item"
      as="li"
      justifyContent="space-between"
      onClick={() => router.push(`/blog/${slug}`)}
      flexDirection={["column", "column", "row", "row"]}
      letterSpacing="0.5px"
      padding={["12px 10px", "12px 14px", "12px 20px"]}
      borderRadius="5px"
      transition="0.2s background-color ease"
      _hover={{
        cursor: "pointer",
        backgroundColor: "gray.800",
      }}
      lineHeight={[1.4, 1.6]}
      gridGap={[2, 1]}
    >
      <Box>
        <Text
          sx={{
            ".post-item:hover &": {
              color: "gradient.200",
            },
          }}
          transition="0.2s color ease"
          fontWeight="600"
          fontSize={["19px", "20px", "20px"]}
        >
          {title}
        </Text>
        <Text color="gray.400" fontSize={["16px"]}>
          {description}
        </Text>
      </Box>
      <Box
        alignSelf={["flex-start", "flex-start", "flex-end"]}
        fontSize={["15px", "16px", "16px"]}
      >
        <Text color={["gradient.200", "gradient.200", "gray.400", "gray.400"]}>
          <Date date={publishedAt} />
        </Text>
      </Box>
    </Flex>
  );
};

export default PostItem;
