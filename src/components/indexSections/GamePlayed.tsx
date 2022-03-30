import {
  Center,
  Divider,
  Flex,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";
import NeonCard from "components/shared/NeonCard";
import { Paralax } from "components/shared/Paralax";

interface GamePlayedProps {
  id?: string;
}

export function GamePlayed({ id }: GamePlayedProps) {
  return (
    <Paralax
      image="/images/background/carbon.jpg"
      id={id}
      p={12}
      backgroundColor="black"
    >
      <Text
        justify="center"
        textAlign={"center"}
        fontSize="60px"
        fontFamily="grungie"
        color="white"
      >
        {" "}
        ESTAMOS SEMPRE ONLINE
      </Text>

      <Wrap justify="center" maxW="80%" margin="auto" spacing={5}>
        <WrapItem>
          <Image src="/images/jogos/apex.png" maxH={"100px"} />
        </WrapItem>

        <WrapItem>
          <Image src="/images/jogos/warzone.png" maxH={"100px"} />
        </WrapItem>

        <WrapItem>
          <Image src="/images/jogos/league.png" maxH={"100px"} />
        </WrapItem>
        <WrapItem>
          <Image src="/images/jogos/csgo.png" maxH={"100px"} />
        </WrapItem>

        <WrapItem>
          <Flex w="100%">
            <Center>
              <Divider
                justifySelf={"center"}
                justifyContent={"center"}
                border="1px"
                borderColor="red"
                w="20%"
              />

              <NeonCard>
                <Image
                  px={10}
                  m="auto"
                  minH="50px"
                  maxH="115px"
                  src="/images/discord2.png"
                />
              </NeonCard>
            </Center>
          </Flex>
        </WrapItem>
      </Wrap>

      {/* <Wrap max justify="center" maxW="80%" margin="auto">
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
      </Wrap> */}
    </Paralax>
  );
}
