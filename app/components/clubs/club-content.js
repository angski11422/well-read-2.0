// book club details
// attached to slug page
import {Fragment} from 'react';
import ClubMain from './club-main';
import styles from './club-content.module.scss';


export default function ClubContent() {
    

    return (
        <Fragment>
            <article className={styles.content}>
                <ClubMain  />
                <h4>location</h4>
                <h5>genre</h5>
                <p>description</p>
                <p>meeting_day</p>
                <p>book_id</p>
            </article>
            <div className={styles.button}>
                <button>Join Book Club</button>
            </div>
        </Fragment>
    )
}

