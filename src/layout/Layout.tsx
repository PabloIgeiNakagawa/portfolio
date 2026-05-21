import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-texto text-steam-text">
      <Header />
      <main className="flex-1 w-full max-w-[1100px] mx-auto px-4 mt-[100px] mb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
