import { Box, Flex, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";
import { memberList } from "navigation/memberList";

interface SpecialMembersProps {
  id?: string;
}

export function SpecialMembers({ id }: SpecialMembersProps) {
  return (
    <Box id={id} p={5} backgroundColor="black">
      <Wrap justify="center" maxW="80%" margin="auto">
        {memberList.map((member, index) => (
          <WrapItem key={index}>
            <ImagePerfil
              link="null"
              img={member.image}
              description={member.description}
              text={member.text}
              color="white"
            />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}
