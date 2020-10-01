import React, { useEffect } from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onAddPlace, onEditProfile, onCardClick }) {
  //Задаем состояния компонента
  const [userAvatar, setAvatar] = React.useState("");
  const [userDescription, setDescription] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [cards, setCards] = React.useState([]);

  //Делаем запрос к API для получениия данных пользователя
  useEffect(() => {
    const profileInfo = api.getProfileInformation("users/me");
    profileInfo
      .then(({ avatar, about, name }) => {
        setAvatar(avatar);
        setDescription(about);
        setUserName(name);
      })
      .catch((err) => console.log(err));
  }, []);

  //Запрос к API для получения карточек
  useEffect(() => {
    const getCards = api.getInitialCards("cards");
    getCards
      .then((dataCard) => {
        setCards(dataCard);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__avatar-box">
          <img
            src={userAvatar}
            alt="Фотография аватара"
            className="profile__avatar"
          />
          <button
            onClick={onEditAvatar}
            className="profile__edit-avatar-btn"
            type="button"
          >
            <div className="profile__edit-avatar-img" />
          </button>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__title-name">{userName}</h1>
          <button onClick={onEditProfile} className="profile__edit-btn" />
          <p className="profile__subtitle-name">{userDescription}</p>
        </div>
        <button onClick={onAddPlace} className="profile__add-button" />
      </section>
      <section className="elements">
        <ul className="elements__list">
          {
            //Перебираем список полученных карточек и возвращаем их в разметку
            cards.map((dataCard, i) => {
              return (
                <Card
                  card={dataCard}
                  onCardClick={onCardClick}
                  key={i}
                  name={dataCard.name}
                  link={dataCard.link}
                  likes={dataCard.likes.length}
                />
              );
            })
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
