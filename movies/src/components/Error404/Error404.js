import React from "react";
import { useHistory } from "react-router-dom";

function Error () {

  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

    return (
        <section className="error">
         <div className="error__content">
           <h1 className="error__content-title">404</h1>
           <p className="error__content-text">Страница не найдена</p>
           <button type="button" className="error__content-btn-link" onClick={goBack}>Назад</button> 
         </div>     
       </section>
     )
}
export default Error;