import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

const Card = ({ link, likes, name, onCardClick, cardOwner }) => {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = cardOwner === currentUser._id;
  const isLiked = likes.some(like => like._id === currentUser._id);

  const cardLikeButtonClassName = `elements__like ${
    isLiked ? 'elements__like_active' : ''
  }`;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `elements__trash ${
    isOwn ? '' : 'elements__trash_display_none'
  }`;

  useEffect(_ => {
    console.log(likes);
    console.log(cardOwner);
  }, []);

  //Функция открытия картинки по клику
  const handleCardClick = _ => {
    onCardClick({ link, name });
  };

  return (
    <>
      <li className="elements__item">
        <button className={cardDeleteButtonClassName} type="button" />
        <figure className="elements__item-card">
          <img
            onClick={handleCardClick}
            src={link}
            alt={name}
            className="elements__image"
          />
          <figcaption className="elements__image-content-box">
            <p className="elements__image-description">{name}</p>
            <div className="elements__like-button-box">
              <button className={cardLikeButtonClassName} />
              <span className="elements__like-counter">{likes.length}</span>
            </div>
          </figcaption>
        </figure>
      </li>
    </>
  );
};

export default Card;
