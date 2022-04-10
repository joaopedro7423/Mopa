import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";
import { Paralax } from "components/shared/Paralax";
import { memberList } from "navigation/memberList";

interface SpecialMembersProps {
  id?: string;
}

export function SpecialMembers({ id }: SpecialMembersProps) {
  return (
    <Paralax
      image="/images/background/vermelhoTrans.png"
      id={id}
      p={5}
      backgroundColor="black"
    >
      <Flex d={{ md: "block", lg: "flex" }} maxW="80%" margin="auto">
        <Wrap m="auto" justify="center" w="80%">
          {memberList.map((member, index) => (
            <WrapItem key={index}>
              <ImagePerfil
                isLink
                link={member.link}
                img={member.image}
                description={member.description}
                text={member.text}
                color="white"
              />
            </WrapItem>
          ))}
        </Wrap>
        <Box my={{ base: 10, lg: "none" }} mx={{ lg: 10 }}>
          <Divider
            border="1px"
            borderColor="red"
            h="100%"
            orientation="vertical"
          />
        </Box>
        <Center maxW={{ lg: "40%" }}>
          <Image src="/images/caveiras/mopaVetor.png" />
        </Center>
      </Flex>
    </Paralax>
  );
}
