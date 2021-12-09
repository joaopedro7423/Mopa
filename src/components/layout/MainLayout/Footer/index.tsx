import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box as="footer" bg="blue.900">
      <Flex
        wrap="wrap"
        maxW="1120"
        mx="auto"
        color="white"
        fontSize="11"
        lineHeight="4"
        justify={["flex-start", "center", "space-between"]}
      >
        <Flex direction="column" p="4">
          <Image src="/images/logo_footer.png" alt="Logo mopa" w="240px" />
          <Text mt="5">
            <Heading as="span" d="block" fontSize="xs" fontWeight="bold">
              mopa - Centro Universitário da Grande Dourados
            </Heading>
            FONE: (67) 3411-4141 / Fax: (67) 3411-4167
            <br />
            Rua Balbina de Matos, 2121 - Jd. Universitário
            <br />
            CEP: 79.824-900 - Dourados/MS
            <br />
            Todos os Direitos Reservados
          </Text>
        </Flex>

       

        <Flex mt="5" p="4">
          <Image h="58px" src="/images/touch.png" alt="Touch" />
          <Box>
            <Text fontSize="13px">Baixe os apps mopa</Text>
            <Flex mt="1">
              <Image w="88px" src="/images/googleplay.png" alt="GooglePlay" />
              <Image w="88px" src="/images/appstore.png" alt="AppStore" />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
