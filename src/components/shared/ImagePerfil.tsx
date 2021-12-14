import { Box, Center, color, Image, Text } from "@chakra-ui/react";

type ImageProps = {
  img: string;
  text: string;
  color?: string ;
};

export function ImagePerfil({ img, text, color = 'white' }: ImageProps) {
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
        <Text color={color} pt={5} textAlign="center" justifyContent="center">
          {text}
        </Text>
      </Center>
    </>
  );
}
