import React from "react";

function InputField ({ label, placeholder }) {
    
    return (
        <label className="inputField">
          {`${label}`}
           <input
           className="inputField__input"
           required
           placeholder= {`${placeholder}`}
           />
        </label>      
               
    )
}

export default InputField;
