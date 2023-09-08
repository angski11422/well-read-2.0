// import Link from 'next/link';
import styles from "./featured-clubs.module.scss";

export default async function FeaturedClubs() {
  return (
    <div className={styles.featured}>
      <h1>Featured Bookclubs</h1>
      <div className={styles.grid}></div>
    </div>
  );
}
