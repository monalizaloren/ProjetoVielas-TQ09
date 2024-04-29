import "./ColecoesImages.css"

import img01 from '../../images/5200817284_52b2d4c451_c01.png'
import img02 from '../../images/5200817284_52b2d4c451_c02.png'
import img03 from '../../images/52080817284_52b2d4c451_c03.png'
import img04 from '../../images/42080817284_52b2d4c451_c04.png'
import img05 from '../../images/52080817284_52b2d4c451_c05.png'
import img06 from '../../images/52080817284_52b2d4c451_c06.png'


const ColecoesImages = () => {
    return (
        <div className="colecoesImages">
            <img className="img01" src={img01} alt="Imagem 01" />
            <img className="img02" src={img02} alt="Imagem 01" />
            <img className="img03" src={img03} alt="Imagem 01" />
            <img className="img04" src={img04} alt="Imagem 01" />
            <img className="img05" src={img05} alt="Imagem 01" />
            <img className="img06" src={img06} alt="Imagem 01" />
        </div>
    )
}

export default ColecoesImages;