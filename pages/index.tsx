import Airlines from "../components/indexPage/Airlines";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import BookingCard from "../components/indexPage/BookingCard";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BookingCard />
      <Airlines />
    </div>
  );
};

export default Home;
