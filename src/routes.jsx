import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DescricaoProdutoPage from "./pages/DescricaoProdutoPage/DescricaoProdutoPage";
import CarrinhoPage from "./pages/CarrinhoPage/CarrinhoPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/descricao-produto" element={<DescricaoProdutoPage />} />
        <Route path="/carrinho" element={<CarrinhoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
