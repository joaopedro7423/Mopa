import Image from "next/image";
import { Link } from "../../../shared/Link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo_header.jpg"
        alt="mopa"
        width="120px"
        height="41px"
      />
    </Link>
  );
}
