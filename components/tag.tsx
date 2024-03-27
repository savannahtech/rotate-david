import { Box, BoxProps } from "@chakra-ui/react";

interface TagProps extends BoxProps {
  isActive?: boolean;
}

const Tag = ({ isActive, ...props }: TagProps) => (
  <Box
    display="inline-flex"
    alignItems="center"
    h="30px"
    p="0 16px"
    borderRadius="10px"
    cursor="pointer"
    m="0 8px 14px 0"
    bgColor={isActive ? "blue.100" : "light-blue.200"}
    color={isActive ? "white.100" : "blue.100"}
    _hover={{
      bgColor: isActive ? "blue.100" : "light-blue.300",
    }}
    fontSize="13px"
    fontWeight="600"
    transition="all ease-in-out .4s"
    {...props}
  />
);

export default Tag;
