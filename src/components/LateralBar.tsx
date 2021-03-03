import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/LateralBar.module.css'

export function LateralBar() {
    const { selectedHome, setSelectHome, selectedAward, setSelectAward } = useContext(ChallengeContext)

    function selectIconHome() {
        !selectedHome && setSelectHome(true);
        setSelectAward(false)
    }

    function selectIconAwards() {
        !selectedAward && setSelectAward(true);
        setSelectHome(false)
    }
    return (
        <div className={styles.container}>
            <div className={styles.imgLogo}>
                <img src="/favicon.png" alt="logo" />
            </div>
            <div className={styles.iconHome}>
                <i className={selectedHome ? "fa fa-home " + styles.selected : "fa fa-home"}
                    onClick={selectIconHome}></i>
                <i className={selectedAward ? "fa fa-firefox " + styles.selected : "fa fa-firefox"}
                    onClick={selectIconAwards}></i>
            </div>

        </div>
    )
}