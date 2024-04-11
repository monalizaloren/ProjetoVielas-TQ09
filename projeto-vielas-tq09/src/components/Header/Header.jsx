import React, { useState } from 'react';
import './header.css'
import lista from '../../imagem/Image/list.png'
import pessoa from '../../imagem/Image/person.svg'
import lupa from '../../imagem/Image/search.svg'

const Header = () => {
  const [setClasseDoElemento] = useState('hashtags');

  const mostrarMenu= () => {
    setClasseDoElemento('classeMostrarMenu');
  };
  return (
    <div className='container-fluid'>
      <nav className='navbar'>
        <li className='menu-list'>
          <a className='lista' href="/">
            <img onClick={mostrarMenu} className='lista' src={lista} alt="Menu" />
          </a>
        </li>
        <li className='name'>
          <h1 className='style-name'>VIELAS</h1>
        </li>
        </nav>
        <nav className='navbar-nav'>
        <li id='login'>
          <a  className='login' href="/login">Login</a>
        </li>
        <li className='perfil'>
          <img className='pessoa' src={pessoa} alt='Foto' />
        </li>
      </nav>
    </div>
  );
}

export const Busca = () => {
  return (
    <div className='Busca'>
      <input className='style-busca' type="text" placeholder="Buscar" />
      <img className='lupa' src={lupa} alt="Lupa" />
    </div>
  );
}

  
export const Hashtags = () => {
  const [classeDoElemento, setClasseDoElemento] = useState('hashtags');

  const mostrarMenu= () => {
    setClasseDoElemento('classeMostrarMenu');
  };
  return (
    <div className= {classeDoElemento} >
      <div onClique= {mostrarMenu}></div>
      <h1 className='text-1'>#Paraisópolis</h1>
      <h1 className='text-2'>#Saúde</h1>
      <h1 className='text-3'>#Hospitais</h1>
      <h1 className='text-4'>#Coperifa</h1>
      <h1 className='text-5'>#CasaDeCultura</h1>
      <h1 className='text-6'>#Eleições</h1>
      <h1 className='text-7'>#Urnas</h1>
    </div >
  );
}

export default Header; 
