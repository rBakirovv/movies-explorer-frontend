import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__title-container'>
        <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      </div>
      <div className='footer__main-container'>
        <p className="footer__author">© {new Date().getFullYear()}</p>
        <ul className='footer__link-list'>
          <li className='footer__link-item'>Яндекс.Практикум</li>
          <li className='footer__link-item'>Github</li>
          <li className='footer__link-item'>Facebook</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;