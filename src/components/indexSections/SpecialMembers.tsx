import { Center, HStack } from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";

export function SpecialMembers() {
  return (
    <Center
      p={5}
      backgroundImage="/images/logo_header.jpg"
      backgroundAttachment="fixed"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <HStack spacing={8} display={{ base: "block", md: "flex" }}>
        <ImagePerfil
          img="/images/logo_header.jpg"
          text="Um texto muito divertido eeeeeee"
        />

        <ImagePerfil
          img="/images/logo_header.jpg"
          text="Um texto muito divertido eeeeeee"
        />

        <ImagePerfil
          img="/images/logo_header.jpg"
          text="Um texto muito divertido eeeeeee"
        />
      </HStack>
    </Center>
  );
}
