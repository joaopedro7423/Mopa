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
        <ImagePerfil img="/images/csgo.jpg" text="Cs Go" color="Red" />

        <ImagePerfil img="/images/lol.jpg" text="LOL" color="Red" />

        <ImagePerfil img="/images/cod.jpg" text="Cod Warzone" color="Red" />
      </Flex>
    </Paralax>
  );
}
