import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, setshowLevelUp } = useContext(ChallengeContext)

    function onClickClose() {
        setshowLevelUp(false)
    }
    return (
        <div className={styles.overLay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabens</strong>
                <p>Voce passou ao proximo nivel</p>
                <button type="button" onClick={onClickClose}>
                    <img src="/icons/close.svg" alt="level up" />
                </button>
            </div>
        </div>
    )
}