import React, { useState, useEffect } from 'react';
import Navigation from '../comonents/Navigation';
import Footer from '../comonents/Footer';
import Image from 'next/image';

const Cart = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  // const [username, setUsername] = useState(localStorage.getItem('username'));
  useEffect(() => {
    const user = localStorage.getItem('username');
    try {
      const storedData = JSON.parse(localStorage.getItem('cart'));
      if (storedData) {
        setData(storedData);
        setCount(storedData.length);
        localStorage.setItem('count', storedData.length);
        storedData.forEach((item) => {
          console.log(item);
        });
        let calculatedTotal = 0;
        storedData.forEach((item) => {
          const price = item.selling_price || item.SellingPrice;
          const priceInt = parseInt(price.replace(/\D/g, ''));

          calculatedTotal += priceInt;
        });
        setTotal(calculatedTotal);
      }
    } catch (error) {
      console.log(error);
    }
    const getCart=async ()=>{
      const user=localStorage.getItem('username');

      try {
        const res = await fetch(`/api/getcart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username:user
          })
        });
        
        if (res.status === 200) {
          const data = await res.json();
          // console.log(data)
          // console.log(data.message);
          const x=JSON.parse(data.message);
          console.log(x);
          localStorage.setItem("cart", JSON.stringify(x));
        } else {
          console.log("Error fetching data:", res.statusText);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getCart();
    
  }, [count]);
  const remoeFromCartButton=async (id)=>{
    const storedData = JSON.parse(localStorage.getItem('cart'));
    const updatedData=storedData.filter((item)=>{
      return item.id!==id
    })
    const res=await fetch(`/api/deletefromcart`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id,
        userId:localStorage.getItem('username')
      })
    })
    console.log(res.status);
    if(res.status==200){
      console.log("Deleted successfully")
      localStorage.setItem('cart',JSON.stringify(updatedData));
      setData(updatedData);
      setCount(updatedData.length);
    }
  }
  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow"><Navigation item={count}/></div>
    
      {
        data.length > 0 ? <div className="bg-white">
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
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                          <div className="px-4 py-5 sm:px-6">
                            <Image className="h-48 w-full object-cover" src={item.imageUrl || item.ImageUrl} alt="" height={100} width={100} />
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                              {item.brand || item.Brand}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                              {item.title || item.Title}
                            </p>
                          </div>
                          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                              <div className="sm:col-span-1 flex-row">
                                <p className='font-semibold text-black'>{item.selling_price || item.SellingPrice}</p>
                                <p className='line-through opacity-50 text-black'>{item.price || item.Price}</p>
                                <p className='text-green-600 font-semibold'>{item.disscount || item.Discount}</p>
                              </div>
                              <div className="sm:col-span-1">
                               
                              
                              </div>
                              <div className="sm:col-span-1">

                       <button onClick={()=>remoeFromCartButton(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Remove</button>
                              </div>

                            </dl>
                          </div>

                        </div>

                      </div>
                    );
                  })}
                </div>
              </section>
            </main>
          </div>
        </div> : <div className='flex justify-center items-center h-screen'>

          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Cart is empty</h1>
            <a href='/' className='mt-4 text-blue-500'>Go to home</a>
          </div>
        </div>
      }
      <div className='flex justify-center items-center' style={{ backgroundColor: "white", color: "black" }}>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold'>Total: {total}</h1>
          {/* <a href='/' className='mt-4 text-blue-500'>Go to home</a> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
