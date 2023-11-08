import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';

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
      <body 
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px]`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        
        <Header />
        {children}
      </body>
    </html>
  )
}
