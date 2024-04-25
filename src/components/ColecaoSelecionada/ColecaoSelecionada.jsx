import './ColecaoSelecionada.css'
import foto01 from '../../images/51415802546_c8275329a9_k.png';

const ColecaoSelecionada = () => {
    return (
        <section className='colecao-selecionada-container'>
            <picture className="imagem-colecao-selecionada-container">
                <img src={foto01} alt="foto01" className='imagem-colecao-selecionada'/>
            </picture>            
            <div className='descricao-colecao'>
                <h2 className='titulo-colecao-selecionada'>
                    Crise Financeira
                </h2>
                <p className='paragrafo-colecao-selecionada'>
                    Como a alta dos preços impacta as famílias das periferias
                </p>
            </div>
        </section>
    )
}

export default ColecaoSelecionada