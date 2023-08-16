import React, { useState } from "react";
import FormInputs from "../FormInputs/FormInputs";
import InputField from "../ImputField/ImputField";
import { Redirect } from "react-router-dom";

function Register ({ isLoggedIn, onRegister }) {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

 const handleChangeData = (
    (e) => {
      const { name, value } = e.target;
      setData({
     
        [name]: value,
      });
    });
      
  const handleSubmit = (e) => {
      e.preventDefault();
      onRegister(data.name, data.email, data.password);
    };

    
  if(isLoggedIn) {
    return <Redirect to="/"/>
  }
    return (

    <form action="submit" onSubmit={handleSubmit}>

      <FormInputs
        title="Добро пожаловать!"
        btnName="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="/signin"
        linkTitle="Войти"
        label="Имя"
      >

     <div onChange={handleChangeData}>

       <InputField 
         type="text"
         name="name"
         value={data.name}
         onChange={handleChangeData}
         label="Имя"
         placeholder="Введите ваше имя"
       />

     </div>

     <div onChange={handleChangeData}>

       <InputField 
         type="email"
         name="email"
         value={data.email}
         onChange={handleChangeData}
         label="E-mail"
         placeholder="Введите ваш e-mail"
       />

      </div>

      <div onChange={handleChangeData}>

        <InputField 
         type="password"
         name="password"
         value={data.password}
         onChange={handleChangeData}
         label="Пароль"
         placeholder="Введите ваш пароль"
       />

     </div>

     </FormInputs>
  </form>
    )
}
export default Register;

