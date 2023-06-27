
import { Nunito } from 'next/font/google'

import './globals.scss'
import MainNav from './components/main-nav/main-nav'
// import { Providers } from './providers/providers'



const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Well Read',
  description: 'Find your next book club',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <Providers> */}
          <div>
            <MainNav/>
          </div>
          {children}
        {/* </Providers> */}
      </body>
    </html>
  )
}
