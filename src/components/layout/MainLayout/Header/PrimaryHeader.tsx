import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import { DropdownMenu } from "components/shared/DropdownMenu";

import { Logo } from "./Logo";
import { primaryHeaderNavigation } from "navigation/primaryHeader";

export function PrimaryHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      zIndex={1000}
    >
      {!isWideVersion ? (
        <Flex align="center" justify="space-between" h="100%">
          {/* <Logo /> */}

          {
            <IconButton
              onClick={isOpen ? onClose : onOpen}
              aria-label="Open navigation"
              color="white"
              icon={<Icon as={RiMenuLine} />}
              fontSize="24"
              variant="unstyled"
              mr="2"
            />
          }

          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent bg="mopa." p="4">
                <DrawerCloseButton mt="6" color="white" />
                <DrawerHeader>
                  {/* <Logo /> */}
                  <Heading pl={3} fontWeight="extrabold" color="WHITE">
                    MOPA TEAM
                  </Heading>
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
