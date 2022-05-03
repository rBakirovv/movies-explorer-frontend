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
          <input className='register__input' value='Руслан' type='name' id='name' />
        </label>
        <label className='register__label' htmlFor='email'>
          E-mail
          <input className='register__input' value='pochta@yandex.ru' type='email' id='email' />
        </label>
        <label className='register__label' htmlFor='email'>
          Пароль
          <input className='register__input login__input_error' value='1234' type='password' id='password' />
          <span className='register__error'>Что-то пошло не так...</span>
        </label>
      </form>
      <div className='register__auth-container'>
        <button type='submit' className='register__submit'>Зарегистрироваться</button>
        <p className='register__submit-subtitle'>Уже зарегистрированы? <Link to='/signin' className='login__link'>Войти</Link></p>
      </div>
    </section>
  )
}

export default Register;