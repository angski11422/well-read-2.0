// list of all clubs
// attached to clubs index

import styles from "./all-clubs.module.scss";
import ClubsGrid from "./clubs-grid";

export default function AllClubs(props) {
  const { bookclubs } = props;

  return (
    <div className={styles.all}>
      <h1 className={styles.header}>All Bookclubs</h1>
      <ClubsGrid bookclubs={bookclubs} />
    </div>
  );
}
