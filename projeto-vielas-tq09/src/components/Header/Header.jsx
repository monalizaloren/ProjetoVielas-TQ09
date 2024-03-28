import React from 'react'
import './header.css'
import lista from '../../Image/list.svg'
import pessoa from '../../Image/person.svg'
import lupa from '../../Image/search.svg'

const Header = () => {
  return (
    <div className='Header'>
      <ul className='ul-header'>
        <li className='menu-list'>
          <a className='lista' href="/">
            <img className='lista' src={lista} alt="Menu" />
          </a>
        </li>
        <li className='name'>
          <h1 id='style-name'>VIELAS</h1>
        </li>
      </ul>
      <ul className='ul-header-2'>
        <li id='login'>
          <a  className='login' href="/login">Login</a>
        </li>
        <li id='perfil'>
          <img className='pessoa' src={pessoa} alt='Foto' />
        </li>
      </ul>
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
  return (
    <div className='hashtags'>
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