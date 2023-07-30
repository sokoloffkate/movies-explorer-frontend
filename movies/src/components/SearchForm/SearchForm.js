import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm () {
    return (
      <>
        <section className="search">
        <form className="search__form" >
          <div className="search__form-fieldset">
            <input
              type="text"
              className="search__form-input"
              placeholder="Фильм"
            />
           <button className="search__form-button"> Поиск </button>
       </div>
         <FilterCheckbox />
       
       </form>
          
        </section>
        
      </> 
      )
};

export default SearchForm;