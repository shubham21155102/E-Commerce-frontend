import React from 'react'
import Image from 'next/image'
const HomeSectionCard = ({product}) => {
  return (
  
        <div className='cursor-pointer flex flex-col items-center  bg-white  rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 '>
            <div className='h-[13rem] w-[10rem'>
                <Image src={product.imageUrl} alt='' className='object-cover object-top w-full h-full ' height={1000} width={1000}/>
                </div>
                <div className='p-4'>
                    <h1 className='text-lg font-medium text-gray-900'>{product.brand}</h1>
                    <p className='text-sm text-gray-500'>{product.title}</p>
                    </div>
        </div>
   
  )
}

export default HomeSectionCard