import React, { useState } from "react";

function FilterCheckbox({ onSwitch, isToggled }) {
  return (
    <>
      <section className="checkbox">
        <div className="checkbox__container">
          <label className="checkbox__container-label">
            <input
              type="checkbox"
              className="checkbox__container-checkbox"
              checked={isToggled}
              onChange={onSwitch}
            />
            <span className="checkbox__container-slider" />
          </label>
          <p className="checkbox__container-title">Короткометражки</p>
        </div>
      </section>
    </>
  );
}

export default FilterCheckbox;
