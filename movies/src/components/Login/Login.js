import FormInputs from "../FormInputs/FormInputs";
import { useForm } from "react-hook-form";

function Login({ onLogin, err }) {
  console.log(err)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data, e) => {
    e.preventDefault();
    onLogin(data.email, data.password);
  };

  return (
    <form action="submit" onSubmit={handleSubmit(onSubmit)}>
      <FormInputs
        title="Рады видеть!"
        btnName="Войти"
        text="Ещё не зарегистрированы?"
        link="/signup"
        linkTitle="Регистрация"
        isValid={isValid}
      >
        <label className="inputField">
          E-mail
          <input
            className="inputField__input"
            placeholder="Введите ваш e-mail"
            type="text"
            name="email"
            {...register("email", {
              required: "Поле E-mail обязательно к заполнению",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Поле email заполнено некорректно",
              },
            })}
          />
          {errors.email && (
            <p className="inputField__error">{errors.email.message}</p>
          )}
        </label>

        <label className="inputField">
          Пароль
          <input
            className="inputField__input"
            placeholder="Введите ваш пароль"
            type="password"
            name="password"
            {...register("password", {
              required: "Поле пароль обязательно к заполнению",
              minLength: {
                value: 2,
                message: "Пароль должен содержать не менее 2 знаков",
              },
              maxLength: {
                value: 30,
                message: "Пароль должен содержать не более 30 знаков",
              },
            })}
          />
          {errors.password && (
            <p className="inputField__error">{errors.password.message}</p>
          )}
        </label>
        {err ? <span className="inputField__error"> Неправильные почта или пароль </span>: " " }
      </FormInputs>
    </form>
  );
}
export default Login;
