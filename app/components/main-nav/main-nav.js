import Link from 'next/link';


import Logo from './logo';
import styles from './main-nav.module.scss';
import UserNav from './user-nav';


export default function MainNav() {
    
    return (
        <header className={styles.header}>
            <Link href='/' >
                <Logo />
            </Link>
            {/* about us, faq */}
            <div className={styles.usernav}>
                <div className={styles.usernav__iconbox}>
                    <UserNav />
                </div>  
            </div>
        </header> 
    )
}