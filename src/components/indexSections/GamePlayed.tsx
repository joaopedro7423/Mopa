import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";
import { Paralax } from "components/shared/Paralax";

interface GamePlayedProps {
  id?: string;
}

export function GamePlayed({ id }: GamePlayedProps) {
  return (
    <Paralax image="/images/MOPA_3.jpg" id={id} p={5} backgroundColor="black">
      <Flex
        justifyContent="space-between"
        maxW="70%"
        margin="auto"
        display={{ base: "block", md: "flex" }}
      >
        <ImagePerfil
          link="null"
          img="/images/csgo.jpg"
          text="Cs Go"
          color="black"
        />

        <ImagePerfil
          link="null"
          img="/images/lol.jpg"
          text="LOL"
          color="black"
        />

        <ImagePerfil
          link="null"
          img="/images/cod.jpg"
          text="Cod Warzone"
          color="black"
        />

        <ImagePerfil
          link="null"
          img="/images/apex.jpg"
          text="APEX"
          color="black"
        />
      </Flex>
    </Paralax>
  );
}
