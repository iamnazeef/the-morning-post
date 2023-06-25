import Sidebar from "../components/Sidebar";
import { Link, useSearchParams } from "react-router-dom";
import News from "../components/News";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const data = localStorage.getItem("newsData");
  const news = data && JSON.parse(data).slice(5);

  return (
    <main className="search min-h-screen">
      <Sidebar />
      <section className="news w-full laptop:w-[60%] laptop:pr-2">
        <h2 className="font-domine mt-4 p-2 font-[700] text-xl laptop:text-2xl">
          Showing results for "{query}"
        </h2>
        <ul>
          {news.map((article: any) => (
            <li key={article!.url}>
              <Link to={article!.url}>
                <News article={article} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Search;
