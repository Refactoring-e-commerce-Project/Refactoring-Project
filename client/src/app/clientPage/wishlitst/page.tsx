'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Wishlist() {
    // const userId: number = JSON.parse(localStorage.getItem('user') || '{}').id;
    //  const [wish,setwish]= useState<number>()
    //  const [x,setx]= useState<string[]>()

    // useEffect(()=>{
    //  axios.get(`http://localhost:3000/wishlist/getwhishlist/${userId}`)
    //  .then((response)=>{console.log('ok');
    //     setwish(response.data.favlist.productId);
        
    //  })
    //  .catch((err)=>{console.log(err);
    //  })
    // },[userId])

    // useEffect(()=>{
    //     axios.get(`http://localhost:3000/products/getAll/${wish}`)
    //     .then((res)=>setx(res.data.productname))
    //     .catch((err)=>console.log(err))
    // },[])
    
  return (
    <div>
       wishlist
    </div>
  )
}

export default Wishlist