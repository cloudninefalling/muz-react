import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./CartItem.css";
import CartContext from "../../contexts/CartContext";

const CartItem = ({ product, color }) => {
  const { handleRemoveFromCart } = useContext(CartContext);

  return (
    <li className="cart-item">
      <Link
        to={`/products/${product.category}/${product.id}`}
        className="cart-item__image"
      >
        <img
          className="cart-item__image"
          src={product.colors[color]}
          alt={(product.name, product.colors[color])}
        />
      </Link>
      <Link
        to={`/products/${product.category}/${product.id}`}
        className="cart-item__title"
      >
        {product.name}
      </Link>
      <p className="cart-item__price">${product.price}</p>
      <button
        className="cart-item__remove-button"
        type="button"
        onClick={() => handleRemoveFromCart(product, color)}
      />
    </li>
  );
};

export default CartItem;
