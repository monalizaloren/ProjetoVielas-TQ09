import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import Plans from "../pages/Plans";
import PaymentGateway from "../pages/PaymentGateway";
import ImageSelected from "../pages/ImageSelected";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/payment-gateway/:id" element={<PaymentGateway />} />
      <Route path="/image-selected/:id" element={<ImageSelected />} />
    </>
  )
);

export default routes;
