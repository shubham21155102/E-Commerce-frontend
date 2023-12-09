import Image from 'next/image'
import { Inter } from 'next/font/google'
// import LandingPage from "./comonents/LandingPage"
const inter = Inter({ subsets: ['latin'] })
import HomePage from "./comonents/HomePage"
export default function Home() {
  return (
   <>
   
    <HomePage/>
    
   </>
  )
}
