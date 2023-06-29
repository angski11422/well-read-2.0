// import Link from 'next/link';
import styles from './featured-clubs.module.scss';
import ClubsGrid from '../clubs/clubs-grid';
import getBookclubs from '../../actions/get-bookclubs';

export default async function FeaturedClubs() {

    const bookclubs = await getBookclubs()
    
    return (
        <section className={styles.featured}>
            <h1>Featured Clubs</h1>
            <div className={styles.grid}>
                <ClubsGrid bookclubs={bookclubs}/> 
            </div>
        </section>
    )
}