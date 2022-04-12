import { SpecialMembers } from "components/indexSections/SpecialMembers";
import { MainLayout } from "layout/MainLayout";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { InitialParalax } from "components/indexSections/InitialParalax";
import { WhoWeAre } from "components/indexSections/WhoWeAre";
import { GamePlayed } from "components/indexSections/GamePlayed";
import { Products } from "components/indexSections/Products";
import { SocialMedia } from "components/indexSections/SocialMedia";
import { Container } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="MOPA TEAM | OS VERDADEIROS ESTÃO AQUI!"
        description="Nunca conhecemos a derrota."
      ></NextSeo>
      <MainLayout>
        <InitialParalax id="inicio" />

        <WhoWeAre id="QuemNosSomos" />

        <GamePlayed id="JogosJogados" />

        <Products id="Produtos" />

        <SocialMedia id="SocialMedia" />

        <SpecialMembers id="MembrosEspeciais" />
      </MainLayout>
    </>
  );
};

export default Home;
