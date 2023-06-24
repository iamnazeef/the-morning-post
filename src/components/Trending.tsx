import TrendingUp from "../assets/icons/TrendingUp";
import News from "./News";
import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import { Link } from "react-router-dom";

const Trending = () => {
  const { news } = useContext(NewsContext);

  const articles = news?.slice(0, 5);

  return (
    <div className="trending bg-white laptop:max-w-[400px] max-h-[350px] overflow-auto laptop:mx-auto font-noto-sans-georgian border border-gray-600 rounded-md shadow-sm">
      <section className="title font-domine font-[700] text-xl sticky top-0 bg-white p-2 border-b border-black flex items-center gap-2">
        Trending <TrendingUp />
      </section>
      <section className="news px-2">
        <ul>
          {articles &&
            articles.map((article: any) => (
              <li key={article?.url}>
                <Link to={article?.url}>
                  <article className="news-card bg-white shadow-lite tablet:min-h-[200px] laptop:min-h-fit p-2 flex my-4 cursor-pointer gap-4 hover:underline">
                    <section className="text w-[60%]">
                      <div className="title font-domine font-[700] text-base tablet:text-xl laptop:text-base mb-2">
                        {article?.title}
                      </div>
                      <div className="hidden tablet:block laptop:hidden description font-noto-sans-georgian text-sm laptop:text-base">
                        {article?.description.substring(0, 100)}...
                      </div>
                    </section>
                    <section className="image w-[40%]">
                      <img
                        src={article?.image}
                        alt="image"
                        className="w-full max-w-[350px]"
                        width={200}
                        height={200}
                      />
                    </section>
                  </article>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Trending;
