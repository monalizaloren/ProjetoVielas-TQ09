import React, { useState } from 'react';
import './header.css'
import lista from '../../images/list.png'
import pessoa from '../../images/person.svg'
import lupa from '../../images/search.svg'

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
      <input className='style-busca' type="text" placeholder="BUSCA" />
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
    <div className= {classeDoElemento} >
      <div className='textos mx-auto text-sm min-vw-100vw w-md-auto' button={mostrarMenu}>
        <h1 className='text-1 px-3 fs-4'>#Paraisópolis</h1>
        <h1 className='text-2 fs-4 px-3' >#Saúde</h1>
        <h1 className='text-3 px-3 fs-4'>#Hospitais</h1>
        <h1 className='text-4 px-3 fs-4'>#Coperifa</h1>
        <h1 className='text-5 -px-3 fs-4'>#CasaDeCultura</h1>
        <h1 className='text-6 px-3 fs-4'>#Eleições</h1>
        <h1 className='text-7 px-3 fs-4'>#Urnas</h1>
      </div>
    </div>
  );
}

export default Header; 
