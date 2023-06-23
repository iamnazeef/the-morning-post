const Search = () => {
  return (
    <section className="search hidden bg-white laptop:block max-w-[400px] laptop:mx-auto  font-noto-sans-georgian border border-gray-600 rounded-md p-2 shadow-sm">
      <form className="flex items-center gap-2">
        <input
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
