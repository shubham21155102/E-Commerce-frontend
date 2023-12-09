import React from 'react'
import Navigation from "../Customer/Components/Navigation"
import MainCarousel from "../Customer/Components/HomeCarousel/MainCarousel"
// import HomeSectionCard from "../Customer/Components/HomeSectionCard/HomeSectionCard"
import HomeSectionCarousel from "../Customer/Components/HomeCarousel/HomeSectionCarousel"
import mens_kurta from './Data/mens_kurta'
import mensShoesPage1 from "./Data/Mens_Shoe"
import Mens_Jeans from "./Data/Mens_Jeans"
import Mens_Shirts from "./Data/Mens_Shirts"
import Gouns from "./Data/Gouns.json"
import WomenKurta from "./Data/WomenKurta"
import Footer from "./Footer"
const HomePage = () => {
  return (
    <>
      <Navigation />
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center'>
        <HomeSectionCarousel data={mens_kurta} category={"Men's Kurta"} />
        <HomeSectionCarousel data={mensShoesPage1} category={"Men's Shoe"} />
        <HomeSectionCarousel data={Mens_Jeans} category={"Men's Jeans"} />
        <HomeSectionCarousel data={Mens_Shirts} category={"Men's Shirts"} />
        <HomeSectionCarousel data={Mens_Shirts} category={"Men's Shirts"} />
        <HomeSectionCarousel data={Mens_Shirts} category={"Men's Shirts"} />
        <HomeSectionCarousel data={Mens_Shirts} category={"Men's Shirts"} />
        <HomeSectionCarousel data={Gouns} category={"Gouns"} />
        <HomeSectionCarousel data={WomenKurta} category={"Womens' Kurta"} />



      </div>
      <Footer />
    </>
  )
}

export default HomePage