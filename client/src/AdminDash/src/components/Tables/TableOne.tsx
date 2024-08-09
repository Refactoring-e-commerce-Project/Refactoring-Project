'use client'

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


// const brandData: BRAND[] = [
//   {
//     name: "raed",
//     gmail:'raedZouaoui@gmail.com',
//     role:'admin'
//   },
  // {
  //   logo: "/images/brand/brand-02.svg",
  //   name: "Twitter",
  //   visitors: 2.2,
  //   revenues: "4,635",
  //   sales: 467,
  //   conversion: 4.3,
  // },
  // {
  //   logo: "/images/brand/brand-03.svg",
  //   name: "Github",
  //   visitors: 2.1,
  //   revenues: "4,290",
  //   sales: 420,
  //   conversion: 3.7,
  // },
  // {
  //   logo: "/images/brand/brand-04.svg",
  //   name: "Vimeo",
  //   visitors: 1.5,
  //   revenues: "3,580",
  //   sales: 389,
  //   conversion: 2.5,
  // },
  // {
  //   logo: "/images/brand/brand-05.svg",
  //   name: "Facebook",
  //   visitors: 3.5,
  //   revenues: "6,768",
  //   sales: 390,
  //   conversion: 4.2,
  // },
// ];

const TableOne = () => {
  interface BRAND  {
    id: number,
    name: string,
    mail: string,
    password: string,
    type: string,
    createdAt: string,
    updatedAt: string
  }
  const [data,setdata]=useState<BRAND[]>([])
useEffect(()=>{
  axios.get('http://127.0.0.1:3000/users/getall')
  .then((response)=>{
    setdata(response.data)
console.log(response.data)
  })
  .catch((err)=>{
    console.error(err)
  })
},[])
console.log(data)
const deleteUser=(id:number)=>{
  axios.delete(`http://127.0.0.1:3000/users/delete/${id}`)
  .then(()=>{
    console.log('user deleted')
  })
  .catch((err)=>{
    console.error(err)
  })
}
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Users
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
             User name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
             Gmail
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Role
            </h5>
          </div>
      
        </div>

        {data?.map((e, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === data.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                {/* <Image src={e.logo} alt="Brand" width={48} height={48} /> */}
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {e.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{e.mail}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{e.type}</p>
            </div>

            <button style={{backgroundColor:"orange"}} onClick={()=>{deleteUser(e.id)}}>Delete</button>
            <Link href={`/tables/${e.id}`}><button style={{backgroundColor:"purple ",
          width:225,
          height:70
          
        }}>Update</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
