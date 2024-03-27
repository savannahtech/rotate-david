import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const custom = defineStyle({
  border: 0,
  minW: "158px",
  h: "44px",
  p: "16px",
  borderRadius: "10px",
  bgColor: "purple.100",
  color: "light-blue.200",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "1",
  transition: "all ease-in-out .4s",
  _hover: {
    bgColor: "purple.200",
  },
  _active: {
    outline: 0,
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { custom },
});
