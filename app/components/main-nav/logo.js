import Image from 'next/image';

import styles from './logo.module.scss';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Image src='/images/site/logo.png' alt='well read logo' width={185} height={155}/>
        </div>
    )
}