import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box as="footer" bg="black">
      <Center py={3}>
        <Text fontSize="11px" color="white">
        © Todos os direitos reservados MOPA TEAM
        </Text>
      </Center>
    </Box>
  );
}
