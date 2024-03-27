import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const body1 = defineStyle({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "23px",
});

const body2 = defineStyle({
  fontSize: "15px",
  fontWeight: "400",
  lineHeight: "22px",
});

const body3 = defineStyle({
  fontSize: "13px",
  fontWeight: "600",
  lineHeight: "19px",
});

export const textTheme = defineStyleConfig({
  variants: { body1, body2, body3 },
});
