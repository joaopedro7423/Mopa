import {
  Center,
  Divider,
  Flex,
  Image,
  SlideFade,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Link } from "./Link";

interface ImageWithTextMidle {
  alignLeft?: boolean;
  isLink?: boolean;
  text: string;
  url: string;
  imagePath?: string;
}

export function ImageWithTextMidle({
  alignLeft,
  isLink,
  text,
  url,
  imagePath,
}: ImageWithTextMidle) {
  const flexDir = alignLeft ? "row" : ("row-reverse" as "row" | "row-reverse");
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
    <Flex
      ref={ref}
      justifyContent="space-between"
      maxW={{ base: "100%", md: "90%" }}
      flexDir={{ base: "column", md: flexDir }}
      h="100%"
      py="5rem"
    >
      <Center margin="auto" p={2} textAlign="left" maxW="30rem">
        {isLink ? (
          <Link
            isExternal
            fontWeight="bold"
            fontSize="20px"
            externalLink
            color="white"
            _hover={{ color: "DarkSlateBlue" }}
            href={url}
          >
            {" "}
            {text}
          </Link>
        ) : (
          <Text fontSize="20px" fontWeight="bold" color="white">
            {text}
          </Text>
        )}
      </Center>

      <Center px={5}>
        <Divider
          h="100%"
          display={{ base: "none", md: "flex" }}
          orientation="vertical"
          color="white"
          margin="auto"
          borderRadius="lg"
        />
      </Center>

      <Center>
        <SlideFade in={enterCount > 0 || isWideVersion} offsetY="20px">
          <Image maxH="30rem" src={imagePath} />
        </SlideFade>
      </Center>
    </Flex>
  );
}
