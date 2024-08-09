// 'use client'
// import React, { ChangeEvent,  } from 'react';

// import { useEffect, useState } from 'react';
// import './cart.css';
// import axios from'axios'
 
// interface cart {
//     id: number;
//     productId : number;
//     image : string;
//     price: number;
//     userId: number;
//     totalPrice : number;
//     quantity : number;
//     createdAt: string;
//     updatedAt: string;
//   }

// const Cart = () => {
//     // const [quantity,setquantity]=useState<number>(1)
//     const [ref, setref] = useState<Boolean>(false);
//     const [carts, setCarts] = useState<cart[]>([]);

//     const id: number = JSON.parse(localStorage.getItem("user") || '{}').id;

//     console.log("this is the id",id);
//     console.log("this is the cart",carts);
    
//  useEffect(()=>{
//     axios.get(`http://localhost:3000/carts/getcartbyuser/${id}`)
//     .then((response)=>{
//         console.log(response)
//         setCarts(response.data)
//     }).catch((err)=>{console.log(err);
//     })
//  },[ref])   

//     return (
//         <div className="cart">
//             <div className="breadcrumb">
//                 Home / Cart
//             </div>
//             <div className="cart-items">
//             <div className="cart-header" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
//                     <span>Product</span>
//                     <span>Price</span>
//                     <span>Quantity</span>
//                     <span>Subtotal</span>
//                 </div>
//                 <hr />
//                 {carts.map((cart,index)=>(
//                     <div key={index} className="cart-item"  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
//                     <img src={cart.image} alt="LCD Monitor" className="product-image"/>
//                     <span>$ {cart.price}</span>
                    
//                    <div style={{display:'flex',backgroundColor:'black',color :'white'}}>
//                    <span >-</span> {cart.quantity} <span
//                      onClick={() => {
//                         const newQuantity = cart.quantity + 1; // Increment the current quantity
    
//                         axios.put(`http://localhost:3000/carts/update/1`, { quantity: newQuantity }) // Replace 1 with your actual item ID
//                             .then(() => {
//                                 console.log("Quantity updated successfully");
//                                 // setquantity(newQuantity); // Update the state with the new quantity
//                                 setref(!ref); // Toggle ref state or handle your specific logic
//                             })
//                             .catch(err => {
//                                 console.error(err);
//                             });
//                     }}
//                    >+</span>
//                    </div>
//                     <span>{(cart.price)*(cart.quantity)}</span>
//                 </div>
//                 ))}
               
//             </div>
//             <div className="cart-actions">
//                 <button className="btn"  style={{border: '1px solid black'}}>Return To Shop</button>
//                 <button className="btn" style={{border: '1px solid black'}}>Update Cart</button>
//             </div>
            
//             <div className="cart-total">
//                 <div className="total-line">
//                     <span>Subtotal:</span>
//                     <span>$</span>
//                 </div>
//                 <div className="total-line">
//                     <span>Shipping:</span>
//                     <span>Free</span>
//                 </div>
//                 <div className="total-line total">
//                     <span>Total:</span>
//                     <span>$</span>
//                 </div>
//                 <button className="btn checkout-btn" style={{borderRadius:'none' }}>Proceed to checkout</button>
//             </div>
//         </div>
//     );
// };

// export default Cart;

'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cart.css';

interface Cart {
    id: number;
    productId: number;
    image: string;
    price: number;
    userId: number;
    totalPrice: number;
    quantity: number;
    createdAt: string;
    updatedAt: string;
}

const Cart = () => {
    const [carts, setCarts] = useState<Cart[]>([]);
    const [ref, setRef] = useState<boolean>(false);
    const userId: number = JSON.parse(localStorage.getItem("user") || '{}').id;

    useEffect(() => {
        axios.get(`http://localhost:3000/carts/getcartbyuser/${userId}`)
            .then((response) => {
                setCarts(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [ref, userId]); // Add `userId` as a dependency

    const handleQuantityUpdate = (cartId: number, newQuantity: number) => {
        axios.put(`http://localhost:3000/carts/update/${cartId}`, { quantity: newQuantity })
            .then(() => {
                setCarts(prevCarts => prevCarts.map(cart =>
                    cart.id === cartId ? { ...cart, quantity: newQuantity } : cart
                ));
                setRef(prevRef => !prevRef);
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className="cart">
            <div className="breadcrumb">
                Home / Cart
            </div>
            <div className="cart-items">
                <div className="cart-header" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                </div>
                <hr />
                {carts.map((cart) => (
                    <div key={cart.id} className="cart-item" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
                        <img src={cart.image} alt={cart.productId.toString()} className="product-image" />
                        <span style={{position:'absolute',marginLeft:'230px'}}>$ {cart.price}</span>
                        <div style={{ display: 'flex', backgroundColor: '#f4f4f4', color: 'black', alignItems: 'center',position:'absolute',marginLeft:'450px' }}>
                            <b style={{cursor:'pointer',fontSize:'x-large'}} onClick={() => handleQuantityUpdate(cart.id, cart.quantity - 1)}>-</b>
                            <b style={{border:'1px solid grey',borderRadius:'20%', margin: '0 10px' }}>{cart.quantity}</b>
                            <b style={{cursor:'pointer',fontSize:'x-large'}} onClick={() => handleQuantityUpdate(cart.id, cart.quantity + 1)}>+</b>
                        </div>
                        <span>${cart.price * cart.quantity}</span>
                    </div>
                ))}
            </div>
            <div className="cart-actions">
                <button className="btn" style={{ border: '1px solid black' }}>Return To Shop</button>
                <button className="btn" style={{ border: '1px solid black' }}>Update Cart</button>
            </div>
            <div className="cart-total">
                <div className="total-line">
                    <span>Subtotal:</span>
                    <span>$</span>
                </div>
                <div className="total-line">
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <div className="total-line total">
                    <span>Total:</span>
                    <span>$</span>
                </div>
                <button className="btn checkout-btn" style={{ borderRadius: 'none' }}>Proceed to checkout</button>
            </div>
        </div>
    );
};

export default Cart;
