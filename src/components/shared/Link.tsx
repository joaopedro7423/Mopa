import NextLink from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface LinkProps extends ChakraLinkProps {
  href: string;
  externalLink?: boolean;
  children?: ReactNode | ReactNode[] | String;
}

export function Link({
  href,
  externalLink = false,
  children,
  ...rest
}: LinkProps) {
  if (externalLink) {
    return (
      <ChakraLink href={href} {...rest}>
        {children}
      </ChakraLink>
    );
  }
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
}
