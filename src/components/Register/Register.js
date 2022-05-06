import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
  return (
    <section className='register'>
      <div></div>
      <Link className='register__logo-link' to='/'>
        <div className='register__logo'></div>
      </Link>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form'>
        <label className='register__label' htmlFor='name'>
          Имя
          <input
            className='register__input'
            type='name'
            id='name'
            required
          />
        </label>
        <label className='register__label' htmlFor='email'>
          E-mail
          <input
            className='register__input'
            type='email'
            id='email'
            required />
        </label>
        <label className='register__label' htmlFor='email'>
          Пароль
          <input
            className='register__input'
            type='password'
            id='password'
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