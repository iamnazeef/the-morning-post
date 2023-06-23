import Menu from "../assets/icons/Menu";
import Video from "../assets/icons/Video";
import dates from "../utils/dates";
import { Link } from "react-router-dom";
import { CategoriesData } from "../ts/types";

const Navbar = () => {
  const date = dates.getDate();

  const categoriesData: CategoriesData[] = [
    { name: "business", link: "#" },
    { name: "science", link: "#" },
    { name: "health", link: "#" },
    { name: "sports", link: "#" },
    { name: "arts", link: "#" },
    { name: "food", link: "#" },
    { name: "travel", link: "#" },
  ];

  const categoriesRendered = categoriesData.map((category) => (
    <Link to={category.link} key={category.name} className="hover:underline">
      {category.name}
    </Link>
  ));

  return (
    <header className="header bg-white mb-2 sticky top-0 z-10">
      <nav className="navbar flex h-16 border-b border-black">
        <div className="container mx-auto px-2 flex justify-between items-center font-noto-sans-georgian">
          <div className="date text-sm hidden laptop:block font-domine font-[700]">
            {date}
          </div>
          <h1 className="font-tinos font-[700] text-2xl laptop:text-4xl">
            <Link to="/">
              The <span className="whitespace-nowrap">Morning Post</span>
            </Link>
          </h1>
          <div className="flex items-center gap-4">
            <Link
              to="#"
              className="font-noto-sans-georgian text-xl laptop:text-2xl flex gap-1 items-center rounded-full py-1 px-3 laptop:px-3.5 hover:bg-gray-100"
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
      <nav className="categories text-sm font-noto-sans-georgian border-b py-1 border-black">
        <div className="container mx-auto px-2 font-domine font-[700] laptop:hidden">
          {date}
        </div>
        <div className="hidden laptop:flex justify-center items-center gap-4 capitalize">
          {categoriesRendered}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
