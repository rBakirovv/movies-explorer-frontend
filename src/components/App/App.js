import React from 'react';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/signin' element={<Login />} />
      <Route path='signup' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
