import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
   
    <Image src={'https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/3/_/3_13.jpg'}height={4000} width={2000}  role='presentation' className='cursor-pointer' alt='' />,
    <Image src={'https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg'} width={2000} height={1000} role='presentation' className='cursor-pointer' alt='' />,
    <Image src={'https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg'} width={2000} height={1000} role='presentation' className='cursor-pointer' alt='' />,
    <Image src={'https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_8.jpg'} width={2000} height={1000} role='presentation' className='cursor-pointer' alt='' />,
    <Image src={'https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_4.jpg'} width={2000} height={1000} role='presentation' className='cursor-pointer' alt='' />,
];

const MainCarousel = () => (
    <AliceCarousel
        
        items={items}
        disableButtonsControls={true}
        autoPlay={true}
        autoPlayInterval={1000}
        infinite={true}
        // responsive={responsive}
       
    />
);
export default MainCarousel;