import React from 'react';

function Main() {
  return (
    <main class="content page__content">
    <section class="profile">
      <div class="profile__avatar-box">
        <img src="#" alt="Фотография аватара" class="profile__avatar" />
        <button class="profile__edit-avatar-btn" type="button">
          <div class="profile__edit-avatar-img"></div>
        </button>
      </div>
      <div class="profile__profile-info">
        <h1 class="profile__title-name">Солнышкин Иван</h1>
        <button class="profile__edit-btn"></button>
        <p class="profile__subtitle-name">Путешественник-любитель</p>
      </div>
      <button class="profile__add-button"></button>
    </section>
    <section class="elements">
      <ul class="elements__list">

      </ul>
    </section>
  </main>
  );
}

export default Main;