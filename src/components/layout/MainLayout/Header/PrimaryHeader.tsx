import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import { DropdownMenu } from "components/shared/DropdownMenu";

import { Logo } from "./Logo";
import { useHeaderDrawer } from "context/HeaderDrawerContext";
import { primaryHeaderNavigation } from "navigation/primaryHeader";

export function PrimaryHeader() {
  const { isOpen, onOpen, onClose } = useHeaderDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });
  const showSocialMediaIcons = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      position="sticky"
      left="0"
      top="0"
      right="0"
      h="52px"
      w="100%"
      px={{ base: "4", xl: "0" }}
      background="mopa.secondary"
      zIndex={1000}
    >
      {!isWideVersion ? (
        <Flex align="center" justify="space-between" h="100%">
          <Logo />
          <IconButton
            aria-label="Open navigation"
            color="white"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          />
          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent bg="mopa.secondary" p="4">
                <DrawerCloseButton mt="6" color="blue" />
                <DrawerHeader>
                  <Logo />
                </DrawerHeader>
                <DrawerBody>
                  <DropdownMenu
                    options={primaryHeaderNavigation}
                    uppercase
                    direction="column"
                  />
                  
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Flex>
      ) : (
        <Flex
          align="center"
          justify="space-between"
          maxWidth="1120px"
          height="100%"
          marginX="auto"
        >
          <DropdownMenu options={primaryHeaderNavigation} uppercase />
          {showSocialMediaIcons}
        </Flex>
      )}
    </Box>
  );
}
