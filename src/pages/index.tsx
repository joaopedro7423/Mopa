import { Box, Center, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { ImagePerfil } from "components/shared/ImagePerfil";
import { SpecialMembers } from "components/indexSections/SpecialMembers";
import { MainLayout } from "layout/MainLayout";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { InitialParalax } from "components/indexSections/InitialParalax";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="MOPA TEAM | OS VERDADEIROS ESTÃO AQUI!"
        description="Nunca conhecemos a derrota."
      ></NextSeo>
      <MainLayout>
        <InitialParalax id="inicio" />

        <SpecialMembers id="MembrosEspeciais" />
      </MainLayout>
    </>
  );
};

export default Home;
