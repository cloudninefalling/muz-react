import Header from "./Header";
import Lead from "./Lead";
import Content from "./Content";
import Footer from "./Footer";
import "../blocks/page/page.css";
import Catalog from "../pages/Catalog/Catalog";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Product from "../pages/Product/Product";
import CartContext from "../contexts/CartContext";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, color = Object.keys(product.colors)[0]) => {
    setCart((prev) => [...prev, { product, color }]);
  };

  const handleRemoveFromCart = (
    product,
    color = Object.keys(product.colors)[0]
  ) => {
    setCart(
      cart.filter(
        (item) => item.product.id !== product.id || item.color !== color
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, handleAddToCart, handleRemoveFromCart }}
    >
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Lead />
              <Content />
            </>
          }
        />
        <Route
          path="/catalog/:category"
          element={
            <>
              <Catalog />
            </>
          }
        />
        <Route
          path="products/:category/:product"
          element={<Product handleAddToCart={handleAddToCart} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
