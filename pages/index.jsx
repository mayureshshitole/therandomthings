import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Random Things</title>
        <meta name="description" content="Random Things" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-2 bg-gray-100">
        <Hero />
      </main>
    </>
  );
}
