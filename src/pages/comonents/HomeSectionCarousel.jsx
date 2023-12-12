"use client"
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import dynamic from 'next/dynamic'
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { Button } from '@mui/material';
const HomeSectionCarousel = ({ data, category }) => {
    // console.log(data + "data obtained")
    const [activeIndex, setActiveIndex] = useState(0);
    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => setActiveIndex(item);


    const responsive = {
        0: {
            items: 2,
            itemsFit: "contain",
        },
        568: {
            items: 3,
            itemsFit: "contain",
        },
        1024: {
            items: 5.5,
            itemsFit: "contain",
        },
    };
    const items = data.map((item) => (
        <div className="">
            {" "}
            <HomeSectionCard product={item} />
        </div>
    ));

    return (
        <div className="relative px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-2xl font-extrabold text-gray-900 py-5">{category}</h2>
          <div className="relative border p-5">
            <AliceCarousel
              disableButtonsControls
              disableDotsControls
              mouseTracking
              items={items}
              activeIndex={activeIndex}
              responsive={responsive}
              onSlideChanged={syncActiveIndex}
              animationType="fadeout"
              animationDuration={2000}
            />
            {activeIndex !== items.length - 5 && (
              <Button
                onClick={slideNext}
                variant="contained"
                
                sx={{
                  position: "absolute",
                  top: "8rem",
                  right: "0rem",
                  transform: "translateX(50%) rotate(90deg)",
                }}
                
                aria-label="next"
              >
                <ArrowForwardIosIcon
                  className=""
                  sx={{ transform: "rotate(-90deg)" }}
                />
              </Button>
            )}
    
            {activeIndex !== 0 && (
              <Button
                onClick={slidePrev}
                variant="contained"
                
                
                sx={{
                  position: "absolute",
                  top: "8rem",
                  left: "0rem",
                  transform: "translateX(-50%)  rotate(90deg)",
                }}
                aria-label="next"
              >
                <ArrowForwardIosIcon
                  className=""
                  sx={{ transform: " rotate(90deg)" }}
                />
              </Button>
            )}
          </div>
        </div>
      );
}
const HomeSectionCarousele = dynamic(() => Promise.resolve(HomeSectionCarousel), {
    ssr: false,
})
export default HomeSectionCarousele