import React from "react";

function InputField ({ label, children }) {
    
    return (
        <label className="inputField">
          {`${label}`}
           {children}
        </label>      
               
    )
}

export default InputField;
