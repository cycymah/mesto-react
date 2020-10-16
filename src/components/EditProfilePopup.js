import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [userName, setName] = useState({ name: '' });
  const [description, setDescription] = useState({ about: '' });

  // console.log(userName, description);

  // const handleChange = evt => {
  //   // const targetProfile = evt.target.profileName.value;
  //   // const targetAbout = evt.target.about.value;
  //   // console.log(targetProfile, targetAbout);
  //   // setName({ name: targetProfile });
  //   // setDescription({ about: targetAbout });
  // };
  const handleChangeName = evt => {
    const targetName = evt.target.value;
    setName(targetName);
  };

  const handleChangeDescription = evt => {
    const targetAbout = evt.target.value;
    setDescription(targetAbout);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // const targetProfile = evt.target.profileName.value;
    // const targetAbout = evt.target.about.value;
    // console.log(name, description);
    // console.log(name, description);

    onUpdateUser({ name: userName, about: description });
  };

  useEffect(
    _ => {
      setName(currentUser.name);
      setDescription(currentUser.about);
    },
    [currentUser]
  );

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      name="profile"
      title="Редактировать профиль"
      textButton="Сохранить"
      onSubmit={handleSubmit}
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
          value={userName || ''}
          onChange={handleChangeName}
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
          value={description || ''}
          onChange={handleChangeDescription}
        />
        <span className="form__input-error" id="input-about-error"></span>
      </label>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
