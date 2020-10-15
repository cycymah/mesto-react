import React, { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/Api.js';
import Card from './Card.js';

const Main = ({ onEditAvatar, onAddPlace, onEditProfile, onCardClick }) => {
  const { name, about, avatar } = useContext(CurrentUserContext);

  //Задаем состояния компонента
  // const [userAvatar, setAvatar] = useState('');
  // const [userDescription, setDescription] = useState('');
  // const [userName, setUserName] = useState('');
  const [cards, setCards] = useState([]);

  //Делаем запрос к API для получениия данных пользователя
  // useEffect(_ => {
  //   const profileInfo = api.getProfileInformation('users/me');
  //   profileInfo
  //     .then(({ avatar, about, name }) => {
  //       setAvatar(avatar);
  //       setDescription(about);
  //       setUserName(name);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  //Запрос к API для получения карточек
  useEffect(_ => {
    const getCards = api.getInitialCards('cards');
    getCards
      .then(dataCard => {
        setCards(dataCard);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__avatar-box">
          <img
            src={avatar}
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
          <h1 className="profile__title-name">{name}</h1>
          <button onClick={onEditProfile} className="profile__edit-btn" />
          <p className="profile__subtitle-name">{about}</p>
        </div>
        <button onClick={onAddPlace} className="profile__add-button" />
      </section>
      <section className="elements">
        <ul className="elements__list">
          {
            //Перебираем список полученных карточек и возвращаем их в разметку
            cards.map(({ link, name, likes, _id, owner }) => {
              return (
                <Card
                  // card={{ link, name }}
                  onCardClick={onCardClick}
                  key={_id}
                  name={name}
                  link={link}
                  likes={likes}
                  cardOwner={owner._id}
                />
              );
            })
          }
        </ul>
      </section>
    </main>
  );
};

export default Main;
