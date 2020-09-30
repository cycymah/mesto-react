import React from "react";

function ImagePopup() {
  return (
    <div className="modal page__modal modal_target_photoZoom">
    <div className="modal__overlay modal__overlay_background_dark"></div>
    <figure className="zoom">
      <button className="zoom__close-btn" type="button"></button>
      <img src="#" alt="" className="zoom__image" />
      <figcaption className="zoom__text-image"></figcaption>
    </figure>
  </div>
  );
}

export default ImagePopup;