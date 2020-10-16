import React, { useState, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  //   const currentUser = useContext(CurrentUserContext);
  const urlRef = useRef();
  const [userAvatar, setAvatar] = useState({ avatar: '' });

  const handleChangeName = evt => {
    const targetAvatar = evt.target.value;
    setAvatar(targetAvatar);
  };
  const handleSubmit = evt => {
    evt.preventDefault();

    onUpdateAvatar({ avatar: userAvatar });
  };

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="profile-avatar"
      title="Обновить автар"
      textButton="Сохранить"
    >
      <label className="form__field">
        <input
          className="form__input form__input_field_avatar"
          id="avatar-input"
          placeholder="Ссылка на картинку"
          name="pictureSource"
          type="URL"
          //   value={userAvatar || ''}
          onChange={handleChangeName}
          required
        />
        <span className="form__input-error" id="avatar-input-error"></span>
      </label>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
