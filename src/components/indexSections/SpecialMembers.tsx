import { Box, Flex } from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";

interface SpecialMembersProps {
  id?: string;
}

export function SpecialMembers({ id }: SpecialMembersProps) {
  return (
    <Box id={id} p={5} backgroundColor="black">
      <Flex
        justifyContent="space-between"
        maxW="70%"
        margin="auto"
        display={{ base: "block", md: "flex" }}
      >
        <ImagePerfil
          link="null"
          img="/images/logo_header.jpg"
          text="Um texto muito divertido eeeeeee"
          color="white"
        />

        <ImagePerfil
          link="null"
          img="/images/logo_header.jpg"
          text="Um texto muito divertido eeeeeee"
          color="pink"
        />

        <ImagePerfil
          link="null"
          img="/images/logo_header.jpg"
          text="Um texto muito divertido eeeeeee"
          color="red"
        />
      </Flex>
    </Box>
  );
}
