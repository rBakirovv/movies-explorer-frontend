import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

/* /^[А-ЯA-ZёәіңғүұқөһӘІҢҒҮҰҚӨҺ\h-]+$/umi */

function Register(props) {

  const { handleRegistration } = props;

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegistration(data);
  };

  return (
    <section className='register'>
      <div></div>
      <Link className='register__logo-link' to='/'>
        <div className='register__logo'></div>
      </Link>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form' onSubmit={handleSubmit}>
        <label className='register__label' htmlFor='name'>
          Имя
          <input
            className='register__input'
            type='name'
            id='name'
            name='name'
            onChange={handleChange}
            required
          />
        </label>
        <label className='register__label' htmlFor='email'>
          E-mail
          <input
            className='register__input'
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            required />
        </label>
        <label className='register__label' htmlFor='email'>
          Пароль
          <input
            className='register__input'
            type='password'
            id='password'
            name='password'
            onChange={handleChange}
            required />
        </label>
        <div className='register__auth-container'>
          <button type='submit' className='register__submit'>Зарегистрироваться</button>
          <p className='register__submit-subtitle'>Уже зарегистрированы? <Link to='/signin' className='login__link'>Войти</Link></p>
        </div>
      </form>
    </section>
  )
}

export default Register;