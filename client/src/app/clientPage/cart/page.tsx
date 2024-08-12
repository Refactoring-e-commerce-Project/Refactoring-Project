'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cart.css';
import { useCart } from '../context'; 
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'

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
    const { setCartLength, setCartIds, cartIds, setTotalAmount } = useCart();
    const router = useRouter();



    useEffect(() => {
        axios.get(`http://localhost:3000/carts/getcartbyuser/${userId}`)
            .then((response) => {
                setCarts(response.data);
                const ids = response.data.map((cart: Cart) => cart.id);
                setCartIds(ids);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [ref, userId, setCartIds, setTotalAmount]);

    console.log(cartIds)

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


    const updateCartLength = () => {
        axios.get(`http://localhost:3000/carts/getcartbyuser/${userId}`)
          .then((res) => {
            const newCartLength = res.data.length;
            setCartLength(newCartLength); 
          })
          .catch((err) => console.error('Error fetching cart length:', err));
      };

    const handleDelClick = (id: number) => {
        axios.delete(`http://localhost:3000/carts/delete/${id}`)
            .then(() => {
                console.log('deleted');
                updateCartLength();
                setRef(!ref);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item Deleted Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
            .catch((err) =>{
                console.log(err)
            } 
            );
    };

    
    const calculateTotalPrice = () => {
        const totalAmount = carts.reduce((total, cart) => total + cart.price * cart.quantity, 0);
                setTotalAmount(totalAmount);
                return totalAmount;
    };
    

    const handleCheckOutClick = ()=>{
       router.push("/clientPage/checkout/")
    }

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
                       <div>
                        <p 
                          onClick={() => handleDelClick(cart.id)}
                          style={{
                            borderRadius: "50%",
                            cursor: 'pointer',
                            color: "white",
                            backgroundColor: "#db4444",
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '15px',
                            height: '20px'
                          }}
                        >
                          x
                        </p>
                        <img src={cart.image} alt={cart.productId.toString()} className="product-image" />
                        </div>
                        <span style={{ position: 'absolute', marginLeft: '230px' }}>$ {cart.price}</span>
                        <div style={{ display: 'flex', backgroundColor: '#f4f4f4', color: 'black', alignItems: 'center', position: 'absolute', marginLeft: '450px' }}>
                            <b style={{ cursor: 'pointer', fontSize: 'x-large' }} onClick={() => handleQuantityUpdate(cart.id, cart.quantity - 1)}>-</b>
                            <b style={{ border: '1px solid grey', borderRadius: '20%', margin: '0 10px' }}>{cart.quantity}</b>
                            <b style={{ cursor: 'pointer', fontSize: 'x-large' }} onClick={() => handleQuantityUpdate(cart.id, cart.quantity + 1)}>+</b>
                        </div>
                        <span>${cart.price * cart.quantity}</span>
                    </div>
                ))}
            </div>
            <div className="cart-actions">
                <button className="btn" style={{ border: '1px solid black' }} onClick={()=>{router.push("/clientPage/cart/account/")}}>Return To Shop</button>
                {/* <button className="btn" style={{ border: '1px solid black' }}>Update Cart</button> */}
            </div>
            <div className="cart-total">
                <div className="total-line">
                    <span>Subtotal:</span>
                    <span>${calculateTotalPrice()}</span>
                </div>
                <div className="total-line">
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <div className="total-line total">
                    <span>Total:</span>
                    <span>${calculateTotalPrice()}</span>
                </div>
                <button className="btn checkout-btn" style={{ borderRadius: 'none' }} onClick={handleCheckOutClick}>Proceed to checkout</button>
            </div>
        </div>
    );
};

export default Cart;
