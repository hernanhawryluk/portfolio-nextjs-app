import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hernan Hawryluk | Portfolio',
  description: 'Hernan Hawryluk is a Front-end Developer skilled in React and React Native, dedicated to delivering high-quality digital experiences. Commited to continuous learning and growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
