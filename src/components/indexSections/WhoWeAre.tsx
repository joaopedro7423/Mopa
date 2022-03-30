import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  chakra,
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
      <Box shadow="dark-lg">
        <NeonCard alignItems="center">
          <Flex
            justify="center"
            mx={20}
            w="70%"
            alignContent={"space-between"}
            p={10}
            display={{ sm: "block", lg: "flex" }}
          >
            <Image
              justifyContent="center"
              minH="50px"
              maxH="250px"
              src="images/caveiras/mopaCaveira2.png"
            />
            <Box mx={10}>
              <Divider
                border="1px"
                borderColor="red"
                h="97%"
                orientation="vertical"
              />
            </Box>
            <Box>
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
        </NeonCard>
      </Box>
    </Paralax>
  );
}
