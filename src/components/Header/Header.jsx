import React, { useState } from 'react';
import './header.css'
import lista from '../../images/list.png'
import pessoa from '../../images/person.svg'
import lupa from '../../images/search.svg'
import Links from '../Links/Links';

const Header = () => {
  const [setClasseDoElemento] = useState('hashtags');

  // const mostrarMenu = () => {
  //   setClasseDoElemento('classeMostrarMenu');
  // };
  return (
  
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light">
        <a className="navbar-brand" href="/">
          <img className='lista' src={lista} alt="Menu" />
          <h1 className='style-name'>VIELAS</h1>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <img className='pessoa' src={pessoa} alt='Foto' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export const Busca = () => {
  return (
    <div className='Busca d-flex mw-300px align-items-center mw-md-100'>
      <input className='style-busca form-control' type="text" placeholder="Buscar" />
      <img className='lupa' src={lupa} alt="Lupa" />
    </div>
  );
}


export const Hashtags = () => {
  const [classeDoElemento, setClasseDoElemento] = useState('hashtags');

  const mostrarMenu = () => {
    setClasseDoElemento('classeMostrarMenu');
  };
  return (
    < >
        <Links />
    </>
  );
}

export default Header; 
