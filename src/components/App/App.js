import React from 'react';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
