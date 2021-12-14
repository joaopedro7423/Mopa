import { Box, Center, HStack, Stack } from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";
import { Paralax } from "components/shared/Paralax";

interface SpecialMembersProps {
  id?: string;
}

export function SpecialMembers({ id }: SpecialMembersProps) {
  return (
    <Box id={id} p={5} backgroundColor="black">
      <Center>
        <Stack
          spacing="60px"
          display={{ base: "block", md: "flex" }}
          direction={{ base: "column", md: "row" }}
        >
          <ImagePerfil
            img="/images/logo_header.jpg"
            text="Um texto muito divertido eeeeeee"
            color="white"
          />

          <ImagePerfil
            img="/images/logo_header.jpg"
            text="Um texto muito divertido eeeeeee"
            color="pink"
          />

          <ImagePerfil
            img="/images/logo_header.jpg"
            text="Um texto muito divertido eeeeeee"
            color="red"
          />
        </Stack>
      </Center>
    </Box>
  );
}
