import React, { useContext, useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/Shop-Context";
import { CartItem } from "./Cart-Item";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getuser = localStorage.getItem("user_login");
    if (getuser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <>
      {isLoggedIn && (
        <div className="cart">
          <div className="cartItems">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
            {totalAmount > 0 ? (
              <p id="subtotal">Subtotal: ${totalAmount}</p>
            ) : (
              <h1>Your Cart is Empty</h1>
            )}
            <div className="checkout">
              <button onClick={() => navigate("/shop")}>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
