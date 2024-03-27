"use client";

import { Button, Flex, Heading } from "@chakra-ui/react";
import { Select } from ".";

import { sortOptions } from "utils/data";

const Topbar = () => (
  <Flex
    w="100%"
    h="72px"
    p="0 16px 0 24px"
    mb="24px"
    borderRadius="10px"
    justify="space-between"
    align="center"
    bgColor="dark-blue.300"
  >
    <Flex align="center" whiteSpace="nowrap" h="100%">
      <Flex minW="24px" mr="16px">
        <img src="/icons/bulb.svg" alt="" />
      </Flex>
      <Heading as="h3" variant="customH3" color="white.100" mr="38px">
        6 Suggestions
      </Heading>

      <Select
        label="Sort by :"
        name="sort"
        options={sortOptions}
        onChange={() => null}
      />
    </Flex>

    <Button variant="custom">+ Add Feedback</Button>
  </Flex>
);

export default Topbar;
