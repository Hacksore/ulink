import type { NextPage } from "next";
import Head from "next/head";
// import { trpc } from "../utils/trpc";
import styles from "./index.module.css";

const Home: NextPage = () => {
  // const { data } = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>ulink</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
          <h1 className={styles.title}>
            ulink
          </h1>
        
          
          <input type="text" placeholder="Search a github user..." />
      
        </div>
      </div>
    </>
  );
};

export default Home;
