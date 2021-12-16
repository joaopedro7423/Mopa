import { Center, useBreakpointValue } from "@chakra-ui/react";
import { ImageWithTextMidle } from "components/shared/ImageWithTextMidle";

interface DiscordProps {
  id?: string;
}

export function Discord({ id }: DiscordProps) {
  const image = useBreakpointValue({
    base: "/images/discord.png" as string,
    md: "/images/discord2.png" as string,
  });
  return (
    <Center id={id} minh="50vh" bgColor="black">
      <ImageWithTextMidle
        isLink
        text="Entre em nosso Discord"
        imagePath={image}
        url="https://www.youtube.com/watch?v=pfBMfgLYum4"
      />
    </Center>
  );
}
