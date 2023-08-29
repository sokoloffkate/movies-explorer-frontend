import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  inputValue,
  setInputValue,
  errors,
  errMessage,
  onSearch,
  isToggled,
  onSwitch
}) {
  return (
    <>
      <section className="search">
        <form className="search__form" onSubmit={onSearch}>
          <div className="search__form-fieldset">
            <input
              type="text"
              className="search__form-input"
              placeholder="Фильм"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="search__form-button">
              Поиск
            </button>
          </div>
          {errors ? (
            <span className="search__form-input-error">{errMessage}</span>
          ) : (
            ""
          )}
          <FilterCheckbox 
          onSwitch={onSwitch}
          isToggled={isToggled}
          />
        </form>
      </section>
    </>
  );
}

export default SearchForm;
