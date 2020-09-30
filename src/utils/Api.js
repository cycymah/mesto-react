class Api {
  constructor(options) {
    this._serverUrl = options.url;
    this._headers = options.headers;
  }

  getInitialCards(cardsUrl) {
    return fetch(`${this._serverUrl}/${cardsUrl}`, {
        method: "GET",
        headers: this._headers
      })
      .then(this._errorCheck);
  }

  getProfileInformation(profileUrl) {
    return fetch(`${this._serverUrl}/${profileUrl}`, {
        method: "GET",
        headers: this._headers
      })
      .then(this._errorCheck);
  }

  addNewInformation(data, urlCard) {
    return fetch(`${this._serverUrl}/${urlCard}`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(data)
      })
      .then(this._errorCheck);
  }

  updateInformation(data, url) {
    return fetch(`${this._serverUrl}/${url}`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify(data)
      })
      .then(this._errorCheck);
  }

  removeCard(id) {
    return fetch(`${this._serverUrl}/cards/${id}`, {
        method: "DELETE",
        headers: this._headers,
      })
      .then(this._errorCheck);
  }

  putInformation(id) {
    return fetch(`${this._serverUrl}/${id}`, {
        method: "PUT",
        headers: this._headers,
      })
      .then(this._errorCheck);
  }

  putLike(id) {
    return fetch(`${this._serverUrl}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    })
    .then(this._errorCheck);
  }

  deleteLike(id) {
    return fetch(`${this._serverUrl}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._errorCheck);
  }

  _errorCheck(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-15',
  headers: {
    'Content-Type': 'application/json',
    authorization: 'e25f3c22-3477-48f3-a377-dbd53dc14614'
  }
});

export default api;
