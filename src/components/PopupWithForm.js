import React from "react";

function PopupWithForm() {
  return (
    <div className="modal page__modal modal_target_profile">
      <div className="modal__overlay"></div>
      <div className="form">
        <button
          className="form__close-btn form__close-btn_target_profile "
          type="button"
        ></button>
        <h2 className="form__title">Редактировать профиль</h2>
        <form
          action="#"
          className="form__section form__section_target_profile"
          name="formProfile"
          noValidate
        >
        
          <button className="form__submit-btn" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
