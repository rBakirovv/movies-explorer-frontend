import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import api from '../../utils/MainApi';
import auth from '../../utils/Auth';
import moviesApi from '../../utils/MoviesApi';

function App() {

  const [currentUser, setCurrentUser] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);

  const [movies, setMovies] = useState([])
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        if (user.email) {
          setLoggedIn(true);
        }
      })
      .catch(() => {
        setLoggedIn(false);
      });
  }, [navigate]);

  useEffect(() => {
    if (loggedIn) {
      api
        .getUserInfo()
        .then((user) => {
          setCurrentUser({
            email: user.email,
            name: user.name,
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      api.getSavedMovies()
        .then((movie) => {
          setSavedMovies(movie);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      moviesApi.getMovies()
        .then((movie) => {
          setMovies(movie);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn]);

  function handleRegistration(data) {
    auth
      .register(data.email, data.password, data.name)
      .then(() => {
        setLoggedIn(true)
        navigate('/movies', { replace: true })
      })
      .catch((err) => {
        console.log(err)
      });
  };

  function handleLogOut() {
    auth.logOut();
    setLoggedIn(false);
    navigate('/', { replace: true })
  };

  function handleAuthorization(data) {
    auth
      .authorize(data.email, data.password)
      .then(() => {
        setLoggedIn(true)
        navigate('/movies', { replace: true })
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path='/'
          element={
            <Main loggedIn={loggedIn}
            />}
        />
        <Route path='/signup'
          element={
            <Register
              handleRegistration={handleRegistration}
            />}
        />
        <Route
          path='/signin'
          element={
            <Login
              handleAuthorization={handleAuthorization}
            />}
        />
        <Route
          path='/movies'
          element={
            <Movies
              movies={movies}
            />}
        />
        <Route
          path='/saved-movies'
          element={
            <SavedMovies
              savedMovies={savedMovies}
            />
          } />
        <Route
          path='/profile'
          element={
            <Profile
              handleLogOut={handleLogOut}
            />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
