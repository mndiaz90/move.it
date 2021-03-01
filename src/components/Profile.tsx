import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export default function Profile() {
    const { level
    } = useContext(ChallengeContext)
    return (
        <div className={styles.containerProfile} >
            <img className={styles.imgProfile} src="https://github.com/diego3g.png" alt="Diego" />
            <div>
                <span>Diego Fernandes</span>
                <p>
                    <img className={styles.imgLevel} src="icons/level.svg" alt="level" />
                Level {level}
                </p>
            </div>

        </div>
    )
}