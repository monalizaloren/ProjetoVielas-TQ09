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
  
      <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light">
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
    <div className='Busca d-flex mw-80 align-items-center mw-md-40'>
      <input className='style-busca-header form-control' type="text" placeholder="Buscar" />
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
      <div className='textos-header mx-auto text-sm min-vw-100vw w-md-auto' button={mostrarMenu}>
        <h1 className='text-header1 px-4 fs-4'>#Paraisópolis</h1>
        <h1 className='text-header2 fs-4 px-4' >#Saúde</h1>
        <h1 className='text-header3 px-4 fs-4'>#Hospitais</h1>
        <h1 className='text-header4 px-4 fs-4'>#Coperifa</h1>
        <h1 className='text-header5 -px-4 fs-4'>#CasaDeCultura</h1>
        <h1 className='text-header6 px-4 fs-4'>#Eleições</h1>
        <h1 className='text-header7 px-4 fs-4'>#Urnas</h1>
      </div>
    </div>
  );
}

export default Header; 
