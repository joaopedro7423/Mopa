import { MainLayout } from "layout/MainLayout";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="MOPA TEAM | OS VERDADEIROS ESTÃO AQUI!"
        description="Nunca conhecemos a derrota."
      ></NextSeo>
      Um teste de Escrita
    </MainLayout>
  );
};

export default Home;
