import Menu from "../assets/icons/Menu";
import Video from "../assets/icons/Video";
import dates from "../utils/dates";
import { Link } from "react-router-dom";
import { CategoriesData } from "../ts/types";

interface Props {
  handleMobileNav: (operation: string) => void;
}

const Navbar = ({ handleMobileNav }: Props) => {
  const date = dates.getDate();

  const categoriesData: CategoriesData[] = [
    { name: "business", link: "/search?q=business" },
    { name: "science", link: "/search?q=science" },
    { name: "health", link: "/search?q=health" },
    { name: "sports", link: "/search?q=sports" },
    { name: "arts", link: "/search?q=arts" },
    { name: "food", link: "/search?q=food" },
    { name: "travel", link: "/search?q=travel" },
  ];

  const categoriesRendered = categoriesData.map((category) => (
    <li key={category.name}>
      <Link to={category.link} className="hover:underline">
        {category.name}
      </Link>
    </li>
  ));

  return (
    <header className="header bg-white mb-2 sticky top-0 z-10">
      <nav className="navbar flex h-16 border-b border-black">
        <div className="container mx-auto px-2 flex justify-between items-center font-noto-sans-georgian">
          <div className="date text-sm hidden laptop:block font-domine font-[700]">
            {date}
          </div>
          <Link to="/">
            <h1 className="font-tinos font-[700] text-2xl laptop:text-4xl">
              The <span className="whitespace-nowrap">Morning Post</span>
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="#"
              className="font-noto-sans-georgian text-xl laptop:text-2xl flex gap-1 items-center rounded-full py-1 px-3 laptop:px-3.5 hover:bg-gray-100"
            >
              <Video />
              <span>Live</span>
            </Link>
            <button
              onClick={() => handleMobileNav("open")}
              className="laptop:hidden hover:bg-gray-100 p-1.5 rounded-full"
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>
      <nav className="categories text-sm font-noto-sans-georgian border-b py-1 border-black">
        <div className="container mx-auto px-2 font-domine font-[700] laptop:hidden">
          {date}
        </div>
        <ul className="categories hidden laptop:flex justify-center items-center gap-4 capitalize">
          {categoriesRendered}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
