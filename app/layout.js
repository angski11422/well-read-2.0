
import { Nunito } from 'next/font/google'

import './globals.scss'
import MainNav from './components/main-nav/main-nav'


const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Well Read',
  description: 'Find your next book club',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div>
          <MainNav/>
        </div>
        {children}
      </body>
    </html>
  )
}
