import { Box, Center, color, Image, Text } from "@chakra-ui/react";

type ImageProps = {
  img: string;
  text: string;
  color?: string;
};

export function ImagePerfil({ img, text, color = "white" }: ImageProps) {
  return (
    <>
      <Center flexDir="column">
        <Image boxSize="200px" borderRadius="full" src={img} alt="Images" />
        <Text color={color} pt={5} textAlign="center" justifyContent="center">
          {text}
        </Text>
      </Center>
    </>
  );
}
