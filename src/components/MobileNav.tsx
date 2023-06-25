import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { CategoriesData } from "../ts/types";
import Close from "../assets/icons/Close";
import Video from "../assets/icons/Video";

interface Props {
  isMobileNavOpen: boolean;
  handleMobileNav: (operation: string) => void;
}

const MobileNav = ({ isMobileNavOpen, handleMobileNav }: Props) => {
  const queryRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const query = queryRef!.current!.value;
    if (query) {
      queryRef!.current!.value = "";
      navigate(`/search?q=${query}`);
      handleMobileNav("close");
    }
  };

  const handleHome = () => {
    navigate("/");
    handleMobileNav("close");
  };

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
    <li key={category.name}>
      <Link to={category.link} className="hover:underline">
        {category.name}
      </Link>
    </li>
  ));

  return (
    <div
      className={`absolute ${
        isMobileNavOpen ? "block" : "hidden"
      } z-10 bg-white top-0 w-full min-h-screen p-4 laptop:hidden transition-transform delay-100 ease-linear`}
    >
      <div className="container mx-auto px-2 font-noto-sans-georgian">
        <header>
          <div className="flex items-center justify-between">
            <h1 onClick={handleHome} className="font-tinos font-[700] text-2xl">
              The <span className="whitespace-nowrap">Morning Post</span>
            </h1>
            <div className="flex items-center gap-2">
              <Link
                to="#"
                className="font-noto-sans-georgian text-xl laptop:text-2xl flex gap-1 items-center rounded-full py-1 px-3 laptop:px-3.5 hover:bg-gray-100"
              >
                <Video />
                <span>Live</span>
              </Link>
              <button
                onClick={handleHome}
                className="hover:bg-gray-100 p-1.5 rounded-full"
              >
                <Close />
              </button>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 mt-6 border border-black"
          >
            <input
              ref={queryRef}
              type="search"
              className="outline-none w-full py-1 tablet:py-2 px-2"
              placeholder="Search..."
              required
            />
            <button className="border-l border-black py-1 tablet:py-2 px-2 bg-black text-white hover:bg-white hover:text-black">
              Search
            </button>
          </form>
        </header>
        <main>
          <nav className="categories mt-12">
            <h2 className="mb-3 font-[700]">Categories</h2>
            <ul className="grid grid-cols-2 text-gray-800">
              {categoriesRendered}
            </ul>
          </nav>
        </main>
        <footer className="mt-12 font-noto-sans-georgian text-sm text-gray-600">
          <span>The Morning Post &copy; 2023</span>
        </footer>
      </div>
    </div>
  );
};

export default MobileNav;
