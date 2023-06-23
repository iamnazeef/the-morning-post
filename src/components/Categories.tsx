import { Link } from "react-router-dom";
import dates from "../utils/dates";
import { CategoriesData } from "../ts/types";

const Categories = () => {
  const date = dates.getDate();

  const categoriesData: CategoriesData[] = [
    { category: "business", link: "#" },
    { category: "science", link: "#" },
    { category: "health", link: "#" },
    { category: "sports", link: "#" },
    { category: "arts", link: "#" },
    { category: "food", link: "#" },
    { category: "travel", link: "#" },
  ];

  const categoriesRendered = categoriesData.map((category) => (
    <Link
      to={category.link}
      key={category.category}
      className="hover:underline"
    >
      {category.category}
    </Link>
  ));

  return (
    <nav className="categories text-sm font-noto-sans-georgian border-b py-1.5 border-black bg-gray-50 laptop:bg-white">
      <div className="container mx-auto px-2 font-domine font-[700] laptop:hidden">
        {date}
      </div>
      <div className="hidden laptop:flex justify-center items-center gap-4 capitalize">
        {categoriesRendered}
      </div>
    </nav>
  );
};

export default Categories;
