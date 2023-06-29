'use client';
// grid layout for all clubs
// attached to all clubs comp
import ClubMain from './club-main';
import styles from './clubs-grid.module.scss'


export default function ClubsGrid(props) {
   
    const { bookclubs } = props;

    const bookclublist = bookclubs.map(bookclub => {
        return (
            <div className={styles.card}>
                <ClubMain key={bookclub.id} bookclub={bookclub}/>
            </div>
        )
    })

    return (
        <section className={styles.grid}>
            {bookclublist}
        </section>
    )
}