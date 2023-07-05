import styles from '@/app/styles/Choose.module.css'
import Image from 'next/image'

export default function Choose() {
    return (
        <section className={styles.choose} id='chooseus'>
            <p className={styles.heading}>WHY <span className={styles.special}>CHOOSE US</span></p>
            <div className={styles.container}>
                <div className={styles.secContainer}>
                    <div className={styles.quality}>
                        <i className={`bx bxs-wallet ${styles.image}`}></i>
                        <div className={styles.textContainer}>
                            <p className={styles.title}>CONNECT YOUR WALLET</p>
                            <p className={styles.para}>Use trust wallet, metadesk or to connect to the app.</p>
                        </div>
                    </div>
                    <div className={styles.quality}>
                        <i className={`bx bxs-select-multiple ${styles.image}`}></i>
                        <div className={styles.textContainer}>
                            <p className={styles.title}>SELECT YOUR QUANTITY</p>
                            <p className={styles.para}>Upload your crypto and set a title, description and price.</p>
                        </div>
                    </div>
                    <div className={styles.quality}>
                        <i className={`bx bxs-zap ${styles.image}`}></i>
                        <div className={styles.textContainer}>
                            <p className={styles.title}>CONFIRM TRANSACTION</p>
                            <p className={styles.para}>Earn by selling your crypto on our marketplace.</p>
                        </div>
                    </div>
                </div>
                <div id="middle">
                    <Image src='/main.webp' alt='...' width={330} height={500} />
                </div>
                <div className={styles.secContainer}>
                    <div className={styles.quality}>
                        <i className={`bx bx-podcast ${styles.image}`}></i>
                        <div className={styles.textContainer}>
                            <p className={styles.title}>RECEIVE YOUR NFTS</p>
                            <p className={styles.para}>Invest all your crypto at one place.</p>
                        </div>
                    </div>
                    <div className={styles.quality}>
                        <i className={`bx bxs-store-alt ${styles.image}`}></i>
                        <div className={styles.textContainer}>
                            <p className={styles.title}>TAKE A MARKET TO SELL</p>
                            <p className={styles.para}>Discover the right crypto to buy or sell.</p>
                        </div>
                    </div>
                    <div className={styles.quality}>
                        <i className={`bx bxs-package ${styles.image}`}></i>
                        <div className={styles.textContainer}>
                            <p className={styles.title}>DRIVE YOUR COLLECTION</p>
                            <p className={styles.para}>We make it easy to discover, invest and manage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
