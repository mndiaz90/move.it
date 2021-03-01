import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";

interface CountDownContextData {
    minutes: number;
    seconds: number;
    active: boolean;
    resetCountDown: () => void;
    startCountDown: () => void;
}

interface CountDownChildren {
    children: ReactNode
}


let countDownTimeOut: NodeJS.Timeout

export const CountDownContext = createContext({} as CountDownContextData);

export function CountDownContextProvider({ children }: CountDownChildren) {

    const { startNewChallenge } = useContext(ChallengeContext);

    const [time, setTime] = useState(0.05 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown() {
        active ? setActive(false) : setActive(true)
    }

    function resetCountDown() {
        clearTimeout(countDownTimeOut);
        setActive(false);
        setTime(0.05 * 60);
    }

    useEffect(() => {
        if (active && time > 0) {
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (active && time === 0) {
            startNewChallenge()
        }
    }, [active, time])
    return (
        <CountDownContext.Provider
            value={{
                minutes,
                active,
                seconds,
                resetCountDown,
                startCountDown
            }}>
            {children}
        </CountDownContext.Provider>
    )
}