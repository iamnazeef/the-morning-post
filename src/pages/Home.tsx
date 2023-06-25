import { useContext, useEffect, useState } from "react";
import News from "../components/News";
import Sidebar from "../components/Sidebar";
import { NewsContext } from "../context/NewsContext";
import { Link } from "react-router-dom";
import { Article } from "../ts/types";

const Home = () => {
  const [data, setData] = useState<Article[] | null>(null);
  const { news, setNews } = useContext(NewsContext);

  useEffect(() => {
    let data = localStorage.getItem("newsData");
    if (data) {
      data = JSON.parse(data);
      setData(data?.slice(5));
    }
    setNews(data);
  }, []);

  console.log(data);

  return (
    <main className="home min-h-screen">
      <Sidebar />
      <section className="news w-full laptop:w-[60%] laptop:pr-2">
        <h2 className="font-domine mt-4 p-2 font-[700] text-xl laptop:text-2xl">
          Today's News
        </h2>
        <ul>
          {data &&
            Array.isArray(data) &&
            data.map((article: Article) => (
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

export default Home;
