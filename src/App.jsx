import React, { useState } from 'react';
import { HashRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';

import HomePage from './HomePage';
import InboxPage from './InboxPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import AuthPage from './AuthPage';
import Layout from './Layout';

import AuthContext from './AuthContext';

const App = () => {
  const [login, setLogin] = useState('');

  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      <HashRouter>
        <Layout>
          <Switch>
            <Route path="/" exact>
              {login ? <Redirect to="/home" /> : <AuthPage />}
            </Route>
            {login && (
              <Switch>
                <Route path="/home">
                  <HomePage />
                </Route>
                <Route path="/inbox/:id?">
                  <InboxPage />
                </Route>
                <Route path="/about">
                  <AboutPage />
                </Route>
                <Route path="*">
                  <NotFoundPage />
                </Route>
              </Switch>
            )}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Layout>
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;