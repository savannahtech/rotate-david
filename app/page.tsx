"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Card, Tag } from "../components";

import CaretIcon from "../public/icons/caret-up.svg";
import CommentIcon from "../public/icons/comment.svg";

import { suggestions, tags } from "utils/data";

const Page = () => {
  const getTagText = (tagValue: string) => {
    const tag = tags.find(({ value }) => value === tagValue);
    return tag?.text;
  };

  return (
    <Box>
      {suggestions.map(({ id, title, description, tag, comments, votes }) => (
        <Card
          key={`suggestion-${id}`}
          mb="20px"
          display="flex"
          justify-content="space-between"
          align-items="center"
          cursor="pointer"
        >
          <Flex w="100%">
            <Flex
              h="53px"
              p="0 11px"
              justify="center"
              align="center"
              direction="column"
              bgColor="light-blue.200"
              color="dark-blue.100"
              borderRadius="10px"
              mr="40px"
              _hover={{
                bgColor: "light-blue.300",
              }}
              transition="all ease-in-out 0.4s"
            >
              <Flex mb="8px">
                <CaretIcon />
              </Flex>
              <Text variant="body3">{votes}</Text>
            </Flex>
            <Box>
              <Heading
                as="h3"
                variant="customH3"
                color="dark-blue.200"
                mb="4px"
                transition="all ease-in-out 0.4s"
              >
                {title}
              </Heading>
              <Text mb="12px">{description}</Text>
              <Tag m="0" pointerEvents="none">
                {getTagText(tag)}
              </Tag>
            </Box>
          </Flex>
          <Flex align="center">
            <Flex w="18px" mr="8px">
              <CommentIcon />
            </Flex>
            <Text
              fontWeight="700"
              color="dark-blue.200"
              opacity={!comments ? "0.5" : "1"}
            >
              {comments}
            </Text>
          </Flex>
        </Card>
      ))}
    </Box>
  );
};

export default Page;
