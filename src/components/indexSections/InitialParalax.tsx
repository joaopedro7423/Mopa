import { Center, Image } from "@chakra-ui/react";
import { Paralax } from "components/shared/Paralax";

interface InitialParalaxProps {
  id?: string;
}

export function InitialParalax({ id }: InitialParalaxProps) {
  return (
    <Paralax
      h="100vh"
      id={id}
      image="/images/background/vermelhoTrans.png"
      bgColor="black"
      shadow="dark-lg"
    >
      <Center>
        <Image maxW="100vh" src="/images/caveiras/mopaVetor.png" />
      </Center>
    </Paralax>
  );
}
