'use client'
import React from 'react'
import { Product } from "../../../types/product";
import Sidebar from '@/components/Sidebar';
const productData:Product[] = [
  {
    image: "/images/product/product-01.png",
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 296,
    seller:'raed'
  },
]


function page() {

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
        <p className="font-medium">seller</p>
      </div>
     
    </div>

    {productData.map((product, key) => (
      <div
        className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
        key={key}
      >
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
             <img src={`${product.image}`}/>
            </div>
            <p className="text-sm text-black dark:text-white">
              {product.name}
            </p>
          </div>
        </div>
        {/* <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">
            {product.category}
          </p>
        </div> */}
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">
            ${product.price}
          </p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">{product.seller}</p>
        </div>
        <button style={{backgroundColor:"orange"
         
        }}>Delete</button><button style={{backgroundColor:"purple "}}>Update</button>
        
      </div>
    ))}
  </div>
  </div>
  )
}

export default page
