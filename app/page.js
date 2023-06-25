
import prisma from '../lib/prisma'
import styles from './page.module.scss'

export default async function Home() {
  
  
  return (
    <main className={styles.container}>
      <h1>Hello World</h1>
    </main>
  )
}
