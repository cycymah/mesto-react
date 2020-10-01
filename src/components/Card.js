import React from "react";

function Card(props) {
  //Функция открытия картинки по клику
  const handleCardClick = () => {
    props.onCardClick(props.card);
  };

  return (
    <>
      <li className="elements__item">
        <button className="elements__trash" type="button" />
        <figure className="elements__item-card">
          <img
            onClick={handleCardClick}
            src={props.link}
            alt={props.name}
            className="elements__image"
          />
          <figcaption className="elements__image-content-box">
            <p className="elements__image-description">{props.name}</p>
            <div className="elements__like-button-box">
              <button className="elements__like" />
              <span className="elements__like-counter">{props.likes}</span>
            </div>
          </figcaption>
        </figure>
      </li>
    </>
  );
}

export default Card;