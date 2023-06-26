// list of all clubs
// attached to clubs index

import styles from './all-clubs.module.scss';
import ClubsGrid from './clubs-grid'

export default function AllClubs() {
    return (
        <section className={styles.clubs}>
            <h1>All Clubs</h1>
            <ClubsGrid  />
        </section>
    )
}