import './FormularioDeCompra.css'

const FormularioDeCompra = () => {
    return(
        <form action="" className='formulario-de-compra'>
            <div className='add-carrinho-container'>
                <div className='input-container'>
                    <div className="borda-externa-input">
                        <input type="radio" className='input-descricao-produto-page' id='add-carrinho' name='input-descricao-produto-page'/>
                    </div>
                </div>
                <label for='add-carrinho'>Adicionar ao carrinho (compra individual)</label>
            </div>
            <div className='add-pacote-container'>
                <div className='input-container'>
                    <div className="borda-externa-input">
                        <input type="radio" className='input-descricao-produto-page' id='add-pacote' name='input-descricao-produto-page'/>
                    </div>
                </div>
                <label for='add-pacote'>Adicionar a meu pacote (planos)</label>
            </div>
            <button type="submit" className='btn-comprar'>COMPRAR</button>
        </form>
    )
}

export default FormularioDeCompra