

import { useContext } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

import ChallengeBar from "../components/ChallengeBar";
import CountDown from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";
import ChallengeBox from "../components/ChallengeBox";
import { CountDownContextProvider } from "../contexts/CountDownContext";
import { LateralBar } from "../components/LateralBar";
import { ChallengeContext } from '../contexts/ChallengeContext'
import { GridLeaderBoard } from "../components/GridLeaderBoard";

export function Principal() {

    const { selectedHome } = useContext(ChallengeContext)
    return (
        <div className={styles.principal}>
            <Head>
                <title>Inicio | move.it</title>
            </Head>
            <LateralBar />

            {!selectedHome ?
                <div className={styles.container}>
                    <header>
                        <h2 style={{ textAlign: 'left' }}>Leaderboard</h2>
                    </header>
                    <GridLeaderBoard />
                </div>
                :
                <div className={styles.container}>
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
            }

        </div>
    )
}