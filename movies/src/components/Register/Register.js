import { useForm } from 'react-hook-form';
import FormInputs from "../FormInputs/FormInputs";

function Register ({ onRegister, err }) {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm(
    {mode: 'onChange'}
  );

  const onSubmit = (data, e) => {
   e.preventDefault();
   onRegister(data.name, data.email, data.password);
  };

  return (

    <form action="submit" onSubmit={handleSubmit(onSubmit)}>

      <FormInputs
        title="Добро пожаловать!"
        btnName="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="/signin"
        linkTitle="Войти"
        label="Имя"
        isValid={isValid}
       >

      <label className="inputField" >
         Имя
         <input className="inputField__input" 
         type="text" 
         placeholder="Введите ваше имя" 
         name="name" 
         {...register("name", {
          required: "Поле Имя обязательно к заполнению",
          pattern: {
            value: /^[A-Za-zА-Яа-я ]+$/,
            message: "Поле Имя может содержить только латиницу, кириллицу, пробел или дефис"
          },
          minLength: {
            value: 2,
            message: "Имя должно содержать не менее 2 знаков"},
          maxLength: {
            value: 30,
            message: "Имя должно содержать не более 30 знаков"
          }
        })}/>

        {errors.name && <p className="inputField__error">{errors.name.message}</p>}
      </label>
      
      <label className="inputField" > 
         E-mail
        <input 
        className="inputField__input" 
        placeholder="Введите ваш e-mail" 
        type="text" 
        name="email" 
        {...register("email", {
          required: "Поле E-mail обязательно к заполнению",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
            message: "Поле email заполнено некорректно"
        }
        })} />

       {errors.email && <p className="inputField__error">{errors.email.message}</p>}
     </label>

     <label className="inputField" > 
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
            message: "Пароль должен содержать не менее 2 знаков"},
          maxLength: {
            value: 30,
            message: "Пароль должен содержать не более 30 знаков"
          }
      })} />

      {errors.password && <p className="inputField__error">{errors.password.message}</p>}
    </label>
    {err ? <span className="inputField__error"> Пользователь с таким email уже зарегистрирован </span>: " " }

    </FormInputs>
  </form>
    )
}
export default Register;

