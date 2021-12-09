import { Link } from "@chakra-ui/react";

interface NavLinkProps {
  title: string;
  url: string;
}

export default function NavLink({ title, url }: NavLinkProps) {
  return (
    <Link
      href={url}
      width="100%"
      bgColor="cinza.500"
      p="0.5rem"
      _hover={{ bgColor: "mopa.primary", color: "cinza.500" }}
    >
      {title}
    </Link>
  );
}
