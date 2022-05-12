class Auth {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  };

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      credentials: 'include',
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
        name,
      })
    })
    .then(this._checkResponse)
  };

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(this._checkResponse)
  };

  logOut() {
    return fetch(`${this._baseUrl}/signout`, {
      credentials: 'include',
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  };
}

const auth = new Auth({
  /*baseUrl: 'https://api.bakirov.movies.nomoredomains.work',*/
  baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default auth;