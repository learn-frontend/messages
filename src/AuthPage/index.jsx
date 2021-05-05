import React, { useState, useContext } from 'react';

import AuthContext from '../AuthContext';

import './style.scss';

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const [values, setValues] = useState({ login: '', password: '' });
  const [errors, setErrors] = useState({ login: null, password: null });

  const onChangeField = (event) => {
    const { value, name } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    if (!values.login) {
      errors.login = 'Поле обязательно для заполнения!';
    }
    if (!values.password) {
      errors.password = 'Поле обязательно для заполнения!';
    }
    if (Object.keys(errors).length) {
      setErrors(errors);
    } else {
      auth.setLogin(values.login);
    }
  };

  return (
    <div className="auth">
      <div className="card auth-card">
        <form className="card-body" onSubmit={onSubmit}>
          <h3 className="card-title text-center mb-3">Авторизация</h3>
          <div className="mb-3">
            <input
              type="text"
              name="login"
              onChange={onChangeField}
              value={values.login}
              placeholder="Введите логин"
              className={`form-control ${errors.login ? 'is-invalid' : ''}`}
            />
            {errors.login && <div className="invalid-feedback">{errors.login}</div>}
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              onChange={onChangeField}
              value={values.password}
              placeholder="Введите пароль"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
          <button type="submit" className="btn btn-primary w-100">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;