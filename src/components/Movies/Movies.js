import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <>
      <Header loggedIn={true} />
      <SearchForm />
      <Footer />
    </>
  )
}

export default Movies;