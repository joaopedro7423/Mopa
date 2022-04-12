import {
  Box,
  Divider,
  Flex,
  Text,
  chakra,
  Center,
  Container,
} from "@chakra-ui/react";
import { ImageSocial } from "components/shared/ImageSocial";
import { Paralax } from "components/shared/Paralax";
import { socialList } from "navigation/socialLink";

interface SocialMediaProps {
  id?: string;
}

export function SocialMedia({ id }: SocialMediaProps) {
  return (
    <Paralax
      image="/images/background/carbon.jpg"
      id={id}
      p={10}
      // backgroundColor="black"
    >
      <Container maxW={"1120px"}>
        <Flex
          justifyContent="space-between"
          maxW="100%"
          margin="auto"
          display={{ md: "block", lg: "flex" }}
        >
          <Box m="auto" d={{ sm: "block", md: "flex" }} mr={15}>
            {socialList.map((social, index) => (
              <ImageSocial
                key={index}
                isLink
                link={social.url}
                img={social.image}
                color="white"
              />
            ))}
          </Box>
          <Box mx={{ lg: 10 }}>
            <Divider
              border="2px"
              borderColor="white"
              h="100%"
              orientation="vertical"
            />
          </Box>

          <Center>
            <Box fontSize={"2rem"}>
              <Text fontFamily="astoria" color={"white"}>
                {" "}
                LEVE O
                <chakra.span
                  fontSize={"5rem"}
                  fontFamily="grungie"
                  color={"red !important"}
                >
                  {" "}
                  MOPA{" "}
                </chakra.span>
                COM VOCÊ!
              </Text>
              <Text fontFamily="astoria" color={"white"}>
                NOS SIGA NAS REDES SOCIAIS.
              </Text>
            </Box>
          </Center>
        </Flex>
      </Container>
    </Paralax>
  );
}
