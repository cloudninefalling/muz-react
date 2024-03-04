import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../../contexts/CartContext";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert("Checkout is disabled on this site");
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const renderCartItems = cart.map((cartItem) => {
    const { product, color } = cartItem;
    return (
      <CartItem
        key={`${product.id}_${color}`}
        product={product}
        color={color}
      />
    );
  });

  return (
    <main>
      <section className="cart">
        <h1 className="cart__title">Cart</h1>
        <div className="cart__button-wrapper">
          <button
            className="cart__button"
            type="button"
            onClick={handleCheckout}
          >
            Checkout
          </button>
          <button
            className="cart__button cart__button_inverse"
            type="button"
            onClick={handleClearCart}
          >
            Clear
          </button>
        </div>
        <ul className="cart__list">{renderCartItems}</ul>
      </section>
    </main>
  );
};

export default Cart;
