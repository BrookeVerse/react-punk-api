import React from "react";
import "./FiltersItem.scss";

const FiltersItem = ({ handleCheckbox }) => {
  return (
    <div className="filtersItem" id="filtersItem">
      <label htmlFor="ABV">
        High ABV (6.0%)
        <br />
        <input type="checkbox" onInput={handleCheckbox} data-testid="abv" value="ABV" />
      </label>
      <label htmlFor="Classic">
        Classic Range <br />
        <input type="checkbox" onInput={handleCheckbox} data-testid="Classic" value="Classic" />
      </label>
      <label htmlFor="Acidic">
        Acidic (4)
        <br />
        <input type="checkbox" onInput={handleCheckbox} data-testid="Acidic" value="Acidic" />
      </label>
    </div>
  );
};

export default FiltersItem;
