import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";

import Providers from "./providers";
import { fonts } from "./fonts";
import { Sidebar, Topbar } from "../components";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={fonts.jost.variable}>
      <body>
        <Providers>
          <Flex
            p="95px 165px"
            minH="100vh"
            bgColor="light-blue.100"
            align="flex-start"
          >
            <Sidebar />
            <Box w="100%">
              <Topbar />
              {children}
            </Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
};

export const metadata = {
  title: "Suggestions | Savanna Tech",
};

export default RootLayout;
