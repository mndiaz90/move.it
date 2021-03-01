import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengeContext'
import styles from '../../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience } = useContext(ChallengeContext)
    return (
        <header className={styles.experienceBar}>
            <span>0px</span>
            <div>
                <div style={{ width: `${currentExperience}%` }}></div>
                <span className={styles.currentExperience} style={{ left: `${currentExperience}%` }}>{currentExperience}px</span>
            </div>
            <span>600px</span>

        </header>
    )
}