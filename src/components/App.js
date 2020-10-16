import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';

const App = _ => {
  //Задаем состояния компонента
  const [isEditProfilePopupOpen, setProfileStatus] = useState(false);
  const [isAddPlacePopupOpen, setPlaceStatus] = useState(false);
  const [isEditAvatarPopupOpen, setAvatarStatus] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(_ => {
    const userInformation = api.getProfileInformation('users/me');
    userInformation
      .then(userData => {
        setCurrentUser(userData);
      })
      .catch(err => console.log(err));
  }, []);

  //Запрос к API для получения карточек
  useEffect(_ => {
    const getCards = api.getInitialCards('cards');
    getCards
      .then(dataCard => {
        setCards(dataCard);
      })
      .catch(err => console.log(err));
  }, []);

  //Изменения состояния для закрытия попапов
  const closeAllPopups = _ => {
    setAvatarStatus(false);
    setPlaceStatus(false);
    setProfileStatus(false);
    setSelectedCard(false);
  };
  //Проверяем лайки, меняем статус запросом к api и создаем новый массив карточек в стейт
  const handleCardLike = ({ likes, idCard }) => {
    const isLiked = likes.some(like => like._id === currentUser._id);
    api
      .changeLikeCardStatus(idCard, !isLiked)
      .then(newCard => {
        const newCards = cards.map(singleCard =>
          singleCard._id === idCard ? newCard : singleCard
        );
        setCards(newCards);
      })
      .catch(err => console.log(err));
  };

  //Удаление карточки запрос к api и обновление стейта
  const handleCardDelete = idCard => {
    api
      .removeCard(idCard)
      .then(data => {
        const newCardList = cards.filter(card => idCard !== card._id);
        setCards(newCardList);
      })
      .catch(err => console.log(err));
  };

  //Функция для открытия увеличенной карточки по клику
  const handleCardClick = ({ link, name }) => {
    setSelectedCard({ status: true, src: link, name: name });
  };

  const handleUpdateAvatar = ({ avatar }) => {
    console.log(avatar);
    api
      .updateUserAvatar({ avatar })
      .then(UserData => {
        setCurrentUser(UserData);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  };

  const handleUpdateUser = ({ name, about }) => {
    api
      .updateUserInformation({ name, about })
      .then(UserData => {
        setCurrentUser(UserData);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  };

  //Функции изменения состояния для открытия попапов
  const handleEditAvatarClick = _ => {
    setAvatarStatus(true);
  };
  const handleEditProfileClick = _ => {
    setProfileStatus(true);
  };
  const handleAddPlaceClick = _ => {
    setPlaceStatus(true);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onCardClick={handleCardClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardsLike={handleCardLike}
            onCardsDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
        </div>

        {/* Попап профайла */}
        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        {/* Попап добавления новых карточек */}
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          name="addCard"
          title="Новое место"
          textButton="Создать"
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

        {/* Попап редактирования аватара */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        {/* Попап подтверждения действий */}
        <PopupWithForm name="confirm" title="Вы уверены?" textButton="Да" />

        {/* Попап увеличенной картинки  */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
