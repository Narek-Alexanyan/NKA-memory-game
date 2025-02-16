import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <main className="w-main h-screen mx-auto overflow-hidden bg-patrick-blue/95 text-white">
      <Outlet />
    </main>
  );
};

export default MainLayout;
