import React from "react";
import "./GuitarGrid.css";
import GuitarListItem from "../GuitarListItem";

const GuitarGrid = ({ guitars }) => {
  const renderGuitars = guitars.map((guitar) => {
    return (
      <GuitarListItem
        key={guitar.id}
        guitar={guitar}
        isNarrow={false}
        isDark={true}
      />
    );
  });

  return <ul className="guitar-grid">{renderGuitars}</ul>;
};

export default GuitarGrid;
