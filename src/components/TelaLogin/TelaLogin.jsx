import React from 'react'
import './TelaLogin.css';
import { IoMdClose } from "react-icons/io";

const TelaLogin = () => {
  return (
   <div className='login-container'>
    <div className="close-button"><a href="#"><IoMdClose /></a></div>
    <h1>Bem vindo ;)</h1>
      <div className="i-email">
        <input type="email" placeholder="Email"/>
      </div>
      <div className="i-password">
        <input type="password" placeholder="Senha"/>
      </div>
    <div className="remember-me">
      <div className="remember-checkbox"><input type="checkbox"/> </div>
      <label for="remember">me mantenha conectado</label>
      
      
    </div>
    <button type="button">ENTRAR</button>
    <div className="forgot">
      <div className="forgot-password">
        <a href="#">Esqueceu a senha?</a>
      </div>
      <div className="forgot-password-link">
        <a href="#">Clique aqui</a>
      </div>
    </div>
    
   </div> 
  )
}

export default TelaLogin