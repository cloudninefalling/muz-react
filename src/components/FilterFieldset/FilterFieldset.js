import React, { useState } from "react";
import FilterOption from "../FilterOption/FilterOption";
import "./FilterFieldset.css";

const FilterFieldset = ({ title, options, handleChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  // todo add indicator for active fieldset

  const onChange = (value) => {
    handleChange(title, value);
  };

  const renderOptions = () => {
    return options.map((option) => {
      return <FilterOption key={option} onChange={onChange} name={option} />;
    });
  };

  return (
    <fieldset className="filter__fieldset">
      <input
        type="checkbox"
        className="filter__fieldset-button"
        id={title}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label htmlFor={title} className="filter__fieldset-label">
        <h3 className="filter__fieldset-title">{title}</h3>
      </label>
      <ul
        className="filter__container"
        style={
          isChecked
            ? {
                height: `calc(26px * ${options.length})`,
                backgroundColor: "var(--white)",
              }
            : { height: "0" }
        }
      >
        {renderOptions()}
      </ul>
    </fieldset>
  );
};

export default FilterFieldset;
