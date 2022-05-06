import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import api from '../../utils/MainApi';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);


  /* Добавить проверку на Логин! */
  useEffect(() => {
    api.getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies.reverse())
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/movies' element={<Movies />} />
        <Route
          path='/saved-movies'
          element={
            <SavedMovies
              savedMovies={savedMovies}
            />
          } />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
