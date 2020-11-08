import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default () => (
    <nav>
        <div>

            <div className={styles.title}>
                <h1>
                    <Link href="/">
                        <a>The E-Commerce</a>
                    </Link>
                </h1>
            </div>

        </div>
    </nav>
)