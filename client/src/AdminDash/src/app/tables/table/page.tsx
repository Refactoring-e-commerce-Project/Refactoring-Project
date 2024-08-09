'use client'
import React, { useEffect, useState } from 'react'

import Sidebar from '@/components/Sidebar';
import axios from 'axios'
import Link from 'next/link';

function page() {
  interface Product {
    id:number,
      productname:string,
      description:string,
      images:[string],
      price:number,
      availability:boolean,
      categoryId:number,
      userId:number,
      createdAt: string,
    updatedAt: string
    
  }
  useEffect(()=>{
      axios.get('http://127.0.0.1:3000/products/getall')
      .then((result)=>{
        console.log(result.data)
        setproduct(result.data)
      })
      .catch((err)=>{
        console.error(err)
      })
  },[])
  const deleteproduct=(idd:number)=>{
    axios.delete(`http://127.0.0.1:3000/products/${idd}`)
  }
  const [product,setproduct]=useState<Product[]>([])
  return (
    <div>
      <Sidebar/>
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark" style={{marginLeft:300,
      marginTop:50
    }}>
    <div className="px-4 py-6 md:px-6 xl:px-7.5">
      <h4 className="text-xl font-semibold text-black dark:text-white">
        Products
      </h4>
    </div>

    <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
      <div className="col-span-3 flex items-center">
        <p className="font-medium">Product Name</p>
      </div>
      {/* <div className="col-span-2 hidden items-center sm:flex">
        <p className="font-medium">Category</p>
      </div> */}
      <div className="col-span-1 flex items-center">
        <p className="font-medium">Price</p>
      </div>
      <div className="col-span-1 flex items-center">
        <p className="font-medium">seller Id</p>
      </div>
     
    </div>

    {product?.map((e, key) => (
      <div
        className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
        key={key}
      >
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
             <img src={`${e.images[0]}`}/>
            </div>
            <p className="text-sm text-black dark:text-white">
              {e.productname}
            </p>
          </div>
        </div>
        {/* <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">
            {e.category}
          </p>
        </div> */}
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">
            ${e.price}
          </p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">{e. userId}</p>
        </div>
        <button style={{backgroundColor:"orange"
         
        }} onClick={()=>{deleteproduct(e.id)}}>Delete</button><Link href={`/tables/table/prod/${e.id}`}><button style={{backgroundColor:"purple ",
          width:150,
          height:70
          
        }}>Update</button></Link>
        
      </div>
    ))}
  </div>
  </div>
  )
}

export default page
