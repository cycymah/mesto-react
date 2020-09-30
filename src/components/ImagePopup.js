import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`modal page__modal modal_target_photoZoom ${
        props.card.status ? "modal_active" : ""
      }`}
    >
      <div onClick={props.onClose} className="modal__overlay modal__overlay_background_dark"></div>
      <figure className="zoom">
        <button
          onClick={props.onClose}
          className="zoom__close-btn"
          type="button"
        ></button>
        <img src={props.card.src} alt="" className="zoom__image" />
        <figcaption className="zoom__text-image">{props.card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
