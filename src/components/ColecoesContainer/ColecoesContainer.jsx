import "./ColecoesContainer.css"

import ColecoesCard from "../ColecoesCard/ColecoesCard"

import BancoDeImagens from "../../db/BancoDeImagens/BancoDeImagens";

const ColecoesContainer = () =>{
    const cards = [
        {
            image: BancoDeImagens[20].src,
            title: 'Eleições 2022',
            description: 'Como estão as eleições nas periferias e Grande São Paulo'
        },
        {
            image:  BancoDeImagens[20].src,
            title: 'Arte de Rua',
            description: 'Grafites que enfeitam as ruas das quebradas'
        },
        {
            image:  BancoDeImagens[20].src,
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
