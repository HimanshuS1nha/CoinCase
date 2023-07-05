import '@/app/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CoinCase',
  description: 'Coincase crypto search is the place where you can watch and buy your favourite cryptocurrencies easily without any hassel. The withdrawal is very simple too. We provide a wide range of facilities to facilitate your experience.',
  keywords: ['coincase, coincase vercel, coincase crypto search, coincase crypto search vercel, cryptocurrency,crypto data']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
