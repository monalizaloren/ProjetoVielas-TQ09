import "./ColecoesContainer.css"

import ColecoesCard from "../ColecoesCard/ColecoesCard"

import colecoesImg1 from '../../images/50615163941_1b13001dbe_k.png'
import colecoesImg2 from '../../images/51967200943_c80ab1bb99_k.png'
import colecoesImg3 from '../../images/51415802546_c8275329a9_k.png'

const ColecoesContainer = () =>{
    const cards = [
        {
            image: colecoesImg1,
            title: 'Eleições 2022',
            description: 'Como estão as eleições nas periferias e Grande São Paulo'
        },
        {
            image: colecoesImg2,
            title: 'Arte de Rua',
            description: 'Grafites que enfeitam as ruas das quebradas'
        },
        {
            image: colecoesImg3,
            title: 'Crise Financeira',
            description: 'Como a alta dos preços impacta as famílias das periferias'
        }
    ];



    return (
        <div className="colecoesContainer">
             {cards.map((card, index) => (
                <div>
                    <ColecoesCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                </div>

            ))}
        </div>
    )

}

export default ColecoesContainer;
