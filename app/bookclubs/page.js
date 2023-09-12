import AllClubs from "../components/clubs/all-clubs";
import getBookclubs from "../actions/get-bookclubs";
import CreateClubModal from "../components/modal/create-club";
import styles from "../page.module.scss";

export default async function AllClubsPage() {
  const bookclubs = await getBookclubs();

  return (
    <div className={styles.clubs}>
      <AllClubs bookclubs={bookclubs} />
      <h5>Don't see what you're looking for?</h5>
      <CreateClubModal />
    </div>
  );
}
