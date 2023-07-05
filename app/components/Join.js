import styles from '@/app/styles/Join.module.css'
import Image from 'next/image'

export default function Join() {
    return (
        <section className={styles.container} id='join'>
            <Image src="/bitcoin.webp" alt='...' width={72} height={72} id={styles.bitcoin} />
            <p className={styles.heading}>JOIN US VIA</p>
            <p className={`${styles.heading} ${styles.special}`}>DISCORD</p>
            <p className={styles.para}>Invest and manage all your crypto at one place</p>
            <button className={styles.btn}>Join Via Discord</button>
            <Image src="/ethereum.webp" alt='...' width={72} height={72} id={styles.ethereum} />
        </section>
    )
}
