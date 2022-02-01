import { Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { ImageWithTextMidle } from "components/shared/ImageWithTextMidle";

interface WhoWeAreProps {
  id?: string;
}

export function WhoWeAre({ id }: WhoWeAreProps) {
  return (
    <Center id={id} minh="50vh" bgColor="black">
      <ImageWithTextMidle
        alignLeft
        text="Somos mais que um time. Somos MOPA TEAM."
        imagePath="/images/caveiraMopa.png"
        url="https://www.youtube.com/watch?v=pfBMfgLYum4"
      />
    </Center>
  );
}
