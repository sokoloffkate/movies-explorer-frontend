import React from "react";

function Error () {

    return (
        <section className="error">
         <div className="error__content">
         <h1 className="error__content-title">404</h1>
         <p className="error__content-text">Страница не найдена</p>
         <button type="button" className="error__content__btn-link">Назад</button> 
         </div>     
       </section>
     )
}
export default Error;