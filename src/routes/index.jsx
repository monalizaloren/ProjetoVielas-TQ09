import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import Plans from "../pages/Plans";
import PaymentGateway from "../pages/PaymentGateway";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/payment-gateway/:id" element={<PaymentGateway />} />
    </>
  )
);

export default routes;
