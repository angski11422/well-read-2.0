
import prisma from '../lib/prisma'
import styles from './page.module.scss'

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: {
      email: 'alice@prisma.io'
    }
  })
  return (
    <main className={styles.container}>
      <h1>Hello {user.name}</h1>
    </main>
  )
}
