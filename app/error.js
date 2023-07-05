'use client'

import Navbar from "./components/Navbar"
import styles from '@/app/styles/Error.module.css'

export default function Error({ error, reset }) {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h2>Something went wrong. Please try again later.</h2>
                <button className={styles.btn} onClick={() => reset()}>Try Again</button>
            </div>
        </>
    )
}