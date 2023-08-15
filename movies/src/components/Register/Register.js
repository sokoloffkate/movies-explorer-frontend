import React, { useCallback, useState } from "react";
import FormInputs from "../FormInputs/FormInputs";
import InputField from "../ImputField/ImputField";
import { Redirect } from "react-router-dom";

function Register ({ isLoggedIn, onRegister }) {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

 const handleChangeData = useCallback(
    (e) => {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value,
      });
    },
    [data]
  );

  const handleSubmit = (e) => {
      e.preventDefault();
      onRegister(data.name, data.email, data.password);
    };

  if(isLoggedIn) {
    return <Redirect to="/"/>
  }
    return (

      <FormInputs
        title="Добро пожаловать!"
        btnName="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="/signin"
        linkTitle="Войти"
        label="Имя"
        onSubmit={handleSubmit}
      >
       <InputField 
         type="text"
         name="name"
         value={data.name}
         onChange={handleChangeData}
         label="Имя"
         placeholder="Введите ваше имя"
       />

       <InputField 
         type="email"
         name="email"
         value={data.email}
         onChange={handleChangeData}
         label="E-mail"
         placeholder="Введите ваш e-mail"
       />

        <InputField 
         type="password"
         name="password"
         value={data.password}
         onChange={handleChangeData}
         label="Пароль"
         placeholder="Введите ваш пароль"
       />


     </FormInputs>
      
    )
}
export default Register;

