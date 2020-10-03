import React from 'react';
import logo from '../images/vector.svg';

function Header() {
  return (
    <header className="header page__header">
      <img src={logo} alt="Логотип место Россия" className="header__logo" />
    </header>
  );
}
export default Header;
