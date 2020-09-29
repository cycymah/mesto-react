import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import '../App.css';

function App() {
  return (
    <div class="page">
      <div class="page__container">
        <Header />
        <Main />
        <Footer />
      </div>
  
  <div class="modal page__modal modal_target_profile">
    <div class="modal__overlay"></div>
    <div class="form">
      <button class="form__close-btn form__close-btn_target_profile " type="button"></button>
      <h2 class="form__title">
        Редактировать профиль
      </h2>
      <form action="#" class="form__section form__section_target_profile" name="formProfile" novalidate>
        <label class="form__field">
          <input type="text" class="form__input form__input_field_name" id="input-name" placeholder="Имя" name="profileName"
            required minlength="2" maxlength="40" />
          <span class="form__input-error" id="input-name-error"></span>
        </label>
        <label class="form__field">
          <input type="text" class="form__input form__input_field_about" id="input-about" placeholder="О себе"
            name="about" required minlength="2" maxlength="200" />
          <span class="form__input-error" id="input-about-error"></span>
        </label>
        <button class="form__submit-btn" type="submit">Сохранить</button>
      </form>
    </div>
  </div>

  <div class="modal page__modal modal_target_addCard">
    <div class="modal__overlay"></div>
    <div class="form">
      <button class="form__close-btn form__close-btn_target_add" type="button"></button>
      <h2 class="form__title">
        Новое место
      </h2>
      <form action="#" class="form__section form__section_target_add" name="formAdd" novalidate>
        <label class="form__field">
          <input type="text" class="form__input form__input_field_title" id="title-input" placeholder="Название"
            name="name" minlength="1" maxlength="30" required />
          <span class="form__input-error" id="title-input-error"></span>
        </label>
        <label class="form__field">
          <input class="form__input form__input_field_src" id="src-input" placeholder="Ссылка на картинку"
            name="link" type="URL" required />
          <span class="form__input-error" id="src-input-error"></span>
        </label>
        <button class="form__submit-btn" type="submit">Создать</button>
      </form>
    </div>
  </div>

  <div class="modal page__modal modal_target_profile-avatar">
    <div class="modal__overlay"></div>
    <div class="form">
      <button class="form__close-btn form__close-btn_target_profile-avatar" type="button"></button>
      <h2 class="form__title">
        Обновить автар
      </h2>
      <form action="#" class="form__section form__section_target_avatar" name="updateAvatar" novalidate>
        <label class="form__field">
          <input class="form__input form__input_field_avatar" id="avatar-input" placeholder="Ссылка на картинку"
            name="pictureSource" type="URL" required />
          <span class="form__input-error" id="avatar-input-error"></span>
        </label>
        <button class="form__submit-btn" type="submit">Сохранить</button>
      </form>
    </div>
  </div>

  <div class="modal page__modal modal_target_photoZoom">
    <div class="modal__overlay modal__overlay_background_dark"></div>
    <figure class="zoom">
      <button class="zoom__close-btn" type="button"></button>
      <img src="#" alt="" class="zoom__image" />
      <figcaption class="zoom__text-image">

      </figcaption>
    </figure>
  </div>

  <div class="modal page__modal modal_target_confirm">
    <div class="modal__overlay"></div>
    <div class="confirm">
      <button class="confirm__close-btn" type="button"></button>
      <h2 class="confirm__title">
        Вы уверены?
      </h2>
      <button class="confirm__confirm-btn" type="button">Да</button>
    </div>
  </div>


  <template id="listItem">
    <li class="elements__item">
      <button class="elements__trash" type="button"></button>
      <figure class="elements__item-card">
        <img src="#" alt="" class="elements__image" />
        <figcaption class="elements__image-content-box">
          <p class="elements__image-description">
          </p>
          <div class="elements__like-button-box">
            <button class="elements__like"></button>
            <span class="elements__like-counter">1</span>
          </div>
        </figcaption>
      </figure>
    </li>
  </template>
 </div>

  );
}

export default App;
