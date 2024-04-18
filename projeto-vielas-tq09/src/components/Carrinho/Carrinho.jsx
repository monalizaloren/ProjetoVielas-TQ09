import img01 from '../../images/5200817284_52b2d4c451_c01.png'
import './Carrinho.css'
const Carrinho = () => {
    return (
        <div className="carrinho">
            <h1>Carrinho de compras</h1>
            <p className='pSelecionados'>Itens selecionados para compra: <span id="spnSelecionados">1</span></p>
            <main>
                <section>
                    <div className='carrinhoItem'>
                        <div className='carrinhoItemRow'>
                            <img src={img01} alt="" />
                            <table>
                            <tbody>
                                <tr>
                                    <td>Tipo de mídia:</td>
                                    <td>Imagem do Creative</td>
                                </tr>
                                <tr>
                                    <td>Resolução:</td>
                                    <td>Resolução 4000 x 6000 . 300 dpi . RBG</td>
                                </tr>
                                <tr>
                                    <td>Tipo de licença:</td>
                                    <td>Royalty-free | <a href='./'>Ver resumo das Licenças</a> </td>
                                </tr>
                                <tr>
                                    <td>Como posso utilizar:</td>
                                    <td>Disponível para todas as utilizações permitidas ao abrigo dos nossos <a id='termosLicenca' href='./'>Termos de Licença</a> </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className='grid'>
                            <div className="row">
                                <input type="checkbox" name="selecionarParaCompra" id="selecionarParaCompra" className="selecionarParaCompra" /> <p>Selecionar para compra</p>
                            </div>
                        </div>
                    </div>

                    
                </section>
            </main>
            <div className='grid gridProsseguir'>
                <div className='col'>
                    <p>Subtotal: <span>R$ xx_xx</span></p> 
                    <button type="button" className='btnProsseguirCompra'>PROSSEGUIR COM A COMPRA</button>
                </div>
            </div>
        </div>
    );
}
export default Carrinho;