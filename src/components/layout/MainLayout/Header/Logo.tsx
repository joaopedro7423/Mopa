import Image from "next/image";
import { Link } from "../../../shared/Link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/CaveiraMopa.png"
        alt="mopa"
        width="120px"
        height="41px"
      />
    </Link>
  );
}
