import Link from "next/link";
import { useRouter } from 'next/router'
import styles from '../styles/Login.module.css'

export default function Login() {
    const router = useRouter()

    function Iniciar() {
        router.push('/')
    }
    return (
        <div className={styles.containerLogin}>

            <img src="logo-full.svg" alt="Logo" />

            <h1>Bem-vindo</h1>
            <div className={styles.divGithub}>
                <i className="fa fa-github" style={{ fontSize: '3rem', marginRight: '10px' }}></i>
                <span>Faca login usando a sua conta de github</span>
            </div>
            <div className={styles.divGithub}>
                <input type="text" placeholder="Digite seu username" />
                {/* <Link href="/"> */}
                <button onClick={Iniciar}>
                    <i className="fa fa-arrow-right" style={{ fontSize: '20px', color: 'white' }}></i>
                </button>
                {/* </Link> */}

            </div>
        </div>
    )
}