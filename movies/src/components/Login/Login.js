import React from "react";
import FormInputs from "../FormInputs/FormInputs";
import InputField from "../ImputField/ImputField";

function Login () {
    return (

      <FormInputs
        title="Рады видеть!"
        btnName="Войти"
        text="Ещё не зарегистрированы?"
        link="/signup"
        linkTitle="Регистрация"
      >
        <InputField 
          label="E-mail"
       />

        <InputField 
          label="Пароль"
       />
      </FormInputs>
    )
}
export default Login;