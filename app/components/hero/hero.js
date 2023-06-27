import Image from 'next/image'
import Link from 'next/link'

import styles from  './hero.module.scss'
import { IoSearchOutline } from 'react-icons/io5'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1>Discover Your Perfect Book Club: Explore, Join, and Connect!</h1>
            <form action="/" className={styles.search}>
                <input type="text" className={styles.search__input} placeholder="Search available clubs" />
                <button className={styles.search__button}>
                    <IoSearchOutline className={styles.search__icon} />
                </button>
            </form>
            <div className={styles.actions}>
                <Link href='/bookclubs'>
                    <button>Join Now</button>
                </Link>
            </div>
        </section>
    )
}