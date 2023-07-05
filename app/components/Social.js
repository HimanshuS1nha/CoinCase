import styles from '@/app/styles/Social.module.css'
import Link from 'next/link'

export default function Social() {
    return (
        <section className={styles.social}>
            <div className={styles.socialIcons}>
                <i className={`bx bxl-twitter ${styles.footerLink}`}></i>
                <i className={`bx bxl-discord-alt ${styles.footerLink}`}></i>
                <i className={`bx bxl-facebook ${styles.footerLink}`}></i>
                <i className={`bx bxl-youtube ${styles.footerLink}`}></i>
            </div>

            <div className={styles.terms}>
                <Link href="#" className={styles.termsLink}>Privacy Policy</Link>
                <Link href="#" className={styles.termsLink}>Terms of Use</Link>
            </div>
        </section>
    )
}
