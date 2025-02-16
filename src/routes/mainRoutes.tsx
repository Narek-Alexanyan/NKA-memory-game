import { Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import { GameSelection } from "../pages/GameSelection";

export const mainRoutes = (
  <Route element={<MainLayout />}>
    <Route index element={<GameSelection />} />
  </Route>
);
