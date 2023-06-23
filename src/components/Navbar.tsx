import Menu from "../assets/icons/Menu";
import Video from "../assets/icons/Video";
import dates from "../utils/dates";
import { Link } from "react-router-dom";

const Navbar = () => {
  const date = dates.getDate();

  return (
    <nav className="navbar flex h-16 border-b border-black">
      <div className="container mx-auto px-2 flex justify-between items-center font-noto-sans-georgian">
        <div className="date text-sm hidden laptop:block">
          <div className="font-domine font-[700]">{date}</div>
          <div className="font-noto-sans-georgian">Today's News</div>
        </div>
        <div className="font-tinos font-[700] text-2xl laptop:text-4xl">
          The <span className="whitespace-nowrap">Morning Post</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="#"
            className="font-noto-sans-georgian text-xl laptop:text-2xl flex gap-1 items-center rounded-full py-1 px-3 laptop:px-3.5 border-2 border-black hover:border-gray-400"
          >
            <Video />
            <span>Live</span>
          </Link>
          <button className="laptop:hidden">
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
