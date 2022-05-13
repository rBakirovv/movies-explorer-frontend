import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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

function App() {

  const [currentUser, setCurrentUser] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [currentMovies, setCurrentMovies] = useState(0);
  const [defaultMovies, setDefaultMovies] = useState(0);
  const [moreMovies, setMoreMovies] = useState(4);

  const [searchedMovies, setSearchedMovies] = useState('');
  const [searchedSavedMovies, setSearchedSavedMovies] = useState('');
  const [isShortMovie, setIsShortMovie] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [isApiError, setIsApiError] = useState(false);

  const [isEditButton, setIsEditButton] = useState(false);

  const [isReadOnly, setIsReadOnly] = useState(true);

  const navigate = useNavigate();

  const currentPath = useLocation();

  const BASE_MOVIES_URL = 'https://api.nomoreparties.co/';

  const DESCTOP_CURRENT = 16;
  const DESCTOP_LOAD_MORE = 4;

  const LAPTOP_CURRENT = 12;
  const LAPTOP_LOAD_MORE = 3;

  const TABLET_CURRENT = 8;
  const TABLET_LOAD_MORE = 2;

  const MOBILE_CURRENT = 5;
  const MOBILE_LOAD_MORE = 2;

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
        })
        .catch((err) => {
          console.log(err);
          setIsApiError(true);
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
    if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
      setMoreMovies(LAPTOP_LOAD_MORE);
      setDefaultMovies(LAPTOP_CURRENT);

    } else if (window.innerWidth <= 1000 && window.innerWidth > 767) {
      setMoreMovies(TABLET_LOAD_MORE);
      setDefaultMovies(TABLET_CURRENT);

    } else if (window.innerWidth <= 767) {
      setMoreMovies(MOBILE_LOAD_MORE);
      setDefaultMovies(MOBILE_CURRENT);

    } else if (window.innerWidth > 1280) {
      setMoreMovies(DESCTOP_LOAD_MORE);
      setDefaultMovies(DESCTOP_CURRENT);
    }
  };

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

  function handleEditProfile(email, name) {
    api.updateUserInfo(email, name)
      .then((data) => {
        setCurrentUser({
          email: data.email,
          name: data.name,
        })
        setIsEditButton(false)
      })
      .catch((err) => {
        console.log(err)
      });
  };

  function handleEdiProfileClick() {
    setIsEditButton(true);
    setIsReadOnly(false);
  };

  function serachMovies(data) {
    currentPath.pathname === '/movies'
      ? setSearchedMovies(data)
      : setSearchedSavedMovies(data)
    setCurrentMovies(defaultMovies);
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
                />
              } />
            <Route
              path='/profile'
              element={
                <Profile
                  isEditButton={isEditButton}
                  isReadOnly={isReadOnly}
                  handleLogOut={handleLogOut}
                  handleEditProfile={handleEditProfile}
                  handleEdiProfileClick={handleEdiProfileClick}
                />}
            />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CheckBoxContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
