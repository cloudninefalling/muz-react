import React from "react";

import "./FilterOption.css";

const FilterOption = ({ onChange, name }) => {
  return (
    <li className="filter__wrapper">
      <input
        type="checkbox"
        name={name}
        id={name}
        className="filter__checkbox"
        onChange={() => onChange(name)}
        aria-label={name}
      ></input>
      <label htmlFor={name} className="filter__label">
        {name}
      </label>
    </li>
  );
};

export default FilterOption;
