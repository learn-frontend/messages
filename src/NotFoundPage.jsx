import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="text-center">
      <h1 className="display-1 py-3">404</h1>
      <p>Страница не найдена</p>
      <button className="btn btn-primary" onClick={goBack}>Назад</button>
    </div>
  );
}

export default NotFoundPage;