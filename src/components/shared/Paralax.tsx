import React, { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface ParalaxProps extends BoxProps {
  image: string;
  children: ReactNode;
};

export function Paralax({ image, children, ...rest }: ParalaxProps) {
  return (
    <Box
      {...rest}
      backgroundImage={image}
      backgroundAttachment="fixed"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      {children}
    </Box>
  );
}
