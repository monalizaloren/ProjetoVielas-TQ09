import GaleriaDeImagens from "../../components/GaleriaDeImagens/GaleriaDeImagens";
import BancoDeImagens from "../../db/BancoDeImagens/BancoDeImagens";
import ItemImage from "../../components/ImagemItem/ImagemItem";

const HomePage = () => {
  return (
    <section className="HomePageContainer">
      <GaleriaDeImagens>
        <ItemImage
          {...BancoDeImagens[Math.floor(Math.random() * 84) + 1]}
          classNameImg="item-imagem-galeria"
        />
        <ItemImage
          {...BancoDeImagens[Math.floor(Math.random() * 84) + 1]}
          classNameImg="item-imagem-galeria"
        />
        <ItemImage
          {...BancoDeImagens[Math.floor(Math.random() * 84) + 1]}
          classNameImg="item-imagem-galeria"
        />
        <ItemImage
          {...BancoDeImagens[Math.floor(Math.random() * 84) + 1]}
          classNameImg="item-imagem-galeria"
        />
        <ItemImage
          {...BancoDeImagens[Math.floor(Math.random() * 84) + 1]}
          classNameImg="item-imagem-galeria"
        />
        <ItemImage
          {...BancoDeImagens[Math.floor(Math.random() * 84) + 1]}
          classNameImg="item-imagem-galeria"
        />
      </GaleriaDeImagens>
    </section>
  );
};

export default HomePage;
