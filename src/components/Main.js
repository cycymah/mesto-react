import React from 'react';

function Main() {
  const handleEditAvatarClick = () => {
    document.querySelector('.modal_target_profile-avatar').classList.add('modal_active');
  };
  const handleEditProfileClick = () => {
    document.querySelector('.modal_target_profile').classList.add('modal_active');
  };
  const handleAddPlaceClick = () => {
    document.querySelector('.modal_target_addCard').classList.add('modal_active');
  };

  return (
    <main className="content page__content">
    <section className="profile">
      <div className="profile__avatar-box">
        <img src="#" alt="Фотография аватара" className="profile__avatar" />
        <button onClick={handleEditAvatarClick} className="profile__edit-avatar-btn" type="button">
          <div className="profile__edit-avatar-img"></div>
        </button>
      </div>
      <div className="profile__profile-info">
        <h1 className="profile__title-name">Солнышкин Иван</h1>
        <button onClick={handleEditProfileClick} className="profile__edit-btn"></button>
        <p className="profile__subtitle-name">Путешественник-любитель</p>
      </div>
      <button onClick={handleAddPlaceClick} className="profile__add-button"></button>
    </section>
    <section className="elements">
      <ul className="elements__list">

      </ul>
    </section>
  </main>
  );
}

export default Main;