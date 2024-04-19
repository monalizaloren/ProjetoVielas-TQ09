import './FotosSemelhantes.css';
import foto01 from '../../images/51415802546_c8275329a9_k.png';


const FotosSemelhantes = () =>{
    return(
        <section className='fotos-semelhantes-container'>
            <h2>Fotos semelhantes</h2>
            <div className="imagens-semelhantes">
                <img src={foto01} alt="foto01" className='imagem-semelhante'/>
                <img src={foto01} alt="foto01" className='imagem-semelhante'/>
                <img src={foto01} alt="foto01" className='imagem-semelhante'/>
                <img src={foto01} alt="foto01" className='imagem-semelhante'/>
                <img src={foto01} alt="foto01" className='imagem-semelhante'/>
                <img src={foto01} alt="foto01" className='imagem-semelhante'/>
                <img src={foto01} alt="foto01" className='imagem-semelhante'/>
                <img src={foto01} alt="foto01" className='imagem-semelhante'/>
                <img src={foto01} alt="foto01" className='imagem-semelhante'/>
            </div>                
        </section>
    )
}

export default FotosSemelhantes