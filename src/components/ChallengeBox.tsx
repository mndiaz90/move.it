import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import { CountDownContext } from '../contexts/CountDownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox() {
    const { newChallenge, levelUp, resetChallenge } = useContext(ChallengeContext)
    const { resetCountDown } = useContext(CountDownContext);

    function onClickCompleted() {
        levelUp();
        resetCountDown();
        resetChallenge();
    }

    function onClickFailed() {
        resetCountDown();
        resetChallenge();
    }
    return (
        <div className={styles.challengeBoxContainer}>
            {
                !newChallenge ? (
                    <div className={styles.challengeNotActive}>
                        <strong>Inicie o ciclo para receber desafios</strong>
                        <img src="icons/level-up.svg" alt="level up" />
                        <p>Avance de level completando <br />os desafios</p>
                    </div>
                ) : (

                        <div className={styles.challengeActive}>
                            <header>Ganhe {newChallenge.amount}px</header>
                            <main>
                                <img src={`icons/${newChallenge.type}.svg`} alt="Body" />
                                <strong>{newChallenge.description}</strong>
                                <p>Avance de level completando <br />os desafios</p>
                            </main>
                            <footer>
                                <button onClick={onClickFailed} className={styles.challengeFailedButton}>Falhei</button>
                                <button onClick={onClickCompleted} className={styles.challengeSucceededButton}>Completei</button>
                            </footer>

                        </div>
                    )
            }
        </div>
    )
}