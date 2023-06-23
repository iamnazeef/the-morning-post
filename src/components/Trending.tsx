import TrendingUp from "../assets/icons/TrendingUp";
import News from "./News";

const Trending = () => {
  return (
    <div className="trending bg-white laptop:max-w-[400px] max-h-[350px] overflow-auto laptop:mx-auto font-noto-sans-georgian border border-gray-600 rounded-md shadow-sm">
      <section className="title font-domine font-[700] text-xl sticky top-0 bg-white p-2 border-b border-black flex items-center gap-2">
        Trending <TrendingUp />
      </section>
      <section className="news px-2">
        {Array(10)
          .fill(0)
          .map((item) => (
            <News />
          ))}
      </section>
    </div>
  );
};

export default Trending;
