// book club name and headline
// attached to content comp
import Image from 'next/image';

import styles from './club-main.module.scss';


export default function ClubMain(props) {

    const { bookclub } = props;
    
    return (
        <section className={styles.header}>
            <h2>{bookclub.name}</h2>
            <div className={styles.image}>
                {!bookclub.image ? 
                <Image src='/../public/images/site/cover_not_found.jpg' alt='cover not found' width={200} height={300} />:
                <Image src={bookclub.image} alt={bookclub.name} width={200} height={300} />}
            </div>
        </section>
    )
}