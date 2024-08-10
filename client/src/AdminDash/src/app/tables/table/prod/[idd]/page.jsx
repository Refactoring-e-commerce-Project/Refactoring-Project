'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import './updateprod.css'
import axios from 'axios'
function updateproduct() {
  const params=useParams()
  const id=params.idd
  const[productname,setporductname]=useState('')
  const[desc,setdesc]=useState('')
  const[image,setimage]=useState('')
  const[price,setprice]=useState()
  const [avai,setavai]=useState(Boolean)
  const[cat,setcat]=useState()
  const updateproductt=()=>{
    axios.put(`http://127.0.0.1:3000/products/${id}`,{productname:productname,description:desc,images:[image],price:price,availability:avai})
    .then((results)=>{
      console.log(results.data)
    })
    .catch((err)=>{
      console.error(err)
    })
  }
  return (
    <div>
      <div class="container">
  <form action="action_page.php">

    <label for="fname">product Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Product name.." onChange={(e)=>{setporductname(e.target.value)}}/>
    
    <label for="subject">Description</label>
    <textarea id="subject" name="subject" placeholder="Write something.." onChange={(e)=>{setdesc(e.target.value)}}></textarea>

    <label for="lname">images</label>
    <input type="text" id="lname" name="lastname" placeholder="Image URL" onChange={(e)=>{setimage(e.target.value)}}/>
    <label for="lname">price</label>
    <input type="text" id="lname" name="lastname" placeholder="Price" onChange={(e)=>{setprice(e.target.value)}}/>
    
    <label for="lname">availability</label>
    <input type="text" id="lname" name="lastname" placeholder="True or False" onChange={(e)=>{setavai(e.target.value)}}/>
    <label for="lname">categoris id</label>
    <input type="text" id="lname" name="lastname" placeholder="True or False" onChange={(e)=>{setcat(e.target.value)}}/>



    <Link href={"/tables/table"}><input type="submit" value="Submit" onClick={()=>{updateproductt()}}/></Link>

  </form>
</div>
    </div>
  )
}

export default updateproduct
