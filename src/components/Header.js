import React from 'react';
import logo from '../images/vector.svg';

function Header() {
  return (
    <header class="header page__header">
      <img src={logo} alt="Логотип место Россия" class="header__logo" />
    </header>
  );
}
export default Header;