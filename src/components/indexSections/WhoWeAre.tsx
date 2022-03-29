import { Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { ImageWithTextMidle } from "components/shared/ImageWithTextMidle";
import NeonCard from "components/shared/NeonCard";
import { Paralax } from "components/shared/Paralax";

interface WhoWeAreProps {
  id?: string;
}

export function WhoWeAre({ id }: WhoWeAreProps) {
  return (
    <Paralax
      py={20}
      bgSize="contain"
      id={id}
      image="/images/background/carbon.jpg"
    >
      <NeonCard></NeonCard>
      {/*       
      <ImageWithTextMidle
        alignLeft
        text="Somos mais que um time. Somos MOPA TEAM."
        imagePath="/images/caveiraMopa.png"
        url="https://www.youtube.com/watch?v=pfBMfgLYum4"
      /> */}
    </Paralax>
  );
}
