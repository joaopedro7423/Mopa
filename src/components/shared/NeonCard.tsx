import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import "../../lib/ImportWorklet";

export default function NeonCard() {
  return (
    <>
      <Center>
        <Box
          style={{
            filter:
              "drop-shadow(rgba(255, 0, 0, 0.4) 0px 0px 0px 2px, rgba(255, 0, 0, 0.5) 0px 5px 10px, rgba(255, 0, 0, 0.8) 0px 0px 40px)",
          }}
        >
          <Box bgColor="rgba(0,0,0,0.7)" m={10} className="box">
            <Flex mx={20} w="70%" alignContent={"space-between"} p={10}>
              <Image
                minH="50px"
                maxH={["100px", "100px", "150px", "250px"]}
                src="images/caveiras/mopaCaveira2.png"
              />
              <Box mx={10}>
                <Divider
                  border="1px"
                  borderColor="red"
                  h="97%"
                  orientation="vertical"
                />
              </Box>
              <VStack>
                <Heading fontSize={"55px"} fontFamily="grungie" color={"white"}>
                  MOPA TEAM
                </Heading>
                <Heading fontSize={"20px"} fontFamily="astoria" color={"white"}>
                  Somos mais que um time, somos um grupo de pessoas unigas,
                  detrminadas a serem
                </Heading>
                <Heading fontSize={"55px"} fontFamily="grungie" color={"white"}>
                  OS INIMIGOS DO FIM.
                </Heading>
                <Heading fontSize={"25px"} fontFamily="grungie" color={"white"}>
                  OS VERDADEIROS EU CONHEÇO!
                </Heading>
              </VStack>
            </Flex>
          </Box>
        </Box>
      </Center>
    </>
  );
}
