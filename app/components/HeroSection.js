import styles from '@/app/styles/HeroSection.module.css'
import Image from 'next/image'
import Link from 'next/link';

export default async function HeroSection() {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const request = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`);
    const data = await request.json();
    return (
        <section id={styles.heroSection}>
            <Image src="/bitcoin.webp" alt='...' width={72} height={72} id={styles.bitcoin} />
            <p className={styles.heading} id={styles.top}>TRACK AND TRADE</p>
            <h1 className={`${styles.heading} ${styles.special}`}>CRYPTO CURRENCIES</h1>
            <Image src="/ethereum.webp" alt='...' width={72} height={72} id={styles.ethereum} />
            <div className={styles.cryptoContainer}>
                {data.map((ele, i) => {
                    return <div className={styles.crypto} key={i}>
                        <Image src={ele.image} alt='...' width={100} height={100} className={styles.image} />
                        <p className={styles.name}>{ele.name} <span className={styles.change} style={{ color: `${ele.price_change_percentage_24h > 0 ? 'green' : 'red'}` }}>{ele.price_change_percentage_24h.toFixed(2)}%</span></p>
                        <p className={styles.price}>$ {numberWithCommas(ele.current_price)}</p>
                    </div>
                })}
            </div>
            <Link className={styles.btn} href={'#market'}>See Prices</Link>
        </section >
    )
}