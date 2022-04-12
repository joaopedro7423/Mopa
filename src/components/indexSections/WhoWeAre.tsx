import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  chakra,
  Container,
} from "@chakra-ui/react";
import { ImageWithTextMidle } from "components/shared/ImageWithTextMidle";
import NeonCard from "components/shared/NeonCard";
import { Paralax } from "components/shared/Paralax";

interface WhoWeAreProps {
  id?: string;
}

export function WhoWeAre({ id }: WhoWeAreProps) {
  return (
    <Paralax
      py={20}
      bgSize="contain"
      id={id}
      image="/images/background/carbon.jpg"
      boxShadow="dark-lg"
    >
      <Container maxW={"1120px"}>
        <NeonCard w="100%" alignItems="center">
          <Center>
            <Flex
              justify="center"
              mx={20}
              w="90%"
              alignContent={"space-between"}
              p={{ base: 0, sm: 10 }}
              display={{ sm: "block", lg: "flex" }}
            >
              <Image
                m="auto"
                minH="50px"
                maxH="350px"
                src="images/caveiras/mopaCaveira2.png"
              />
              <Box my={{ base: 10, lg: "none" }} mx={{ lg: 10 }}>
                <Divider
                  border="1px"
                  borderColor="red"
                  h="100%"
                  orientation="vertical"
                />
              </Box>
              <Box m="auto" textAlign={{ base: "center", lg: "initial" }}>
                <Heading fontSize={"55px"} fontFamily="grungie" color={"white"}>
                  <chakra.span color={"red !important"}>MOPA</chakra.span> TEAM
                </Heading>
                <Heading fontSize={"20px"} fontFamily="astoria" color={"white"}>
                  Somos mais que um time, somos um grupo de pessoas unigas,
                  detrminadas a serem
                </Heading>
                <Heading fontSize={"55px"} fontFamily="grungie" color={"red"}>
                  OS INIMIGOS DO FIM.
                </Heading>
                <Heading fontSize={"35px"} fontFamily="grungie" color={"white"}>
                  OS DE VERDADE SE ENCONTA AQUI !
                </Heading>
              </Box>
            </Flex>
          </Center>
        </NeonCard>
      </Container>
    </Paralax>
  );
}
