import React from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route path='/'>
          <Header loggedIn={false} />
          <Main />
          <Footer />
        </Route>

        <Route path='*'>

        </Route>
      </Switch>
    </>
  );
}

export default App;
