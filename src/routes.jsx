import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

import bancoDeImagens from "./db/BancoDeImagens/BancoDeImagens";

const HomeExemplo = () => {
  const navigate = useNavigate();

  const onClickHandler = (event) => {
    event.preventDefault();
    navigate(event.target.id);
  };

  return (
    <>
      <img
        id={bancoDeImagens[0].id}
        src={bancoDeImagens[0].src}
        style={{ width: "20rem", cursor: "pointer" }}
        alt="teste"
        onClick={onClickHandler}
      />
      <br />
      <img
        id={bancoDeImagens[1].id}
        src={bancoDeImagens[1].src}
        style={{ width: "20rem", cursor: "pointer" }}
        alt="teste"
        onClick={onClickHandler}
      />
    </>
  );
};

const PaginaDeImagem = () => {
  const params = useParams();
  const imagemProduto = bancoDeImagens.filter(
    (id) => id.id === params.username
  );

  return (
    <>
      <h1>PRODUTO {params.username}</h1>
      <img
        src={imagemProduto[0].src}
        style={{ width: "50rem", cursor: "pointer" }}
        alt="teste"
      />
    </>
  );
};

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomeExemplo />} />
      <Route path=":username" element={<PaginaDeImagem />} />
      <Route path="filho" element={<h1>FILHO DO HOME</h1>} />
    </Route>
  )
);

export default Routes;
