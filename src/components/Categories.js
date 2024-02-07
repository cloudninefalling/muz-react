import React from "react";

export default function Categories() {
  const [hovered, setHovered] = React.useState("");
  function handleHover(name = "") {
    setHovered(name);
  }
  const categoryNames = [
    "classical",
    "acoustic",
    "electric",
    "bass",
    "ukulele",
    "accessories",
  ];

  const categoriesArray = categoryNames.map((name) => {
    return (
      <li
        className={`categories__list-item ${
          hovered === name
            ? `categories__list-item_${name} categories__list-item_active`
            : ""
        }`}
        id={name}
        key={name}
        onMouseEnter={(evt) => {
          handleHover(evt.target.id);
        }}
        onMouseLeave={() => handleHover()}
      >
        <span>{name}</span>
      </li>
    );
  });

  return (
    <section className="categories">
      <h2 className="section-title">categories</h2>
      <ul className="categories__list">{categoriesArray}</ul>
    </section>
  );
}
