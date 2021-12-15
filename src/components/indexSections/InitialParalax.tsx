import { Paralax } from "components/shared/Paralax";

interface InitialParalaxProps {
  id?: string;
}

export function InitialParalax({ id }: InitialParalaxProps) {
  return (
      <Paralax  h="100vh" id={id} image="/images/logo_header.jpg">


      </Paralax>
   
  );
}