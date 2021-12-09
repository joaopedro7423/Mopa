import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { DropdownMenu } from "components/shared/DropdownMenu";
//import { secondaryHeaderNavigation } from "navigation/secondaryHeader";
import { Logo } from "./Logo";

export function SecondaryHeader() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box
      h={{ base: "max-content", md: "63" }}
      w="100%"
      px={{ base: "0", md: "4", xl: "0" }}
      background="mopa.primary"
    >
      <Flex
        align="center"
        justify={{ base: "center", md: "space-between" }}
        maxWidth="1120px"
        height="100%"
        marginX="auto"
      >
        {isWideVersion && <Logo />}
        {/* <DropdownMenu
          options={secondaryHeaderNavigation}
          direction={isWideVersion ? "row" : "column"}
        /> */}
      </Flex>
    </Box>
  );
}
