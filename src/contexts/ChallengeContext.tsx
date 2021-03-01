
import { createContext, ReactNode, useEffect, useState } from 'react';
import Challenges from '../challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from '../components/LevelUpModal';

interface ChallengeProviderProps {
    children: ReactNode,
    level: number
}

interface ChallengeContextData {
    level: number;
    levelUp: () => void;
    currentExperience: number,
    challengeCompleted: number;
    startNewChallenge: () => void;
    newChallenge: ChallengeType;
    resetChallenge: () => void;
    setshowLevelUp: (boolean) => void;
}

interface ChallengeType {
    type: 'body' | 'eyes',
    description: string,
    amount: number
}


export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengeProvider({ children, ...rest }: ChallengeProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 0);
    const [currentExperience, setCurrentExperience] = useState(20);
    const [challengeCompleted, setChallengeCompleted] = useState(0);
    const [newChallenge, setnewChallenge] = useState(null);
    const [showLevelUp, setshowLevelUp] = useState(false);


    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level))
    }, [level])

    function startNewChallenge() {
        const randomNumber = Math.floor(Math.random() * Challenges.length);
        const challenge = Challenges[randomNumber];
        setnewChallenge(challenge);

        new Audio('/notification.mp3').play()

        if (Notification.permission === 'granted') {
            new Notification('Novo ;-)')
        }
    }

    function levelUp() {
        setLevel(level + 1);
        setshowLevelUp(true);
    }

    function resetChallenge() {
        setnewChallenge(null);
    }

    return (
        <ChallengeContext.Provider
            value={{
                level,
                levelUp,
                currentExperience,
                challengeCompleted,
                startNewChallenge,
                newChallenge,
                resetChallenge,
                setshowLevelUp
            }}>
            {children}

            {showLevelUp && <LevelUpModal />}
        </ChallengeContext.Provider>
    )
}
