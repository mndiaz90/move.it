import React from "react";

import Head from "next/head";

import { GetServerSideProps } from 'next'

import ChallengeBar from "../components/ChallengeBar";
import CountDown from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from "../styles/Home.module.css";
import ChallengeBox from "../components/ChallengeBox";
import { CountDownContextProvider } from "../contexts/CountDownContext";
import { ChallengeProvider } from "../contexts/ChallengeContext";

interface HomeProps {
  level: number
}


export default function Home(props: HomeProps) {
  console.log(props)
  return (
    <ChallengeProvider level={props.level}>
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />
        <CountDownContextProvider>
          <section className={styles.leftContainer}>
            <div>
              <Profile />
              <ChallengeBar />
              <CountDown />
            </div>

            <ChallengeBox />
          </section>
        </CountDownContextProvider>

      </div>
    </ChallengeProvider>

  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level } = ctx.req.cookies
  return {
    props: {
      level: Number(level)
    }
  }
}
