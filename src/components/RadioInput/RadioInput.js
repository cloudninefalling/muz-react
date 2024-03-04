import React from "react";
import "./RadioInput.css";

const RadioInput = ({ title, selected, onChange }) => {
  const handleChange = () => onChange(title);
  const isChecked = selected === title;

  return (
    <input
      className={`radio-input radio-input_${title}`}
      type="radio"
      name={title}
      value={title}
      id={title}
      onChange={handleChange}
      checked={isChecked}
      style={{ "--radio-color": `var(--${title})` }}
    />
  );
};

export default RadioInput;
