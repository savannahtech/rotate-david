import { extendBaseTheme } from "@chakra-ui/react";

import styles from "./styles";
import colors from "./colors";

import { buttonTheme, headingTheme, textTheme } from "components";

const overrides = {
  styles,
  colors,
  components: { Button: buttonTheme, Heading: headingTheme, Text: textTheme },
};

export default extendBaseTheme(overrides);
