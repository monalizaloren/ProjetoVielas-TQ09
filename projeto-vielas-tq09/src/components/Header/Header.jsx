import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='Header'>
      <ul className='ul-header'>
        <li>
          <a href="/">
           <img src="./Image/menu.png" alt="Menu" />
           </a>
          </li>
          <li class='name'>
            <a href="/">Vielas</a>
          </li>
          <li id='login' button='login'>
            <a href="/login">Login</a>
          </li>
          <li id='perfil'>
            <a href="/perfil">Foto Perfil</a>
          </li>
        
      </ul>
    </div>
  );
}

const Busca = () => {
  return (
    <div classNme='busca'>
      <img src="./Image/lupa.png" alt="Buscar" />
      <input type="text" placeholder="Buscar" />
    </div>
  );
}

export default Header;