import { Box, Center, Image, Text } from "@chakra-ui/react";

type ImageProps = {
  img: string;
  text: string;
};

export function ImagePerfil({ img, text }: ImageProps) {
  return (
    <>
      <Center flexDir="column">
        <Image
          maxW="150px"
          maxH="150px"
          borderRadius="full"
          src={img}
          alt="Users"
        />
        <Text color="white" pt={5} textAlign="center" justifyContent="center">
          {text}
        </Text>
      </Center>
    </>
  );
}
