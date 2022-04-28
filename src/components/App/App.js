import React from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <>
      <Header loggedIn={false} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
