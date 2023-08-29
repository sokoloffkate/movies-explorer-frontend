import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";

function Profile({ onUpdateUser, onLogOut, loggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const [disabled, setDisabled] = useState(true);
  const [btnHide, setBtnHide] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(true);
  // const [typeBtn, setTypeBtn] = useState("button")

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", defaultValues: { name: "", email: "" } });

  const userName = watch("name");
  const userEmail = watch("email");

  const handleEditBtn = (e) => {
    e.preventDefault();
    setBtnHide(false);
    setDisabled(false);
  };

  useEffect(() => {
    if (
      (currentUser.name !== userName || currentUser.email !== userEmail) &&
      isValid
    ) {
      setBtnDisabled(false);
    }
  }, [userName, userEmail, isValid]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    setDisabled(true);
    setBtnHide(true);
    onUpdateUser({ name: data.name, email: data.email });
  };

  useEffect(() => {
    reset(currentUser);
  }, [currentUser]);

  const onSignOut = (e) => {
    e.preventDefault();
    onLogOut();
  };

  return (
    <section className="profile">
      <Header />

      <div className="profile__content">
        <h1 className="profile__title">Привет, {`${currentUser.name}`}!</h1>

        <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="profile__form-inputs">
            <label className="profile__form-input-label">Имя</label>
            <input
              disabled={disabled}
              type="text"
              className="profile__form-input"
              name="name"
              {...register("name", {
                required: "Поле Имя обязательно к заполнению",
                pattern: {
                  value: /^[A-Za-zА-Яа-я ]+$/,
                  message:
                    "Поле Имя может содержить только латиницу, кириллицу, пробел или дефис",
                },
                minLength: {
                  value: 2,
                  message: "Имя должно содержать не менее 2 знаков",
                },
                maxLength: {
                  value: 30,
                  message: "Имя должно содержать не более 30 знаков",
                },
              })}
            />
          </div>
          {errors.name && (
            <span className="profile__form-input-error">
              {errors.name.message}
            </span>
          )}

          <div className="profile__form-inputs">
            <label className="profile__form-input-label">E-mail</label>
            <input
              disabled={disabled}
              type="text"
              className="profile__form-input"
              name="email"
              {...register("email", {
                required: "Поле E-mail обязательно к заполнению",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Поле email заполнено некорректно",
                },
              })}
            />
          </div>
          {errors.email && (
            <span className="profile__form-input-error">
              {errors.email.message}
            </span>
          )}

          <div className="profile__form-buttons">
            {btnHide ? (
              <button
                type="button"
                className="profile__form-button"
                onClick={handleEditBtn}
              >
                Редактировать
              </button>) : (
              <button
                type="submit"
                className="profile__form-button"
                disabled={btnDisabled}
              >
                Cохранить
              </button>)
              }
            <button
              type="submit"
              className="profile__form-button"
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Profile;
