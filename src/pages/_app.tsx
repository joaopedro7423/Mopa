import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/themes";
import "styles/themes/fonts.css";
import "styles/themes/polygonBox.css";
import { AppProps as NextAppProps } from "next/app";

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
