import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBar.module.css'

export default function ChallengeBar() {
    const contextData = useContext(ChallengeContext);
    console.log(contextData)
    return (
        <div className={styles.challengeBarContainer}>
            <span>Desafios completos</span>
            <span>00</span>
        </div>
    )
}