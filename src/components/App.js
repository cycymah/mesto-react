import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setProfileStatus] = React.useState(false);
  const [isAddPlacePopupOpen, setPlaceStatus] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarStatus] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');
  
  const handleCardClick = (card) => {
  };

  const handleEditAvatarClick = () => {
    setAvatarStatus(true);
  };
  const handleEditProfileClick = () => {
    setProfileStatus(true);
  };
  const handleAddPlaceClick = () => {
    setPlaceStatus(true);
  };

  const closeAllPopups = () => {
    setAvatarStatus(false);
    setPlaceStatus(false);
    setProfileStatus(false);
    setSelectedCard(false);
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
        name="profile"
        title="Редактировать профиль"
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
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
        name="addCard"
        title="Новое место"
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
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen}
        name="profile-avatar"
        title="Обновить автар"
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
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?" />
      <ImagePopup card ={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
