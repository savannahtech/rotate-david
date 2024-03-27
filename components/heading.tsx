import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const customH1 = defineStyle({
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "35px",
  letterSpacing: "-0.33px",
});

const customH2 = defineStyle({
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "29px",
  letterSpacing: "-0.25px",
});

const customH3 = defineStyle({
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "26px",
  letterSpacing: "-0.25px",
});

const customH4 = defineStyle({
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "20px",
  letterSpacing: "-0.2px",
});

export const headingTheme = defineStyleConfig({
  variants: { customH1, customH2, customH3, customH4 },
});
