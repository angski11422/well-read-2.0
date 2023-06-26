'use client';
// grid layout for all clubs
// attached to all clubs comp
import ClubMain from './club-main';
import styles from './clubs-grid.module.scss'


export default function ClubsGrid(props) {
   
    const { bookclubs } = props;

    const bookclublist = bookclubs.map(bookclub => {
        return <ClubMain key={bookclub.id} bookclub={bookclub}/>
    })

    return (
        <ul className={styles.grid}>
            <h1>List of Clubs</h1>
           {bookclublist}
        </ul>
    )
}