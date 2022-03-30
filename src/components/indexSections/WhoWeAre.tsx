import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
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
        <NeonCard>
          <Flex
            justifyItems="center"
            mx={20}
            w="70%"
            alignContent={"space-between"}
            p={10}
            display={{ sm: "block", md: "flex" }}
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
                MOPA TEAM
              </Heading>
              <Heading fontSize={"20px"} fontFamily="astoria" color={"white"}>
                Somos mais que um time, somos um grupo de pessoas unigas,
                detrminadas a serem
              </Heading>
              <Heading fontSize={"55px"} fontFamily="grungie" color={"white"}>
                OS INIMIGOS DO FIM.
              </Heading>
              <Heading fontSize={"25px"} fontFamily="grungie" color={"white"}>
                OS VERDADEIROS EU CONHECO!
              </Heading>
            </Box>
          </Flex>
        </NeonCard>
      </Box>
      {/*       
      <ImageWithTextMidle
        alignLeft
        text="Somos mais que um time. Somos MOPA TEAM."
        imagePath="/images/caveiraMopa.png"
        url="https://www.youtube.com/watch?v=pfBMfgLYum4"
      /> */}
    </Paralax>
  );
}
