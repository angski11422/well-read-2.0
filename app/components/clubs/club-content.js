// book club details
// attached to slug page
import {Fragment} from 'react';
import ClubMain from './club-main';
import styles from './club-content.module.scss';


export default function ClubContent(props) {
    
    const { bookclub } = props;

    return (
        <Fragment>
            <article className={styles.content}>
                <ClubMain bookclub={bookclub}/>
                <h4>{bookclub.location}</h4>
                <h5>{bookclub.genre}</h5>
                <p>{bookclub.description}</p>
                <p>{bookclub.meeting_day}</p>
                <p>{bookclub.book_id}</p>
            </article>
            <div className={styles.button}>
                <button>Join Book Club</button>
            </div>
        </Fragment>
    )
}

