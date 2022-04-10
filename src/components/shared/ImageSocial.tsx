import React, { useRef } from "react";
import {
  Box,
  Center,
  Image,
  ScaleFade,
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

export function ImageSocial({ link, img }: ImageProps) {
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
      <ScaleFade
        initialScale={0.9}
        in={enterCount > 0 || isWideVersion}
        whileHover={{ scale: 1.1 }}
      >
        <Center borderRadius="full" flexDir="column">
          <Link href={link} isExternal>
            <Image
              boxSize="150px"
              borderRadius="full"
              src={img}
              alt="Images"
              objectFit="cover"
            />
          </Link>
        </Center>
      </ScaleFade>
    </Box>
  );
}
