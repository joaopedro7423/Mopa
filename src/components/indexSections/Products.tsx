import { Box } from "@chakra-ui/react";
import { CarouselChakra } from "components/shared/Carrousel";

interface ProductsProps {
  id: string;
}

export function Products({ id }: ProductsProps) {
  return (
    <Box id={id} minh="50vh" bgColor="black" p={5}>
      <Box w="80%" margin="auto" p={4}>
      <CarouselChakra />
      </Box>
    </Box>
  );
}
