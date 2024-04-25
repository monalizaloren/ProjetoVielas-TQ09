import './InformacoesProdutoSelecionado.css'
import foto01 from '../../images/51415802546_c8275329a9_k.png';
import FormularioDeCompra from '../FormularioDeCompra/FormularioDeCompra';

const InformacoesProdutoSelecionado = () =>{
    return(
        <section className="informacoes-produtos-selecionados">
            <picture className="imagem-produto-selecionado-container">
                <img src={foto01} alt='foto01' className='imagem-produto-selecionado'></img>
            </picture>
            <div className='descricao-inputs-produto-selecionado-container'>
            <div className='descricao-produto-selecionado'>
                <h2>Casarão do Cambuci</h2>
                <p>Vista da casa de Dona Magnólia no Cambuci</p>
                <p>Foto de <a href="#">Ira Romão</a></p>
            </div>
            <FormularioDeCompra/>
            </div>
        </section>
    )
}

export default InformacoesProdutoSelecionado