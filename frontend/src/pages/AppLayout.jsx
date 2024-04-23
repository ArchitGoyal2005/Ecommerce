import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] bg-WHITE h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
