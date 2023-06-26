// import Link from 'next/link';
import styles from './featured-clubs.module.scss';
import ClubsGrid from '../clubs/clubs-grid';
import getBookclubs from '../../get-requests/get-bookclubs';

export default async function FeaturedClubs() {

    const bookclubs = await getBookclubs()
    
    return (
        <section className={styles.featured}>
            <h1>Featured Clubs</h1>
            <ClubsGrid bookclubs={bookclubs}/> 
        </section>
    )
}