import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>&#60;Renzo/&#62;</title>
        <meta
          name="description"
          content="If you are reading this: Hi! im Renzo, and this is my personal portfolio, hope you have a great day!"
        />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Images/icon.webp" />
      </Head>
      <Layout>
        <h1>Hola mundo!</h1>
      </Layout>
    </>
  );
}
