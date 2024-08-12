"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import "./productHistory.css"; // Import the CSS file

interface Product {
  id: number;
  productname: string;
  description: string;
  price: number;
  availability: boolean;
  categoryId: number;
  images: string[];
  userId: number;
  createdAt: string;
  updatedAt: string;
}

interface OrderProduct {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  Product: Product;
}

interface Order {
  id: number;
  userId: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  OrderProducts: OrderProduct[];
}

function ProductHistory() {
  const [productHis, setProductHis] = useState<Order[]>([]);
  const userId: number = JSON.parse(localStorage.getItem("user") || "{}").id;
  useEffect(() => {
    axios
      .get(`http://localhost:3000/order/getAll/${userId}`)
      .then((res) => {
        setProductHis(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="product__history__container">
      <table className="main-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total Price</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {productHis.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              <td>${order.totalPrice.toFixed(2)}</td>
              <td>
                <div className="products-container">
                  {order.OrderProducts.map((orderProduct) => (
                    <div key={orderProduct.id} className="product-card2">
                      <strong>{orderProduct.Product.productname}</strong>
                      <br />
                      <img
                        src={orderProduct.Product.images[0]} // Display the first image
                        alt={orderProduct.Product.productname}
                        className="product-image"
                      />
                      <br />
                      Quantity: {orderProduct.quantity}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductHistory;
