"use client";
// grid layout for all clubs
// attached to all clubs comp
import ClubMain from "./club-main";
import styles from "./clubs-grid.module.scss";

export default function ClubsGrid(props) {
  const { bookclubs } = props;

  const bookclublist = bookclubs.map((bookclub) => {
    return (
      <div key={bookclub.id} className={styles.card}>
        <ClubMain bookclub={bookclub} />
      </div>
    );
  });

  return <section className={styles.grid}>{bookclublist}</section>;
}
