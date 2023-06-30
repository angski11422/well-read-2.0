
import ClubMain from './club-main';
import styles from './club-content.module.scss';


export default function ClubContent(props) {
    
    const { bookclub } = props;

    return (
        <section className={styles.club}>
            <article className={styles.club__content}>
                <ClubMain bookclub={bookclub}/>
                <h4>{bookclub.location}</h4>
                <h5>{bookclub.genre}</h5>
                <p>{bookclub.description}</p>
                <p>{bookclub.meeting_day}</p>
                <p>{bookclub.book_id}</p>
            </article>
            <div className={styles.actions}>
                <button>Join Book Club</button>
            </div>
        </section>
    )
}

