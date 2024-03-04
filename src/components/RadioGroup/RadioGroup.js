import React, { useState } from "react";
import RadioInput from "../RadioInput/RadioInput";
import "./RadioGroup.css";

const RadioGroup = ({ options, selected, setSelected }) => {
  const handleChange = (value) => {
    setSelected(value);
  };

  const renderRadioInputs = () => {
    return options.map((option) => (
      <RadioInput
        key={option}
        title={option}
        selected={selected}
        onChange={handleChange}
      />
    ));
  };
  return <div className="radio-group">{renderRadioInputs()}</div>;
};

export default RadioGroup;
