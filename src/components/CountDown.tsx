import { useContext } from 'react';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

export default function CountDown() {
    const { active,
        seconds,
        minutes,
        startCountDown,
        resetCountDown,
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            { !active ?
                <button
                    onClick={startCountDown}
                    className={styles.buttonIniciar}>
                    Iniciar countdown
                    </button>
                : (
                    <button onClick={resetCountDown} className={styles.buttonIniciar}>Stop countdown
                    </button>)
            }
        </div>

    )
}