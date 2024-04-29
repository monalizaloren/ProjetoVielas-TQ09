import "./ColecoesCard.css"

const ColecoesCard = ({ image, title, description }) =>{
    return (

        
        <div className="colecoesCard">
            <img src={image} alt={title} className="colecoes-card-image" />
            <h2 className="colecoes-card-title">{title}</h2>
            <p className="colecoes-card-description">{description}</p>
        </div>
    )
}



export default ColecoesCard;