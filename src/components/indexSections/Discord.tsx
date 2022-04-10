import { Center, useBreakpointValue } from "@chakra-ui/react";
import { ImageWithTextMidle } from "components/shared/ImageWithTextMidle";
import { discordLink } from "navigation/socialLink";

interface DiscordProps {
  id?: string;
}

export function Discord({ id }: DiscordProps) {
  const image = useBreakpointValue({
    base: "/images/discord.png" as string,
    md: "/images/discord2.png" as string,
  });
  return (
    <Center id={id} minH="50vh" bgColor="black">
      <ImageWithTextMidle
        isLink
        text="Entre em nosso Discord"
        imagePath={image}
        url={discordLink}
      />
    </Center>
  );
}
