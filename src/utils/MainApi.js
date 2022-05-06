class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  };

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse);
  };

  updateUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        email: data.email,
        name: data.name
      })
    })
      .then(this._checkResponse);
  };

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: 'include',
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse);
  };

  createNewMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: 'include',
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
      })
    })
      .then(this._checkResponse);
  };

  deleteMovie(_id) {
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      credentials: 'include', 
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse);
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    };
  };
}

const api = new MainApi({
  baseUrl: 'https://api.bakirov.movies.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;