import Image from 'next/image'
import { Inter } from 'next/font/google'
// import LandingPage from "./comonents/LandingPage"
const inter = Inter({ subsets: ['latin'] })
import HomePage from "./comonents/HomePage"
import Navigation from './comonents/Navigation'
import Footer from './comonents/Footer'
export default function Home() {
  return (
   <>
    <Navigation/>
    <HomePage/>
    <Footer/>
   </>
  )
}
