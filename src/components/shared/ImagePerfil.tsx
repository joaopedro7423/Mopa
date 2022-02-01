import React, { useRef } from "react";
import {
  Box,
  Center,
  Image,
  ScaleFade,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";
import { Link } from "./Link";

type ImageProps = {
  img: string;
  text?: string;
  description?: string;
  color?: string;
  link: string;
  isLink?: boolean;
};

export function ImagePerfil({
  isLink,
  link,
  img,
  text,
  description,
  color = "white",
}: ImageProps) {
  const ref = useRef(null);

  const isWideVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Box ref={ref} m={2} mt={5}>
      {isLink ? (
        <ScaleFade
          initialScale={0.9}
          in={enterCount > 0 || isWideVersion}
          whileHover={{ scale: 1.1 }}
        >
          <Center flexDir="column">
            <Link href={link} isExternal>
              <Image
                boxSize="200px"
                borderRadius="full"
                src={img}
                alt="Images"
                objectFit="cover"
                border={`5px solid black`}
              />
              <Text
                fontSize="xx-large"
                fontWeight="extrabold"
                color={color}
                pt={5}
                textAlign="center"
                justifyContent="center"
                textShadow={`0px 0px 2px white`}
              >
                {text}
              </Text>
            </Link>
          </Center>
        </ScaleFade>
      ) : (
        <ScaleFade
          initialScale={0.9}
          in={enterCount > 0 || isWideVersion}
          whileHover={{ scale: 1.1 }}
        >
          <Center flexDir="column">
            <Image
              boxSize="200px"
              borderRadius="full"
              src={img}
              alt="Images"
              objectFit="cover"
              border={`5px solid black`}
            />
            <Text
              fontSize="xx-large"
              fontWeight="extrabold"
              color={color}
              pt={5}
              textAlign="center"
              justifyContent="center"
              textShadow={`0px 0px 2px white`}
            >
              {text}
            </Text>
            <Text
              fontSize="xs"
              fontWeight="extrabold"
              color={color}
              pt={2}
              textAlign="center"
              justifyContent="center"
              textShadow={`0px 0px 2px white`}
            >
              {description}
            </Text>
          </Center>
        </ScaleFade>
      )}
    </Box>
  );
}
