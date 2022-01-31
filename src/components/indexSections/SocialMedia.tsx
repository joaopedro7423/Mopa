import { Box, Flex } from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";
import { instagranLink, sopotfyLink, youtubeLink } from "navigation/socialLink";

interface SocialMediaProps {
  id?: string;
}

export function SocialMedia({ id }: SocialMediaProps) {
  return (
    <Box id={id} p={5} backgroundColor="black">
      <Flex
        justifyContent="space-between"
        maxW="70%"
        margin="auto"
        display={{ base: "block", md: "flex" }}
      >
        <ImagePerfil
          isLink
          link={instagranLink}
          img="/images/insta.png"
          text="Instagram"
          color="white"
        />

        <ImagePerfil
          isLink
          link={sopotfyLink}
          img="/images/spotfy.png"
          text="Spotify"
          color="white"
        />

        <ImagePerfil
          isLink
          link={youtubeLink}
          img="/images/ym.png"
          text="Youtube"
          color="white"
        />
      </Flex>
    </Box>
  );
}
