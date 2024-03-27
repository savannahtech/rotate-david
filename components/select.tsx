"use client";

import { useState, useEffect, ReactNode, SyntheticEvent } from "react";
import { Box, Fade, Flex, Text } from "@chakra-ui/react";

import CaretIcon from "../public/icons/caret-up-white.svg";
import CheckIcon from "../public/icons/check.svg";

type SelectOption = {
  label: ReactNode;
  value: string;
};

type SelectEvent = {
  target: {
    value: string;
    name: string;
  };
};

interface SelectProps {
  label?: ReactNode;
  options: SelectOption[];
  name: string;
  value?: string;
  onChange: (event: SelectEvent) => void;
}

const Select = ({ label, options, name, value, onChange }: SelectProps) => {
  const [isFocused, setFocus] = useState(false);
  const [stateValue, setStateValue] = useState(options[0].value);

  const toggleDropdown = (e: SyntheticEvent) => {
    e.stopPropagation();
    setFocus(!isFocused);
  };

  const getDisplay = () => {
    const item = options.find((opt) => opt.value === stateValue);
    const { label } = item || {};

    return label || "";
  };

  const handleOnChange = (value: string) => {
    setStateValue(value);
    setFocus(true);

    onChange({ target: { value, name } });
  };

  useEffect(() => {
    const closeDropdown = () => {
      if (isFocused) {
        setFocus(false);
      }
    };
    window.addEventListener("click", closeDropdown);

    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, [isFocused]);

  useEffect(() => {
    if (typeof value === "string") {
      setStateValue(value as string);
    }
  }, [value]);

  return (
    <Flex
      pos="relative"
      color="light-blue.200"
      align="center"
      w="100%"
      h="100%"
    >
      {label && (
        <Text
          as="span"
          fontSize="14px"
          lineHeight="20px"
          transition="all ease-in-out 0.4s"
          opacity={isFocused ? "0.75" : "1"}
        >
          {label}
        </Text>
      )}

      <Flex
        w="100%"
        align="center"
        cursor="pointer"
        pl="4px"
        fontSize="14px"
        lineHeight="20px"
        transition="all ease-in-out 0.4s"
        onClick={toggleDropdown}
      >
        <Box
          fontWeight="700"
          transition="all ease-in-out 0.4s"
          opacity={isFocused ? "0.75" : "1"}
        >
          {getDisplay()}
        </Box>
        <Flex
          ml="9px"
          pointerEvents="none"
          transform={isFocused ? "rotate(0deg)" : "rotate(180deg)"}
          transition="all ease-in-out 0.4s"
        >
          <CaretIcon />
        </Flex>
      </Flex>

      <Fade in={isFocused}>
        <Box
          pos="absolute"
          top="calc(100% + 16px)"
          left="0"
          w="255px"
          bgColor="white.100"
          borderRadius="10px"
          boxShadow="0px 10px 40px -7px rgba(55, 63, 104, 0.35)"
          transition="all ease-in-out 0.4s"
        >
          {options.map(({ label, value }, index) => {
            return (
              <Flex
                key={`select-${index}`}
                p="12px 24px"
                color="dark-blue.100"
                cursor="pointer"
                whiteSpace="nowrap"
                justify="space-between"
                align="center"
                borderBottom="1px solid transparentize(dark-blue.200, 0.85)"
                transition="all ease-in-out 0.4s"
                _hover={{ color: "purple.100" }}
                onClick={() => handleOnChange(value)}
              >
                <Text as="span">{label}</Text>
                <Flex opacity={stateValue === value ? "1" : "0"}>
                  <CheckIcon />
                </Flex>
              </Flex>
            );
          })}
        </Box>
      </Fade>
    </Flex>
  );
};

export default Select;
