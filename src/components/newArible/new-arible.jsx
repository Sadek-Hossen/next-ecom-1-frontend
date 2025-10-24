
"use client"
import React, { useEffect, useState } from 'react'
import NewACard from './new-arible-card'
import { Button1 } from '../ui/button/button'
import { getProduct } from '@/lib/product-api'





function NewArible() {

  const [products, setProducts] = useState(null);
  useEffect(() => {
    
    const fatchProduct = async () => {
      try {
        const data = await getProduct();
        setProducts(data.products);

        console.log(data.products);
      } catch (error) {
        console.error("product fetch failed", error);

      }
    }
    fatchProduct(); 
  }, [])


  
  return (
    <div className='w-[90%] py-10 mx-auto'>
      <h1 className='text-2xl font-semibold font-serif mb-12'>New Arrival</h1>
      <div className='grid grid-cols-1 lg:grid-cols-4 '>
        {products?.map((product)=>(
        <div key={product._id}>
            <NewACard  data ={product} /> 
        </div>
        ))}
      </div>
      <div  className='flex justify-center items-center mt-6 '>
        <Button1 url={"/shop"} title={"See more"} />
      </div>
     
    </div>
  )
}

export default NewArible