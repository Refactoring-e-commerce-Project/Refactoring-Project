'use client'
import Image from 'next/image';
import { useState } from 'react';
import { FaMinus, FaPlus, FaTruck, FaRedo } from 'react-icons/fa'; // Import icons

const Productdetails = () => {
    const [quantity,setquantity]=useState<number>(1)
    const handleQuantityChange = (newQuantity: number) => {
        setquantity(newQuantity);
    };

    return (
        <div style={{ display: 'flex', gap: '30px', width: '100%', justifyContent: 'center', alignItems: 'center' }}>

            <div style={{ display: 'flex', gap: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                        width: '170px',
                        height: '138px',
                        backgroundColor: '#F5F5F5',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            src="/assets/ps5.webp"
                            alt="PlayStation 5"
                            width={100}
                            height={400}
                        />
                    </div>
                    <div style={{
                        width: '170px',
                        height: '138px',
                        backgroundColor: '#F5F5F5',
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            src="/assets/ps5.webp"
                            alt="PlayStation 5"
                            width={100}
                            height={400}
                        />
                    </div>
                    <div style={{
                        width: '170px',
                        height: '138px',
                        backgroundColor: '#F5F5F5',
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            src="/assets/ps5.webp"
                            alt="PlayStation 5"
                            width={100}
                            height={400}
                        />
                    </div>
                </div>
                <div style={{
                    width: '500px',
                    height: '450px',
                    backgroundColor: '#F5F5F5',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image
                        src="/assets/ps5.webp"
                        alt="PlayStation 5"
                        width={400}
                        height={400}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <p><b>HAVIC HV G-92 GAMEPAD</b></p>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <p style={{ fontSize: 'x-small', color: '#00FF66' }}>In Stock</p>
                    </div>
                    <div>
                        <p style={{ marginTop: '10px', fontWeight: '200px', fontSize: 'large' }}>$160.00</p>
                    </div>
                    <div style={{ width: '380px', borderBottom: '1px solid grey', paddingBottom: '40px' }}>
                        <p style={{ fontSize: 'small' }}>playstaion 5 gamepad playstaion 5 gamepad playstaion 5 gamepad playstaion 5 gamepad playstaion 5 gamepad playstaion 5 gamepad</p>
                    </div>
                    <div style={{ display: 'flex', position: 'absolute', marginTop: '220px' }}>
                        <div style={{
                            border: '1px solid black', width: '35px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <FaMinus onClick={() => handleQuantityChange(quantity - 1)}/> {/* Minus icon */}
                        </div>
                        <div style={{
                            border: '1px solid black', width: '80px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}> {quantity} </div>
                        <div style={{
                            border: '1px solid black', width: '35px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: '#db4444'
                        }}>
                            <FaPlus onClick={() => handleQuantityChange(quantity + 1)}/> {/* Plus icon */}
                        </div>
                        {/* <div style={{ marginLeft: '40px', marginTop: '2px' ,display : "flex"}}>
                            <button style={{ backgroundColor: '#db4444', color: 'white', width: '165px', height: '44px', borderRadius: '5px' }}>Buy Now</button>
                            <Image style={{marginLeft:'19px', border:'0.3px solid grey'}}
                            src="/assets/heart.webp"
                            alt="like "
                            width={27}
                            height={20}
                        />
                        </div> */}
                        <div style={{ marginLeft: '40px', marginTop: '2px', display: 'flex', alignItems: 'center' }}>
  <button style={{ backgroundColor: '#db4444', color: 'white', width: '165px', height: '44px', borderRadius: '5px' }}>Buy Now</button>
  <Image
    style={{
      marginLeft: '19px',
      width: '40px',
      height: '40px',
      border: '1px solid #000000',
      borderRadius: '10%',
      objectFit: 'cover',
    }}
    src="/assets/heart.webp"
    alt="like"
    width={40}
    height={40}
  />
</div>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '120px', gap: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaTruck style={{ marginRight: '8px' }} /> {/* Delivery icon */}
                            <b style={{ fontSize: 'small' }}>Free Delivery</b>
                        </div>
                        <div style={{ textDecoration: 'underline' }}>
                            Enter Your Postal Code for Delivery Availability
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaRedo style={{ marginRight: '8px' }} /> {/* Return icon */}
                            <b style={{ fontSize: 'small' }}>Return Delivery</b>
                        </div>
                        <div style={{ textDecoration: 'underline' }}>
                            Free 30 Days Delivery Returns
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productdetails;

