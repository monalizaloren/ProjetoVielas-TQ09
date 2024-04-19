import './DescricaoProdutoPage.css';
import InformacoesProdutoSelecionado from '../../components/InformacoesProdutoSelecionado/InformacoesProdutoSelecionado';
import ColecaoSelecionada from '../../components/ColecaoSelecionada/ColecaoSelecionada';
import FotosSemelhantes from '../../components/FotosSemelhantes/FotosSemelhantes';


const DescricaoProdutoPage = () => {
    return(
        <section className='descricao-produto-page-container'>
            <InformacoesProdutoSelecionado />
            <ColecaoSelecionada />
            <FotosSemelhantes />            
        </section>
    )
}

export default DescricaoProdutoPage