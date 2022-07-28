import type { NextPage } from "next";
import Head from "next/head";

import Container from "components/Container";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import MainContent from "components/MainContent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shipper Dashboard</title>
      </Head>

      <Header />

      <Container>
        <Sidebar />
        <MainContent>Welcome to dashboard Shipper.id</MainContent>
      </Container>
    </div>
  );
};

export default Home;
