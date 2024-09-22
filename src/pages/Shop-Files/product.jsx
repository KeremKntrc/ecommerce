import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/Shop-Context";
import "./product.css";
import { useNavigate } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getuser = localStorage.getItem("user_login");
    if (getuser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  const cartItemAmount = cartItems[id];

  const history = useNavigate();

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      history("/login");
    } else {
      addToCart(id);
    }
  };
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <div className="counterDiv d-flex">
        {cartItemAmount > 0 && isLoggedIn && (
          <div>
            <button
              className="addToCartBttn"
              onClick={() => removeFromCart(id)}>
              -
            </button>

            <input
              id="counterInput"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
          </div>
        )}

        <button className="addToCartBttn" onClick={handleAddToCart}>
          +
        </button>
      </div>
    </div>
  );
};
