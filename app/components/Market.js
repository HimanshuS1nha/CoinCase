"use client";

import React, { useState, useEffect } from 'react'
import styles from '@/app/styles/Market.module.css'
import Image from 'next/image';

export default function Market() {
    const [details, setdetails] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchDetails = async () => {
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`);
            const parsedData = await data.json();
            setdetails(parsedData);
        }
        fetchDetails();
    }, [page])

    const pageChange = (newPage) => {
        setPage(newPage);
        window.scrollTo({
            top: window.scrollY - 800,
            behavior: "smooth",
        });
    }

    return (
        <section className={styles.market} id="market">
            <p id={styles.secHeading}>Market Update</p>
            <table>
                <thead style={{ backgroundImage: 'linear-gradient(25deg, #2600fc, #ff00ea)' }}>
                    <tr>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((ele, i) => {
                        return <tr key={i}>
                            <td className={styles.title}><Image src={ele.image} alt='...' width={50} height={30} />{ele.name}</td>
                            <td>${ele.current_price}</td>
                            <td style={{ backgroundColor: `${ele.price_change_percentage_24h > 0 ? 'green' : 'red'}` }}>{ele.price_change_percentage_24h.toFixed(2)}%</td>
                            <td>${ele.market_cap}</td>
                        </tr>

                    })}
                </tbody>
            </table>
            <div className={styles.dots}>
                <span className={styles.dot} onClick={() => { pageChange(1) }}>1</span>
                <span className={styles.dot} onClick={() => { pageChange(2) }}>2</span>
                <span className={styles.dot} onClick={() => { pageChange(3) }}>3</span>
                <span className={styles.dot} onClick={() => { pageChange(4) }}>4</span>
                <span className={styles.dot} onClick={() => { pageChange(5) }}>5</span>
            </div>
        </section>
    )
}

