import {
  Box,
  BoxProps,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import "../../lib/ImportWorklet";

interface NeonBoxProps extends BoxProps {
  children?: ReactNode;
}

export default function NeonCard({ children, ...rest }: NeonBoxProps) {
  return (
    <Center>
      <Box
        maxW="60%"
        maxH="10%"
        style={{
          filter:
            "drop-shadow(rgba(255, 0, 0, 0.4) 0px 0px 0px 2px, rgba(255, 0, 0, 0.5) 0px 5px 10px, rgba(255, 0, 0, 0.8) 0px 0px 40px)",
        }}
      >
        <Box bgColor="rgba(0,0,0,0.7)" boxShadow={"red"} className="box">
          {children}
        </Box>
      </Box>
    </Center>
  );
}
