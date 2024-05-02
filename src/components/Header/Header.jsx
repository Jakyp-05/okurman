import React from "react";
import Logo from "../../assets/svg/Logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
        </Link>
        <nav className="header-right">
          <ul>
            <li>
              <Link>
              Главная
              </Link>
              </li>
            <li>Курсы</li>
            <li>
              <button>Преподавател</button>
            </li>
            <li>О нас</li>
            <li>Отзывы</li>
            <li>Контакт</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
