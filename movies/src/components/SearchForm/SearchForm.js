import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm () {
    return (
      <>
        <section className="search">
        <form className="search__form" >
          <fieldset className="search__form-fielset">
            <input
              type="text"
              className="search__form-input"
              placeholder="Фильм"
            />
           <button className="search__form-button"> Поиск </button>
         </fieldset> 
         <FilterCheckbox />
       </form>
          
        </section>
        
      </> 
      )
};

export default SearchForm;