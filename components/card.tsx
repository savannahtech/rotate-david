import { Box, BoxProps } from "@chakra-ui/react";

interface CardProps extends BoxProps {}

const Card = ({ children, ...props }: CardProps) => (
  <Box p="24px" bgColor="white.100" borderRadius="10px" {...props}>
    {children}
  </Box>
);

export default Card;
