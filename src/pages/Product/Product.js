import { useParams } from "react-router-dom";
import "./Product.css";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { useContext, useState } from "react";
import {
  ELECTRIC_GUITARS,
  ACOUSTIC_GUITARS,
  BASS_GUITARS,
  UKULELE,
  ACCESSORIES,
} from "../../utils/guitars";

// todo image carousel

import CartContext from "../../contexts/CartContext";

export default function Product() {
  const { handleAddToCart } = useContext(CartContext);
  let [isSuccessfullyAdded, setIsSuccessfullyAdded] = useState(false);

  const addToCart = (product, currentColor) => {
    handleAddToCart(product, currentColor);

    const timeout = () => {
      setIsSuccessfullyAdded(false);
    };
    const switchIsSuccessfullyAdded = () => {
      setIsSuccessfullyAdded(true);
      setTimeout(timeout, 1000);
    };

    if (!isSuccessfullyAdded) {
      switchIsSuccessfullyAdded();
    } else {
      setIsSuccessfullyAdded(false);
      clearTimeout(timeout);
      switchIsSuccessfullyAdded(); // todo better (fire animation on every click) or mb popup window?
    }
  };

  const productId = useParams().product;
  const curCategory = useParams().category;

  const getData = () => {
    switch (curCategory) {
      case "acoustic":
        return ACOUSTIC_GUITARS;
      case "electric":
        return ELECTRIC_GUITARS;
      case "bass":
        return BASS_GUITARS;
      case "ukulele":
        return UKULELE;
      case "accessories":
        return ACCESSORIES;
      default:
        return [];
    }
  };

  const productList = getData();

  const product = productList.find((item) => item.id === productId);

  const [currentColor, setCurrentColor] = useState(
    Object.keys(product.colors)[0]
  );

  const renderDescription = () => {
    return product.description.map((item) => (
      <p className="product__description" key={item}>
        {item}
      </p>
    ));
  };

  return (
    <section className="product">
      <img
        className="product__image"
        src={product.colors[currentColor]}
        alt={product.name}
      />
      <h1 className="product__title">{product.name}</h1>
      <p className="product__price">${product.price}</p>
      <div className="product__options">
        <h2 className="product__options-title">Color</h2>
        <p className="product__options-text">{currentColor}</p>
        <RadioGroup
          options={Object.keys(product.colors)}
          selected={currentColor}
          setSelected={setCurrentColor}
        />
      </div>
      <div className="product__button-wrapper">
        <p
          className={`product__button-alert ${
            isSuccessfullyAdded ? "product__button-alert_active" : ""
          }`}
        >
          Successfully added to cart!
        </p>
        <button
          className="product__button"
          type="button"
          onClick={() => addToCart(product, currentColor)}
        >
          Add to Cart
        </button>
      </div>
      <div className="product__description-wrapper">
        <h2 className="product__subtitle">About</h2>
        {renderDescription()}
      </div>
    </section>
  );
}
