import React from 'react';
import './Colecoes.css';

import colecoesImg1 from '../../images/50615163941_1b13001dbe_k.png'
import colecoesImg2 from '../../images/51967200943_c80ab1bb99_k.png'
import colecoesImg3 from '../../images/51415802546_c8275329a9_k.png'

import img01 from '../../images/5200817284_52b2d4c451_c01.png'
import img02 from '../../images/5200817284_52b2d4c451_c02.png'
import img03 from '../../images/52080817284_52b2d4c451_c03.png'
import img04 from '../../images/42080817284_52b2d4c451_c04.png'
import img05 from '../../images/52080817284_52b2d4c451_c05.png'
import img06 from '../../images/52080817284_52b2d4c451_c06.png'

const Colecoes = () => {
  return (

    <div className="container">
      <h1 className="title">COLEÇÕES</h1>
      <div className="imagensColecoes">
        <div className="imgCol">
          <img src={colecoesImg1} alt="Imagem Coleções 1" />
          <h2>Eleições 2022</h2>
          <p>Como estão as eleições nas periferias e Grande São Paulo</p>
        </div>
        <div className="imgCol">
          <img src={colecoesImg2} alt="Imagem Coleções 2" />
          <h2>Arte de Rua</h2>
          <p>Grafites que enfeitam as ruas das quebradas</p>
        </div>
        <div className="imgCol">
          <img src={colecoesImg3} alt="Imagem Coleções 3" />
          <h2>Crise Financeira</h2>
          <p>Como a alta dos preços impacta as famílias das periferias</p>
        </div>
      </div>
      
      <div className="imagens">
        <img className="img01" src={img01} alt="Imagem 01" />
        <img className="img02" src={img02} alt="Imagem 01" />
        <img className="img03" src={img03} alt="Imagem 01" />
        <img className="img04" src={img04} alt="Imagem 01" />
        <img className="img05" src={img05} alt="Imagem 01" />
        <img className="img06" src={img06} alt="Imagem 01" />
      </div>
      
      


    </div>
  );
}

export default Colecoes