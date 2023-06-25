import './globals.scss'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Well Read',
  description: 'Find your next book club',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
