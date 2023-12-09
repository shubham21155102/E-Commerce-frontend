import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { Button } from '@mui/material';
// import { mens_kurta } from '../../../comonents/Data/mens_kurta';
const HomeSectionCarousel = ({ data, category }) => {
    // console.log(data + "data obtained")
    const [activeIndex, setActiveIndex] = useState(0);
    const [left, setLeft] = React.useState(false);
    const [right, setRight] = React.useState(true);
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };
    const slidePrev = () => {
        if (activeIndex > 0) {
            setLeft(true)
            setActiveIndex(activeIndex - 1)
        }
        else {
            console.log("no more slides")
            setLeft(false)
        }
    }
    const slideNext = () => {
        if (activeIndex < 4) {
            setRight(true)
            setActiveIndex(activeIndex + 1)
        }
        else {
            console.log("no more slides")
            setRight(false)
        }
    }


    const syncActiveIndex = ({ item }) => {
        // console.log(item + " syncActiveIndex obtained")
        // console.log(activeIndex + " activeIndex obtained")
        setActiveIndex(item)
    }
    useEffect(() => {
        if (activeIndex === 0) {
            setLeft(false)
        }
        else {
            setLeft(true)
        }
        if (activeIndex === 4) {
            setRight(false)
        }
        else {
            setRight(true)
        }
    }
        , [activeIndex])

    const items = data.map((item) => <HomeSectionCard product={item} />)
    return (
        <>
            <div className='relative px-4 lg:px-8 border border-white'>
                <h1 className='text-2xl font-bold text-center'>{category}</h1>
                <div className='relative p-5'>
                    <AliceCarousel

                        items={items}
                        disableButtonsControls
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={responsive}
                        disableDotsControls
                        mouseTracking
                        // touchMoveDefaultEvents
                        // onInitialized={console.log('initialized index:' + activeIndex)}
                        onSlideChanged={syncActiveIndex}
                        activeIndex={activeIndex}

                    />
                    {left && <Button className='z-50 bg-white' variant='contained' sx={{ position: 'absolute', top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white" }}
                        onClick={slidePrev}>
                        <ArrowBackIosIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>}
                    {right && <Button onClick={slideNext}
                        className='z-50 bg-white' variant='contained'
                        sx={{ position: 'absolute', top: "8rem", right: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white" }}
                        aria-label='next'
                    >
                        <ArrowForwardIosIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>}
                </div>
            </div>
        </>
    )
}

export default HomeSectionCarousel