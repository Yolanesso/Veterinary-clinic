import React from 'react';
import Logo from '../img/logo.svg';
import Search from '../img/search.svg';
import NavCircle from '../img/nav-circle.svg';

export default function Header() {
  return (
    <header className="d-flex align-center justify-between ">
      <div>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <nav>
        <ul className="d-flex">
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <a href="#">Диллерам</a>
          </li>
          <li>
            <a href="#">Новости</a>
          </li>
        </ul>
      </nav>
      <div className="search-block ">
        <input type="text" placeholder="Поиск" />
        <img src={Search} alt="Search" />
      </div>
      <div className="contact-block ">
        <button className="d-flex align-center " onClick={() => console.log('На меня нажали')}>
          Контакты
          <img className="mr-20" src={NavCircle} alt="" />
        </button>
      </div>
    </header>
  );
}
