import { MenuSquareIcon } from "lucide-react";
import Main from "./Main";
import { Typography } from "@/components/ui/typography";
import Sidebar from "@/components/widgets/SideBar";

export function HomePage() {
  function NavbarMobile() {
    return (
      <div className="flex md:hidden bg-no-repeat bg-cover bg-center  px-4 py-4   justify-between items-center bg-[url('https://toyan-product-feedback-app.vercel.app/suggestions/mobile/background-header.png')] w-full ">
        <div className="grid gap-1 ">
          {/* <h1 className="  font-semibold text-white">Frontend Mentor</h1>
          <p className="text-xs text-gray-200">Feedback Board</p> */}
          <Typography variant="h6" className="text-white ">
            Frontend Mentor
          </Typography>
          <Typography variant="bodyText" className="text-white text-sm ">
            Feedback Board
          </Typography>
        </div>
        <MenuSquareIcon className="text-white font-bold" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-row md:flex-col lg:flex-row bg-app-bg  ">
      <aside className="lg:w-80   p-8    hidden md:block">
        <Sidebar />
      </aside>
      <main className="flex-1 flex flex-col">
        <NavbarMobile />
        <Main />
      </main>
    </div>
  );
}

export default HomePage;
