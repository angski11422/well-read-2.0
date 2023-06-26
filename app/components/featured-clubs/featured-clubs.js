// import Link from 'next/link';
import styles from './featured-clubs.module.scss';
// import ClubsGrid from '../clubs/clubs-grid';

export default function FeaturedClubs(props) {
    
    return (
        <section className={styles.featured}>
            <h1>Featured Clubs</h1>
            {/* <Link href='/clubs'>
                <button>View All Clubs</button> 
            </Link>
            <ClubsGrid clubs={props.clubs}/> */}
        </section>
    )
}