import React from 'react';
import './Colecoes.css';
import ColecoesContainer from '../ColecoesContainer/ColecoesContainer';
import ColecoesImages from '../ColecoesImages/ColecoesImages';



const Colecoes = () => {
  return (

    <div className="colecoes">
      <h1 className="title">COLEÇÕES</h1>
      <ColecoesContainer />
      <ColecoesImages />     
    </div>
  );
}

export default Colecoes