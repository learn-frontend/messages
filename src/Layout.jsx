import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from './AuthContext';

const Layout = ({ children }) => {
  const auth = useContext(AuthContext);

  const onLogout = () => {
    auth.setLogin('');
  };

  return (
    <>
      {auth.login && (
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
              <div className="navbar-nav">
                <NavLink to="/home" className="nav-link" activeClassName="active">Главная</NavLink>
                <NavLink to="/inbox" className="nav-link" activeClassName="active">Входящие</NavLink>
                <NavLink to="/about" className="nav-link" activeClassName="active">О приложении</NavLink>
              </div>
              <div className="d-flex align-items-center">
                <div className="mx-2 text-light">
                  {auth.login}
                </div>
                <button className="btn btn-outline-light" onClick={onLogout}>Выход</button>
              </div>
            </div>
          </div>
        </nav>
      )}
      <div className="container-fluid">
        {children}
      </div>
    </>
  )
}

export default Layout;