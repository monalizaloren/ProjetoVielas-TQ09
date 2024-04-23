import React from 'react';

const ResultadoEmColecoes = () =>{
    return(
        <section className='sessao'>
            <h2> Resultado em Coleções</h2>
            <div>                
                <picture className='caixaesquerda'>
                    <h2> Resultado em coleções</h2>
                    <img src="#" alt="imagem descritiva do nosso produto escolhido">
                    </img>
                </picture>
                <div className='caixadireita'>
                    <h3> Crise Financeira </h3>
                    <p> Como a alta dos preços impacta as famílias das periferias.</p>
                </div>
            </div>
            <div>
                <h3> Outros resultados </h3>
                < FotosSemelhantes />
            </div>
        </section>
    )
}
export default ResultadoEmColecoes;