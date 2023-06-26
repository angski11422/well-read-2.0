// list of all clubs
// attached to clubs index

import styles from './all-clubs.module.scss';
import ClubsGrid from './clubs-grid'

export default function AllClubs(props) {
    const {bookclubs} = props;

    // console.log(bookclubs)
    
    return (
        <section className={styles.clubs}>
            <h1>All Clubs</h1>
            <ClubsGrid bookclubs={bookclubs}/>
        </section>
    )
}