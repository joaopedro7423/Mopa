import { Flex, HStack } from "@chakra-ui/react";
import { DropdownOptions } from "types/dropdown";
import { Link } from "../Link";
import DropdownMenuItem from "./DropdownMenuItem";

interface DropdownMenuProps {
  options: DropdownOptions[];
  uppercase?: boolean;
  direction?: "row" | "column";
}

export function DropdownMenu({
  options,
  uppercase = false,
  direction = "row",
}: DropdownMenuProps) {
  return (
    <Flex
      as="ul"
      height="100%"
      px="2"
      direction={direction}
      width={direction === "column" ? "100%" : ""}
    >
      {options.map((option, index) =>
        option.items ? (
          <DropdownMenuItem
            options={option}
            uppercase={uppercase}
            key={index}
          />
        ) : (
          <HStack key={index} minH="30px" px={{ base: "2", md: "2" }}>
            <Link
              href={String(option.url)}
              textTransform={uppercase ? "uppercase" : "none"}
              fontFamily="Montserrat"
              fontSize="md"
              fontWeight="extrabold"
              color="white"
              h="100%"
              w="100%"
              d="flex"
              alignItems="center"
              cursor="pointer"
              _hover={{ color: "red" }}
            >
              {option.name}
            </Link>
          </HStack>
        )
      )}
    </Flex>
  );
}
