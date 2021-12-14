import { Center, HStack } from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";
import { Paralax } from "components/shared/Paralax";

export function SpecialMembers() {
  return (
    <Paralax image="/images/logo_header.jpg" p={5}>
      <Center>
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
    </Paralax>
  );
}
