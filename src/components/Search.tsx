import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const queryRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = queryRef?.current?.value;

    navigate(`/search?q=${query}`);
  };

  return (
    <section className="search hidden bg-white laptop:block max-w-[400px] laptop:mx-auto  font-noto-sans-georgian border border-gray-600 rounded-md p-2 shadow-sm">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          ref={queryRef}
          type="search"
          className="outline-none w-full p-2"
          placeholder="Search..."
        />
        <button className="border-2 border-black p-2 rounded-md bg-black text-white hover:bg-white hover:text-black">
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
