

import styles from './page.module.scss'
import Hero from './components/hero/hero'
import SideNav from './components/side-nav/side-nav'
import FeaturedClubs from './components/featured-clubs/featured-clubs'

export default async function Home() {
  
  
  return (
    <main className={styles.grid}>
      <Hero />
      <SideNav />
      <FeaturedClubs />
    </main>
  )
}
