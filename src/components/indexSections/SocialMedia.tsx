import { Box, Flex } from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";
import { socialList } from "navigation/socialLink";

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
        {socialList.map((social, index) => (
          <ImagePerfil
            key={index}
            isLink
            link={social.url}
            img={social.image}
            color="white"
          />
        ))}
      </Flex>
    </Box>
  );
}
