import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from 'react-hook-form';
import Header from "../Header/Header";

function Profile({ onUpdateUser, onLogOut }) {
  const user = useContext(CurrentUserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm(
    {mode: 'onChange', defaultValues: { name: "hhh", email: "jjj"}}
  );

  const onSubmit = (e, data) => {
    e.preventDefault();
    onUpdateUser(data.name, data.email);
   };

   const onSignOut = (e) => {
    e.preventDefault();
    onLogOut();
   }


  return (
    <section className="profile">
      <Header />

      <div className="profile__content">
        <h1 className="profile__title">{`${user.data.name}`}</h1>

        <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="profile__form-inputs">
            <label className="profile__form-input-label">Имя</label>
            <input
              disabled
              type="text"
              className="profile__form-input"
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
              })}
              {...errors.name && <p className="inputField__error">{errors.name.message}</p>}

                          />
          </div>

          <div className="profile__form-inputs">
            <label className="profile__form-input-label">E-mail</label>
            <input
              disabled
              type="text"
              className="profile__form-input"
              name="email"
              {...register("email", {
                required: "Поле E-mail обязательно к заполнению",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
                  message: "Поле email заполнено некорректно"
              }
              })} 
      
             {...errors.email && <p className="inputField__error">{errors.email.message}</p>}
              
            />
          </div>

          <div className="profile__form-buttons">
            <button type="submit" 
            className="profile__form-button"
            aria-disabled={!isValid}>
              Редактировать
            </button>
            <button type="button" className="profile__form-button" onClick={onSignOut}>
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Profile;
