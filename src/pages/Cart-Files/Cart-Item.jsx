import { useContext } from "react";
import React from "react";
import { ShopContext } from "../../context/Shop-Context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img id="productImage" src={productImage} alt="product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}.00</p>
        <div className="countHandler">
          <button className="addToCartBttn2" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input
            id="counterInput2"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="addToCartBttn2" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
