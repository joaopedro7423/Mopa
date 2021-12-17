import { ReactNode, useEffect, useState } from "react";

import { Content } from "components/layout/MainLayout/Content";
import { Footer } from "components/layout/MainLayout/Footer";
import { Header } from "components/layout/MainLayout/Header";
import { Flex } from "@chakra-ui/layout";

interface MainLayoutProps {
  children?: ReactNode | ReactNode[] | string;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isTop, setTop] = useState(false);

  const toogleTop = () => {
    if (window.pageYOffset > 0.1) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toogleTop);
  }, []);
  return (
    <Flex direction="column">
      {isTop ? <Header /> : null}

      <Content>{children}</Content>

      <Footer />
    </Flex>
  );
}
