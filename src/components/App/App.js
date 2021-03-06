import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CheckBoxSavedMoviesContext, CurrentUserContext } from '../../contexts/CurrentUserContext';
import { CheckBoxContext } from '../../contexts/CurrentUserContext';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import api from '../../utils/MainApi';
import auth from '../../utils/Auth';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import {
  BASE_MOVIES_URL,
  DESCTOP_CURRENT,
  DESCTOP_LOAD_MORE,
  LAPTOP_CURRENT,
  LAPTOP_LOAD_MORE,
  TABLET_CURRENT,
  TABLET_LOAD_MORE,
  MOBILE_CURRENT,
  MOBILE_LOAD_MORE,
} from '../../utils/constants';
import ProtectedAuthRoute from '../ProtectedAuthRoute/ProtectedAuthRoute';

function App() {

  const [currentUser, setCurrentUser] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [currentMovies, setCurrentMovies] = useState(JSON.parse(localStorage.getItem('currentMovies' || 0)));
  const [defaultMovies, setDefaultMovies] = useState(0);
  const [moreMovies, setMoreMovies] = useState(0);

  const [searchedMovies, setSearchedMovies] = useState(JSON.parse(localStorage.getItem('searchedMovies' || '')));
  const [searchedSavedMovies, setSearchedSavedMovies] = useState('');

  const [isShortMovie, setIsShortMovie] = useState(JSON.parse(localStorage.getItem('isShortMovie' || false)));
  const [isShortSavedMovie, setIsShortSavedMovie] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [isApiError, setIsApiError] = useState(false);

  const [errorData, setErrorData] = useState('');

  const [isSuccessChange, setIsSuccessChange] = useState(false);

  const [isEditButton, setIsEditButton] = useState(false);

  const [isReadOnly, setIsReadOnly] = useState(true);

  const navigate = useNavigate();

  const currentPath = useLocation();

  useEffect(() => {
    api.getUserInfo()
      .then((user) => {
        if (user.email) {
          setLoggedIn(true);
          navigate(currentPath.pathname, { replace: true })
        }
      })
      .catch(() => {
        setLoggedIn(false);
      });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      api.getUserInfo()
        .then((user) => {
          setCurrentUser({
            email: user.email,
            name: user.name,
            _id: user._id
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
          setIsLoading(false)
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
          setIsApiError(false);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn]);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", resizeHandler);
      resizeHandler();
    }, 500)
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  function resizeHandler() {
    if (window.innerWidth < 1280 && window.innerWidth > 1000) {
      setMoreMovies(LAPTOP_LOAD_MORE);
      setDefaultMovies(LAPTOP_CURRENT);

    } else if (window.innerWidth <= 1000 && window.innerWidth > 767) {
      setMoreMovies(TABLET_LOAD_MORE);
      setDefaultMovies(TABLET_CURRENT);

    } else if (window.innerWidth <= 767) {
      setMoreMovies(MOBILE_LOAD_MORE);
      setDefaultMovies(MOBILE_CURRENT);

    } else if (window.innerWidth >= 1280) {
      setMoreMovies(DESCTOP_LOAD_MORE);
      setDefaultMovies(DESCTOP_CURRENT);
    }
    localStorage.setItem('currentMovies', JSON.stringify(defaultMovies));
  };

  function handleRegistration(data) {
    auth
      .register(data.email, data.password, data.name)
      .then(() => {
        setLoggedIn(true)
        navigate('/movies', { replace: true })
      })
      .catch((err) => {
        setErrorData(err)
        console.log(err)
      });
  };

  function handleLogOut() {
    auth.logOut();
    setLoggedIn(false);
    setIsShortMovie(false);
    setSearchedMovies('');
    localStorage.clear()

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
        setErrorData(err)
        console.log(err)
      });
  };

  function handleEditProfile(email, name) {
    api.updateUserInfo(email, name)
      .then((data) => {
        setCurrentUser({
          email: data.email,
          name: data.name,
        })
        setIsEditButton(false);
        setErrorData('');
        setIsSuccessChange(true);
      })
      .catch((err) => {
        setErrorData(err)
        console.log(err)
      });
  };

  function handleEdiProfileClick() {
    setIsEditButton(true);
    setIsReadOnly(false);
  };

  function serachMovies(data) {
    if (currentPath.pathname === '/movies') {
      setSearchedMovies(data);
      localStorage.setItem('searchedMovies', JSON.stringify(data));
    } else {
      setSearchedSavedMovies(data)
    }
    setCurrentMovies(defaultMovies);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  function loadMoreMovies() {
    setCurrentMovies(currentMovies + moreMovies);
  };

  function handleLikeMovie(movie) {
    api.createNewMovie(
      movie.country = 'Undefined',
      movie.director = 'Undefined',
      movie.duration,
      movie.year = 'Undefined',
      movie.description = 'Undefined',
      movie.url = BASE_MOVIES_URL + movie.url,
      movie.trailerLink,
      movie.nameRU,
      movie.nameEN = 'Undefined',
      movie.thumbnail = BASE_MOVIES_URL + movie.url,
      movie.id,
    )
      .then((updatedSavedMovies) => {
        setSavedMovies([updatedSavedMovies, ...savedMovies])
      })
      .catch((err) => {
        console.log(err)
      });
  };

  function handleMovieDelete(movie) {
    api.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((c) => c._id !== movie._id));
      })
      .catch(err => {
        console.log(err)
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CheckBoxContext.Provider value={{ isShortMovie, setIsShortMovie }}>
        <CheckBoxSavedMoviesContext.Provider value={{ isShortSavedMovie, setIsShortSavedMovie }}>
          <Routes>
            <Route
              path='/'
              element={
                <Main loggedIn={loggedIn}
                />}
            />
            <Route element={<ProtectedAuthRoute loggedIn={loggedIn} />}>
              <Route path='/signup'
                element={
                  <Register
                    errorData={errorData}
                    setErrorData={setErrorData}
                    handleRegistration={handleRegistration}
                  />}
              />
              <Route
                path='/signin'
                element={
                  <Login
                    errorData={errorData}
                    setErrorData={setErrorData}
                    handleAuthorization={handleAuthorization}
                  />}
              />
            </Route>
            <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
              <Route
                path='/movies'
                element={
                  <Movies
                    movies={movies}
                    savedMovies={savedMovies}
                    searchedMovies={searchedMovies}
                    currentMovies={currentMovies}
                    isLoading={isLoading}
                    isApiError={isApiError}
                    setCurrentMovies={setCurrentMovies}
                    loadMoreMovies={loadMoreMovies}
                    handleLikeMovie={handleLikeMovie}
                    handleMovieDelete={handleMovieDelete}
                    serachMovies={serachMovies}
                  />}
              />
              <Route
                path='/saved-movies'
                element={
                  <SavedMovies
                    savedMovies={savedMovies}
                    searchedMovies={searchedSavedMovies}
                    isLoading={isLoading}
                    serachMovies={serachMovies}
                    handleMovieDelete={handleMovieDelete}
                    setSearchedSavedMovies={setSearchedSavedMovies}
                  />
                } />
              <Route
                path='/profile'
                element={
                  <Profile
                    isEditButton={isEditButton}
                    isReadOnly={isReadOnly}
                    isSuccessChange={isSuccessChange}
                    errorData={errorData}
                    setErrorData={setErrorData}
                    setIsEditButton={setIsEditButton}
                    setIsReadOnly={setIsReadOnly}
                    setIsSuccessChange={setIsSuccessChange}
                    handleLogOut={handleLogOut}
                    handleEditProfile={handleEditProfile}
                    handleEdiProfileClick={handleEdiProfileClick}
                  />}
              />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CheckBoxSavedMoviesContext.Provider>
      </CheckBoxContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
