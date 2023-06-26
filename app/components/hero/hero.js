import Image from 'next/image'

import styles from  './hero.module.scss'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1>Discover Your Perfect Book Club: Explore, Join, and Connect!</h1>
            <form action="/" className={styles.search}>
                <input type="text" className={styles.search__input} placeholder="Search available clubs" />
                <button className={styles.search__button}>
                    <Image src={"/images/site/sprites/magnifying-glass.svg"} alt='search' className={styles.search__icon} width={25} height={25}/>
                </button>
            </form>
            <div className={styles.actions}>
                <button>Join Now</button>
            </div>
        </section>
    )
}