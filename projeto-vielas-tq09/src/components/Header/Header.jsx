import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='Header'>
      <ul className='ul-header'>
        <li class='menu-list'>
          <a href="/">
          <img src="./Image/list.svg" alt="Menu" />
           </a>
          </li>
          <li class='name'>
            <h1 id='style-name'>VIELAS</h1>
          </li>
          <li id='login' onClique='login'>
            <a href="/login">Login</a>
          </li>
          <li id='perfil'>
            <img src="./Image/person.svg" alt='Foto'/>
          </li>     
      </ul>
    </div>
  );
}

 export const Busca = () => {
  return (
    <div className='Busca'>
      <img id='lupa' src="./Image/search.svg" alt="Lupa" />
      <input class='style-busca' type="text" placeholder="Buscar" />
    </div>
  );
}

export default Header;