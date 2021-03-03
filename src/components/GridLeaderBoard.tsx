import styles from '../styles/components/GridLeaderBoard.module.css'
import profiles from '../profiles.json'

interface ProfileType {
    number: number;
    name: string;
    challenge: number;
    exp: number;
}

export function GridLeaderBoard() {
    return (
        <div className={styles.container}>
            <div className={styles.titles}>
                <span>Posicao</span>
                <span>Nome</span>
                <span>Desafio</span>
                <span>Experiencia</span>

            </div>

            {profiles.map((profile: ProfileType) => {
                return <ul className={styles.gridLeader} key={profile.number}>
                    <li>{profile.number}</li>
                    <li className={styles.profileColumn}>
                        <img className={styles.imgProfile} src="https://github.com/diego3g.png" alt="Diego" />
                        <div>
                            <p>{profile.name}</p>
                            <p>
                                <img className={styles.imgLevel} src="icons/level.svg" alt="level" />
                                {profile.number}
                            </p>
                        </div>
                    </li>

                    <li>{profile.challenge}</li>
                    <li>{profile.exp}</li>
                </ul>
            })}
        </div>
    )
}