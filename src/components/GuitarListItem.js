import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
export default function GuitarListItem({ isNarrow, isDark, guitar }) {
  const { cart, handleAddToCart, handleRemoveFromCart } =
    useContext(CartContext);

  const [isLiked, setIsLiked] = useState(
    cart.some((item) => item.product.id === guitar.id)
  );

  const handleButtonClick = () => {
    if (!isLiked) {
      handleAddToCart(guitar);
      setIsLiked(true);
    } else {
      handleRemoveFromCart(guitar);
      setIsLiked(false);
    }
  };

  return (
    <li
      className={`guitar-list__item ${isDark ? "guitar-list__item_dark" : ""} ${
        isNarrow ? "guitar-list__item_narrow" : ""
      }`}
    >
      <Link
        to={`/products/${guitar.category}/${guitar.id}`}
        className="guitar-list__item-background"
      >
        <img
          className="guitar-list__item-image"
          src={guitar.img}
          alt={guitar.name}
        />
      </Link>
      <Link
        to={`/products/${guitar.category}/${guitar.id}`}
        className="guitar-list__item-name"
      >
        {guitar.name}
      </Link>
      <p className="guitar-list__item-price">${guitar.price}</p>
      <button
        onClick={handleButtonClick}
        type="button"
        className={`guitar-list__like-button 
          ${isDark ? "guitar-list__like-button_dark" : ""} 
          ${isLiked && isDark ? "guitar-list__like-button_dark_active" : ""}
          ${isLiked ? "guitar-list__like-button_active" : ""}`}
      />
    </li>
  );
}
