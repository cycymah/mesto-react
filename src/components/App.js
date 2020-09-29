import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import "../App.css";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main />
        <Footer />
      </div>

      <div className="modal page__modal modal_target_profile">
        <div className="modal__overlay"></div>
        <div className="form">
          <button
            className="form__close-btn form__close-btn_target_profile "
            type="button"
          ></button>
          <h2 className="form__title">Редактировать профиль</h2>
          <form
            action="#"
            className="form__section form__section_target_profile"
            name="formProfile"
            noValidate
          >
            <label className="form__field">
              <input
                type="text"
                className="form__input form__input_field_name"
                id="input-name"
                placeholder="Имя"
                name="profileName"
                required
                minLength="2"
                maxLength="40"
              />
              <span className="form__input-error" id="input-name-error"></span>
            </label>
            <label className="form__field">
              <input
                type="text"
                className="form__input form__input_field_about"
                id="input-about"
                placeholder="О себе"
                name="about"
                required
                minLength="2"
                maxLength="200"
              />
              <span className="form__input-error" id="input-about-error"></span>
            </label>
            <button className="form__submit-btn" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="modal page__modal modal_target_addCard">
        <div className="modal__overlay"></div>
        <div className="form">
          <button
            className="form__close-btn form__close-btn_target_add"
            type="button"
          ></button>
          <h2 className="form__title">Новое место</h2>
          <form
            action="#"
            className="form__section form__section_target_add"
            name="formAdd"
            noValidate
          >
            <label className="form__field">
              <input
                type="text"
                className="form__input form__input_field_title"
                id="title-input"
                placeholder="Название"
                name="name"
                minLength="1"
                maxLength="30"
                required
              />
              <span className="form__input-error" id="title-input-error"></span>
            </label>
            <label className="form__field">
              <input
                className="form__input form__input_field_src"
                id="src-input"
                placeholder="Ссылка на картинку"
                name="link"
                type="URL"
                required
              />
              <span className="form__input-error" id="src-input-error"></span>
            </label>
            <button className="form__submit-btn" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="modal page__modal modal_target_profile-avatar">
        <div className="modal__overlay"></div>
        <div className="form">
          <button
            className="form__close-btn form__close-btn_target_profile-avatar"
            type="button"
          ></button>
          <h2 className="form__title">Обновить автар</h2>
          <form
            action="#"
            className="form__section form__section_target_avatar"
            name="updateAvatar"
            noValidate
          >
            <label className="form__field">
              <input
                className="form__input form__input_field_avatar"
                id="avatar-input"
                placeholder="Ссылка на картинку"
                name="pictureSource"
                type="URL"
                required
              />
              <span className="form__input-error" id="avatar-input-error"></span>
            </label>
            <button className="form__submit-btn" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="modal page__modal modal_target_photoZoom">
        <div className="modal__overlay modal__overlay_background_dark"></div>
        <figure className="zoom">
          <button className="zoom__close-btn" type="button"></button>
          <img src="#" alt="" className="zoom__image" />
          <figcaption className="zoom__text-image"></figcaption>
        </figure>
      </div>

      <div className="modal page__modal modal_target_confirm">
        <div className="modal__overlay"></div>
        <div className="confirm">
          <button className="confirm__close-btn" type="button"></button>
          <h2 className="confirm__title">Вы уверены?</h2>
          <button className="confirm__confirm-btn" type="button">
            Да
          </button>
        </div>
      </div>

      <template id="listItem">
        <li className="elements__item">
          <button className="elements__trash" type="button"></button>
          <figure className="elements__item-card">
            <img src="#" alt="" className="elements__image" />
            <figcaption className="elements__image-content-box">
              <p className="elements__image-description"></p>
              <div className="elements__like-button-box">
                <button className="elements__like"></button>
                <span className="elements__like-counter">1</span>
              </div>
            </figcaption>
          </figure>
        </li>
      </template>
    </div>
  );
}

export default App;
