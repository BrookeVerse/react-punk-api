import React from "react";
import "./FiltersItem.scss";

const FiltersItem = ({ handleCheckbox }) => {
  return (
    <div className="filtersItem">
      <h2>
        High ABV (6.0%)
        <input type="checkbox" onInput={handleCheckbox} id="ABV" value="ABV" />
      </h2>
      <h2>
        Classic Range
        <input type="checkbox" onInput={handleCheckbox} id="Classic" value="Classic" />
      </h2>
      <h2>
        Acidic(under 4)
        <input type="checkbox" onInput={handleCheckbox} id="Acidic" value="Acidic"/>
      </h2>
    </div>
  );
};

export default FiltersItem;
