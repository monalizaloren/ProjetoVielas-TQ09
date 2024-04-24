import React from 'react';
import resultadoImage from '../../images/51415802546_c8275329a9_k.png'
import Header from '../../components/Header/Header';
import FotosSemelhantes from '../../components/FotosSemelhantes/FotosSemelhantes';
import Footer from '../../components/Footer/Footer';
const ResultadoEmColecoes = () =>{
    return(
        <section className='sessao'>
            <Header/ >
            <h2> Resultado em Coleções</h2>
            <div>                
                <picture className='caixaEsquerda'>
                    <h2> Resultado em coleções</h2>
                    <img src={resultadoImage} className='imageCaixa' alt="imagem descritiva do nosso produto escolhido">
                    </img>
                </picture>
                <div className='caixaDireita'>
                    <h3> Crise Financeira </h3>
                    <p> Como a alta dos preços impacta as famílias das periferias.</p>
                </div>
            </div>
            <div>
                <h3> Outros resultados </h3>
                <FotosSemelhantes />
            </div>
            <Footer />
        </section>
    )
}
export default ResultadoEmColecoes;