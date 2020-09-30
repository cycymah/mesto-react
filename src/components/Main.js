import React, { useEffect } from "react";
import api from "../utils/Api.js";

function Main(props) {
  const [userAvatar, setAvatar] = React.useState("");
  const [userDescription, setDescription] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    const profileInfo = api.getProfileInformation("users/me");
    const getCards = api.getInitialCards('cards');
    

    profileInfo
      .then((data) => {
        setAvatar(data.avatar);
        setDescription(data.about);
        setUserName(data.name);
      })
      .catch((err) => console.log(err));
    
      getCards.then(dataCard => {
        setCards(dataCard);
      }).catch(err => console.log(err));
  });

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
            onClick={props.onEditAvatar}
            className="profile__edit-avatar-btn"
            type="button"
          >
            <div className="profile__edit-avatar-img"></div>
          </button>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__title-name">{userName}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__edit-btn"
          ></button>
          <p className="profile__subtitle-name">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-button"
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">


        </ul>
      </section>
    </main>
  );
}

export default Main;
