'use client'
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Import the checkmark icon from react-icons
import { useRouter } from "next/navigation";

function Succeed() {
  const router = useRouter();
const handleHomeClick = ()=>{
  router.push("/clientPage")
}
  return (
    <div style={{ textAlign: 'center', padding: '20px',marginTop:'9%' }}>
      {/* <FaCheckCircle style={{ color: '#4CAF50', fontSize: '50px' }} /> */}
      <div style={{ marginTop: '10px', fontSize: '20px', fontWeight: 'bold' }} >
        Payment Successfully Completed!
        
      </div>
      <div>
      <FaCheckCircle style={{ color: '#4CAF50', fontSize: '50px' , position:"absolute", marginLeft:'60%',marginTop:'-2.4%'}} />
      </div>
      <button 
        style={{
          marginTop: '20px',
          color: 'white',
          backgroundColor: '#db4444',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={handleHomeClick}
        >
        Go to Home
      </button>
    </div>
  );
}

export default Succeed;
