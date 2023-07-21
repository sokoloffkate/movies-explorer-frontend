import React from "react";

function InputField ({ label }) {
    
    return (
        <label className="formInputs__form-label">
          {`${label}`}
           <input
           type="text"
           className="formInputs__form-input"
           />
        </label>      
               
    )
}

export default InputField;
