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
         placeholder="Введите ваше имя"
       />

       <InputField 
         label="E-mail"
         placeholder="Введите ваш e-mail"
       />

        <InputField 
         label="Пароль"
         placeholder="Введите ваш пароль"
       />


     </FormInputs>
      
    )
}
export default Register;

