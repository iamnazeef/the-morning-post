import Search from "./Search";
import Trending from "./Trending";
import Weather from "./Weather";

const Sidebar = () => {
  return (
    <section className="sidebar w-full laptop:w-[40%] laptop:sticky laptop:top-[6.5rem] laptop:float-right">
      <div className="trending-news mb-4">
        <Search />
      </div>
      <div className="weather mb-4">
        <Weather />
      </div>
      <div className="trending-news">
        <Trending />
      </div>
    </section>
  );
};

export default Sidebar;
