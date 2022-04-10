import { Box, Text, chakra, VStack, Stack, Container } from "@chakra-ui/react";
import { Link } from "components/shared/Link";

interface ProductsProps {
  id: string;
}

export function Products({ id }: ProductsProps) {
  return (
    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" isExternal>
      <Box id={id} py={20} bgImage={"/images/background/branco.jpg"}>
        <Box h="100%" maxW={{ bg: "720px", lg: "1430px" }} w={"80%"} m={"auto"}>
          <Box ml={10} justifyContent={"initial"} maxW={"360px"}>
            <Text
              color={"black"}
              fontFamily={"grungie"}
              fontSize={["100px", "100px", "100px", "120px"]}
              lineHeight={0.6}
            >
              PRODUTOS
              <chakra.span
                lineHeight={0.5}
                fontSize={["170px", "170px", "170px", "200px"]}
              >
                {" "}
                MOPA
              </chakra.span>
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
