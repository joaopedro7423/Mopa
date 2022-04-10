import {
  Center,
  Divider,
  Flex,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Link } from "components/shared/Link";
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
        justifyContent="center"
        textAlign={"center"}
        fontSize="60px"
        fontFamily="grungie"
        color="white"
        mb={7}
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
                <Link isExternal href="https://discord.gg/uMzXaqmZZP">
                  <Image
                    px={10}
                    m="auto"
                    minH="50px"
                    maxH="115px"
                    src="/images/discord2.png"
                  />
                </Link>
              </NeonCard>
            </Center>
          </Flex>
        </WrapItem>
      </Wrap>
    </Paralax>
  );
}
