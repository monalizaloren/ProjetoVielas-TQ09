import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import Plans from "../pages/Plans";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/plans" element={<Plans />} />
    </>
  )
);

export default routes;
