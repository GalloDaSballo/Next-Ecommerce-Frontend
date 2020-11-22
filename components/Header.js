import { useContext } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import AuthContext from "../context/AuthContext"


import styles from '../styles/Header.module.css'

export default () => {

    const router = useRouter()
    const isHome = router.pathname === "/"

    const { user } = useContext(AuthContext);

    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }

    

    return (
        <div className={styles.nav}>
            {!isHome && 
                <div className={styles.back}>
                    <a href="#" onClick={goBack}>{"<"} Back </a>
                </div>
            }
            <div className={styles.title}>
                <Link href="/">
                    <a>
                        <h1>
                            FullStack E-Commerce with NextJS, Magic, Strapi and Stripe
                        </h1>
                    </a>
                </Link>
            </div>

            <div className={styles.auth}>
                {user ? (
                    <Link href="/account">
                        <a>
                            <img src="/user_avatar.png" alt={user.email} />
                        </a>
                    </Link>
                ) : (
                    <Link href="/login">
                        <a>Log In</a>
                    </Link>
                )}
            </div>

        </div>
    )
}