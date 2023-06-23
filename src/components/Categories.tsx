import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <nav className="categories hidden laptop:flex justify-center items-center gap-4 text-sm font-noto-sans-georgian border-b py-[0.05rem] border-black">
      <Link to="#" className="hover:underline">
        Business
      </Link>
      <Link to="#" className="hover:underline">
        Science
      </Link>
      <Link to="#" className="hover:underline">
        Health
      </Link>
      <Link to="#" className="hover:underline">
        Sports
      </Link>
      <Link to="#" className="hover:underline">
        Arts
      </Link>
      <Link to="#" className="hover:underline">
        Food
      </Link>
      <Link to="#" className="hover:underline">
        Travel
      </Link>
    </nav>
  );
};

export default Categories;
