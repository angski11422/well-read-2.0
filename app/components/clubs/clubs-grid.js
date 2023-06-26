
// grid layout for all clubs
// attached to all clubs comp
import ClubMain from './club-main';
import styles from './clubs-grid.module.scss'


export default function ClubsGrid() {
   
    

    return (
        <ul className={styles.grid}>
            <h1>List of All Clubs</h1>
           <ClubMain />
        </ul>
    )
}