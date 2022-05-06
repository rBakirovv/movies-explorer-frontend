import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <section className='login'>
      <div></div>
      <Link className='login__logo-link' to='/'>
        <div className='login__logo'></div>
      </Link>
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form'>
        <label className='login__label' htmlFor='email'>
          E-mail
          <input
            className='login__input'
            type='email'
            id='email'
            required />
        </label>
        <label className='login__label' htmlFor='email'>
          Пароль
          <input
            className='login__input'
            type='password'
            id='password'
            required />
        </label>
        <div className='login__auth-container'>
          <button type='submit' className='login__submit'>Войти</button>
          <p className='login__submit-subtitle'>Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
        </div>
      </form>
    </section>
  )
}

export default Login;