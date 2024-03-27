// app/providers.tsx
"use client";

import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import themes from "themes";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ChakraProvider theme={themes}>{children}</ChakraProvider>;
};

export default Providers;
