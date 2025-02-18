import { Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import { GameSelection } from "../pages/GameSelection";
import { MainMenu } from "../pages/MainMenu";
import { Settings } from "../pages/Settings.tsx";

export const mainRoutes = (
  <Route element={<MainLayout />}>
    <Route index element={<GameSelection />} />
    <Route path="/main-menu" element={<MainMenu />} />
    <Route path="/settings" element={<Settings />} />
  </Route>
);
