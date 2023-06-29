import Link from 'next/link';


import Logo from './logo';
import styles from './main-nav.module.scss';
import UserNav from './user-nav';



export default function MainNav() {
    
    return (
        <header className={styles.header}>
            <div className={styles.mainnav}>
                <Link href='/' className={styles.mainnav__logo}>
                    <Logo />
                </Link>
                <Link href='/about' className={styles.mainnav__button}>
                    <span>About</span>
                </Link>
                <Link href='/faq' className={styles.mainnav__button} >
                    <span>FAQ</span>
                </Link>
            </div>
            <div className={styles.usernav}>
                <div className={styles.usernav__iconbox}>
                    <UserNav />
                </div>  
            </div>
        </header> 
    )
}