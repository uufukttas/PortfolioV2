import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import HeadTag from '@/components/HeadTag'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeadTag />
      <div className="main flex flex-row items-center h-screen">
        <Navbar />
        <Main />
      </div>
    </>
  )
}
