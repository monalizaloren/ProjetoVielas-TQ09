import "./ColecoesImages.css"


import BancoDeImagens from "../../db/BancoDeImagens/BancoDeImagens";


const ColecoesImages = () => {
    return (
        <div className="colecoesImages">
            <img className="img01" src={ BancoDeImagens[20].src} alt="Imagem 01" />
            <img className="img02" src={ BancoDeImagens[20].src} alt="Imagem 01" />
            <img className="img03" src={ BancoDeImagens[20].src} alt="Imagem 01" />
            <img className="img04" src={ BancoDeImagens[20].src} alt="Imagem 01" />
            <img className="img05" src={ BancoDeImagens[20].src} alt="Imagem 01" />
            <img className="img06" src={ BancoDeImagens[20].src} alt="Imagem 01" />
        </div>
    )
}

export default ColecoesImages;