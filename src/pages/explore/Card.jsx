import React, { useEffect } from 'react'
import Classes from "./Card.module.css"
import Image from "next/image"
import Navigation from '../comonents/Navigation'
import Footer from '../comonents/Footer'
import { useState } from 'react'
import crypto from "crypto"
import Gouns from "../comonents/Data/Gouns.json"
import Mens_Shirts from "../comonents/Data/Mens_Shirts.json"
import Mens_Shoes from "../comonents/Data/Mens_Shoe.json"
import Kurta from "../comonents/Data/Kurta.json"
const Card = () => {
  var data = [...Gouns, ...Mens_Shirts, ...Mens_Shoes, ...Kurta]
  const [count, setCount] = useState(0);
  
  const addToCart=(item)=>{
    var id=crypto.randomBytes(16).toString("hex")
    item.id=id;
    try{  
         try{
          var cart=JSON.parse(localStorage.getItem("cart"))
          cart.push(item)
          localStorage.setItem("cart",JSON.stringify(cart))
          setCount(cart.length)
          localStorage.setItem("count",cart.length)
         }catch(err){
          var cart=[]
          cart.push(item)
          localStorage.setItem("cart",JSON.stringify(cart))
          setCount(cart.length)
          localStorage.setItem("count",cart.length)
          }
         
          // alert('Item added to cart')
        }catch(err){
          // console.log(err)
        }
  }
 

  return (
    <>
      <Navigation item={count}/>
      <div className="bg-white">
        <div>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

                {data.map((item) => {
                  return (
                    <div className="lg:col-span-1">
                      <div className={Classes.productCard}>
                        <div className='h-[20rem]'>
                          <Image className='h-full w-full object-cover object-left-top' src={item.imageUrl} alt={item.brand} height={1000} width={1000} />
                        </div>
                        <div className={Classes.productInfo}>
                          <div>
                            <p className='font-bold opacity-60 '>{item.brand}</p>
                            <p >{item.title}</p>
                          </div>
                          <div className='flex items-center space-x-2'>
                            <p className='font-semibold'>{item.selling_price}</p>
                            <p className='line-through opacity-50'>{item.price}</p>
                            <p className='text-green-600 font-semibold'>{item.disscount}</p>
                            


                          </div>
                          {/* <button className='bg-black text-white px-4 py-1 rounded-md' onClick={console.log(item)}>Add to cart</button> */}
                          <button className='bg-black text-white px-4 py-1 rounded-md' onClick={()=>addToCart(item)}>
                            Add to cart
                          </button>

                        </div>

                      </div>
                    </div>
                  )
                })}

              </div>
            </section>
          </main>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Card