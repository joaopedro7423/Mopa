import { Wrap, WrapItem } from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";
import { Paralax } from "components/shared/Paralax";

interface GamePlayedProps {
  id?: string;
}

export function GamePlayed({ id }: GamePlayedProps) {
  return (
    <Paralax
      image="/images/fundo_branco.png"
      id={id}
      p={5}
      backgroundColor="black"
    >
      <Wrap justify="center" maxW="80%" margin="auto">
        <WrapItem>
          <ImagePerfil
            link="null"
            img="/images/csgo.jpg"
            text="CS GO"
            color="black"
          />
        </WrapItem>

        <WrapItem>
          <ImagePerfil
            link="null"
            img="/images/lol.jpg"
            text="LOL"
            color="black"
          />
        </WrapItem>

        <WrapItem>
          {" "}
          <ImagePerfil
            link="null"
            img="/images/cod.jpg"
            text="COD WARZONE"
            color="black"
          />
        </WrapItem>
        <WrapItem>
          {" "}
          <ImagePerfil
            link="null"
            img="/images/apex.jpg"
            text="APEX"
            color="black"
          />
        </WrapItem>
      </Wrap>
    </Paralax>
  );
}
