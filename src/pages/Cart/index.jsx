import React, { useState, useEffect } from 'react';
import Navigation from '../comonents/Navigation';
import Footer from '../comonents/Footer';
import Image from 'next/image';

const Cart = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
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
          calculatedTotal += item.price * item.quantity;
        });
        setTotal(calculatedTotal);
      }
    } catch (error) {
      console.log(error);
    }
  }, [count]);
  return (
    <>
      <Navigation item={count} />
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
                            <Image className="h-48 w-full object-cover" src={item.imageUrl} alt="" height={100} width={100} />
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                              {item.brand}
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                              {item.title}
                            </p>
                          </div>
                          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                              <div className="sm:col-span-1 flex-row">
                                <p className='font-semibold text-black'>{item.selling_price}</p>
                                <p className='line-through opacity-50 text-black'>{item.price}</p>
                                <p className='text-green-600 font-semibold'>{item.disscount}</p>
                              </div>
                              <div className="sm:col-span-1">
                               
                              
                              </div>
                              <div className="sm:col-span-1">


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
