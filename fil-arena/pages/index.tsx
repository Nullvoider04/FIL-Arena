import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to FIL Arena
        </h1>

        <p className={styles.description}>
          Catch , Train , Attack and gain FIL Tokens ✨ 
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        
      </main>
    </div>
  );
};

export default Home;
