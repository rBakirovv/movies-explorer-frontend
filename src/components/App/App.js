import React from 'react';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/saved-movies' element={<SavedMovies />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
