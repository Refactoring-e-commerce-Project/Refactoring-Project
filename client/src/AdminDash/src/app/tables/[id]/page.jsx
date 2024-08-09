'use client'
import React, { useState } from 'react'
import './update.css'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import axios from 'axios'
function page() {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [typee,settype]=useState('')
  const params=useParams()
  const id=params.id

  const updateuse=()=>{
    axios.put(`http://127.0.0.1:3000/users/update/${id}`,{name:name,mail:email,type:typee})
    .then((result)=>{
      console.log(result.data)
    })
    .catch((err)=>{
      console.error(err)
    })
  }
  return (
    <div>
        <h1 className='updt'>Update User</h1>
  <div class="container">
  <form action="/action_page.php">
    <label for="fname">User Name</label>
    <input type="text" className="fname" name="firstname" placeholder="Your name.." onChange={(e)=>{setname(e.target.value)}}/>

    <label for="lname">Gmail</label>
    <input type="text" className="lname" name="lastname" placeholder="Your last name.." onChange={(e)=>{setemail(e.target.value)}}/>
    <label for="country">Role</label>
    <select className="country" name="country">
      <option value="seller" onChange={(e)=>{settype(e.target.value)}}>Seller</option>
      <option value="client" onChange={(e)=>{settype(e.target.value)}}>Client</option>
      
    </select>


    <Link href={"/tables"}><input type="submit" value="Update" onClick={()=>{updateuse()}}/></Link>
  </form>
</div>


    </div>
  )
}

export default page
