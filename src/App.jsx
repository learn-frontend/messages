import React from 'react';
import { HashRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';

import HomePage from './HomePage';
import InboxPage from './InboxPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

const App = () => (
  <HashRouter>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link" activeClassName="active" exact>Главная</NavLink>
            <NavLink to="/inbox" className="nav-link" activeClassName="active">Входящие</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">О приложении</NavLink>
          </div>
        </div>
      </div>
    </nav>
    <div className="container-fluid">
      <Switch>
        <Route path="/" exact>
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
    </div>
  </HashRouter>
);

export default App;