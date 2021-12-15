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
        text="Silvio Santos Ipsum Mah você mora com o papai ou com a mamãem? Valendo um milhão de reaisammm. Estamos em ritmo de festamm. Ma você está certo dissoam? Ma! Ao adquirir o carnê do Baú, você estará concorrendo a um prêmio de cem mil reaisam. O prêmio é em barras de ouro, que vale mais que dinheiroam. É fácil ou não éam?"
        imagePath="/images/logo_header.jpg"
        url="https://www.youtube.com/watch?v=pfBMfgLYum4"
      />
    </Center>
  );
}
