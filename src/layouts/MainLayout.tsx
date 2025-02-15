import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-primary-bg main_layout h-full overflow-hidden w-full">
      <main className="bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
