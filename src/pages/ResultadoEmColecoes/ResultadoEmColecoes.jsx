import React from 'react';
import './ResultadoEmColecoes.css';
import resultadoImage from '../../images/51415802546_c8275329a9_k.png'
import Header from '../../components/Header/Header';
import FotosSemelhantes from '../../components/FotosSemelhantes/FotosSemelhantes';
import Footer from '../../components/Footer/Footer';
import { Busca } from '../../components/Header/Header';
const ResultadoEmColecoes = () =>{
    return(
        <section className='sessao'>
            <Header />
                <div>
                    <Busca />
                </div>
                <div>
                    <div className='recuado'>
                        <h2> Resultado em Coleções</h2>
                        <div className='tarja'>                
                                <picture className='caixaEsquerda'>
                                    
                                    <img src={resultadoImage} className='imageCaixa' alt="imagem descritiva do nosso produto escolhido">
                                    </img>
                                </picture>
                                <div className='caixaDireita'>
                                    <h3> Crise Financeira </h3>
                                    <p> Como a alta dos preços impacta as famílias das periferias.</p>
                                </div>
                        </div>
                    </div>
                    <div>                 
                        <FotosSemelhantes />
                    </div>                
                </div>
             <Footer />                
        </section>
    )
}
export default ResultadoEmColecoes;