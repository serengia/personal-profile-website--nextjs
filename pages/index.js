import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "@/components/Pages/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>James Serengia | Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer based in Nairobi, Kenya"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage />
    </>
  );
}
