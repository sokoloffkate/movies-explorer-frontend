import React, { useCallback, useState } from "react";
import FormInputs from "../FormInputs/FormInputs";
import InputField from "../ImputField/ImputField";
import { Redirect } from "react-router-dom";

function Login ({ isLoggedIn, onLogin }) {

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

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onLogin(data.email, data.password);
    },
    [onLogin, data]
  );

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
    return (

      <FormInputs
        title="Рады видеть!"
        btnName="Войти"
        text="Ещё не зарегистрированы?"
        link="/signup"
        linkTitle="Регистрация"
        onSubmit={handleSubmit}
      >
        <InputField 
          type="email"
          value={data.email}
          onChange={handleChangeData}
          label="E-mail"
          placeholder="Введите ваш e-mail"
       />

        <InputField 
          type="password"
          value={data.password}
          onChange={handleChangeData}
          label="Пароль"
          placeholder="Введите ваш пароль"
       />
      </FormInputs>
    )
}
export default Login;