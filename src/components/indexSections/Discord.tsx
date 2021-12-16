import { Center } from "@chakra-ui/react";
import { ImageWithTextMidle } from "components/shared/ImageWithTextMidle";

interface DiscordProps {
  id?: string;
}

export function Discord({ id }: DiscordProps) {
  return (
    <Center id={id} minh="50vh" bgColor="black">
      <ImageWithTextMidle
        isLink
        text="Entre em nosso Discord"
        imagePath="/images/discord2.png"
        url="https://www.youtube.com/watch?v=pfBMfgLYum4"
      />
    </Center>
  );
}
