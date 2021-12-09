import { AiFillCaretDown } from "react-icons/ai";
import "@szhsin/react-menu/dist/index.css";

import { DropdownOptions } from "types/dropdown";
import { Flex, Text } from "@chakra-ui/react";
import { Menu, MenuItem, SubMenu } from "@szhsin/react-menu";
import { Link } from "../Link";

interface DropdownMenuItemProps {
  options: DropdownOptions;
  uppercase?: boolean;
}

const buildMenuItem = (options: DropdownOptions): any => {
  if (options.items) {
    return options.items?.map((item, index) => {
      if (!item.items) return buildMenuItem(item);
      else {
        return (
          <SubMenu key={index} label={item.name} className="react-menu">
            {buildMenuItem(item)}
          </SubMenu>
        );
      }
    });
  }
  return (
    <MenuItem
      className="react-menu-item"
      key={options.name}
      style={{
        textTransform: "uppercase",
      }}
    >
      <Link
        w="100%"
        h="100%"
        d="flex"
        alignItems="center"
        href={String(options.url)}
      >
        {options.name}
      </Link>
    </MenuItem>
  );
};

export default function DropdownMenuItem({
  options,
  uppercase = false,
}: DropdownMenuItemProps) {
  return (
    <Menu
      className="react-menu"
      menuButton={
        <Flex
          as="li"
          align="center"
          color="white"
          position="relative"
          px="2"
          cursor="pointer"
          minH="30px"
          _hover={{
            bg: "mopa.tertiary",
          }}
        >
          <Text
            as="span"
            mr="1"
            fontSize="x-small"
            fontFamily="Montserrat"
            fontWeight="bold"
            textTransform={uppercase ? "uppercase" : "none"}
          >
            {options.name}
          </Text>
          <AiFillCaretDown />
        </Flex>
      }
    >
      {buildMenuItem(options)}
    </Menu>
  );
}
