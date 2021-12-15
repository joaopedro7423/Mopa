import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";

interface GamePlayedProps {
  id?: string;
}

export function GamePlayed({ id }: GamePlayedProps) {
  return (
    <Box id={id} p={5} backgroundColor="black">
      <Flex
        justifyContent="space-between"
        maxW="70%"
        margin="auto"
        display={{ base: "block", md: "flex" }}
      >
        <ImagePerfil img="/images/csgo.jpg" text="Cs Go" color="white" />

        <ImagePerfil img="/images/lol.jpg" text="LOL" />

        <ImagePerfil img="/images/cod.jpg" text="Cod Warzone" />
      </Flex>
    </Box>
  );
}
