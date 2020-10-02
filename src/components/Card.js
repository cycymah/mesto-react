import React from "react";

function Card({ link, likes, name, onCardClick }) {
  //Функция открытия картинки по клику
  const handleCardClick = () => {
    onCardClick({link, name});
  };

  return (
    <>
      <li className="elements__item">
        <button className="elements__trash" type="button" />
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
              <button className="elements__like" />
              <span className="elements__like-counter">{likes}</span>
            </div>
          </figcaption>
        </figure>
      </li>
    </>
  );
}

export default Card;
