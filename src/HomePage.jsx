import React, { useContext } from 'react';

import AuthContext from './AuthContext';

const HomePage = () => {
  const auth = useContext(AuthContext);

  return (
    <div className="pt-3">
      <h1>Главная страница</h1>
      <p>Добро пожаловать, {auth.login}</p>
    </div>
  );
}

export default HomePage;