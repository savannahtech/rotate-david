"use client";

import { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Card, Tag } from ".";

import { roadmap, tags } from "utils/data";

const Sidebar = () => {
  const [activeTag, setActiveTag] = useState("");

  const getRoadmapColor = (roadmapType: string) => {
    const selectedRoadmap = roadmap.find(({ type }) => type === roadmapType);
    return selectedRoadmap?.color;
  };

  return (
    <Box maxW="255px" mr="30px" pos="sticky" top="95px">
      <Card
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-start"
        flexDirection="column"
        h="137px"
        color="white.100"
        background="url('/patterns/sidebar-header.svg')"
        mb="24px"
      >
        <Heading as="h2" variant="customH2">
          Frontend Mentor
        </Heading>
        <Text variant="body2">Feedback Board</Text>
      </Card>

      <Card display="flex" pb="10px" flexWrap="wrap" mb="24px">
        {tags.map(({ value, text }, index) => (
          <Tag
            key={`tag-${index}`}
            onClick={() => setActiveTag(value)}
            isActive={value === activeTag}
          >
            {text}
          </Tag>
        ))}
      </Card>

      <Card>
        <Flex justify="space-between" align="center">
          <Heading as="h3" variant="customH3" color="dark-blue.200">
            Roadmap
          </Heading>
          <Text
            as="span"
            variant="body3"
            color="blue.100"
            cursor="pointer"
            textDecoration="underline"
            transition="color ease-in-out .4s"
            _hover={{
              color: "blue.200",
            }}
          >
            View
          </Text>
        </Flex>
        <Box>
          {roadmap.map(({ type, value }, index) => (
            <Flex
              key={`roadmap-${index}`}
              mt="8px"
              justify="space-between"
              align="center"
              textTransform="capitalize"
            >
              <Text
                display="flex"
                alignItems="center"
                _before={{
                  content: "''",
                  display: "block",
                  w: "8px",
                  h: "8px",
                  borderRadius: "50%",
                  mr: "16px",
                  bgColor: `${getRoadmapColor(type)}`,
                }}
              >
                {type}
              </Text>
              <Text fontWeight="700">{value}</Text>
            </Flex>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default Sidebar;
