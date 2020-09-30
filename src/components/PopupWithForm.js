import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`modal page__modal modal_target_${props.name} ${
        props.isOpen ? "modal_active" : ""
      }`}
    >
      <div onClick={props.onClose} className="modal__overlay"></div>
      <div className="form">
        <button
          className={`form__close-btn form__close-btn_target_${props.name}`}
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="form__title">{props.title}</h2>
        <form
          action="#"
          className={`form__section form__section_target_${props.name}`}
          name={props.name}
          noValidate
        >
          {props.children}
          <button className="form__submit-btn" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
