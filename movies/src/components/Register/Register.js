import React from "react";
import FormInputs from "../FormInputs/FormInputs";
import InputField from "../ImputField/ImputField";

function Register () {
    return (

      <FormInputs
        title="Добро пожаловать!"
        btnName="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="/signin"
        linkTitle="Войти"
        label="Имя"
      >
       <InputField 
         label="Имя"
       />

       <InputField 
         label="E-mail"
       />

        <InputField 
         label="Пароль"
       />


     </FormInputs>
      
    )
}
export default Register;

