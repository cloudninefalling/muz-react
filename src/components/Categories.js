import React from "react";
import { CATEGORIES } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Categories() {
  const [hovered, setHovered] = React.useState("");
  function handleHover(name = "") {
    setHovered(name);
  }

  const categoriesArray = CATEGORIES.map((name) => {
    return (
      <li className="categories__list-item-wrapper" key={name}>
        <Link
          to={`/catalog/${name}`}
          className={`categories__list-item ${
            hovered === name
              ? `categories__list-item_${name} categories__list-item_active`
              : ""
          }`}
          id={name}
          onMouseEnter={(evt) => {
            handleHover(evt.target.id);
          }}
          onMouseLeave={() => handleHover()}
        >
          <span>{name}</span>
        </Link>
      </li>
    );
  });

  return (
    <section className="categories" id="categories">
      <h2 className="section-title">categories</h2>
      <ul className="categories__list">{categoriesArray}</ul>
    </section>
  );
}
