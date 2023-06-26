import { Article } from "../ts/types";
import { Link } from "react-router-dom";
import News from "./News";
import Loading from "../assets/spinner/Loading";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { nanoid } from "nanoid";

interface Props {
  heading: string;
  news: Article[];
  isLoading: boolean;
  error: string;
}

const Page = ({ heading, news, isLoading, error }: Props) => {
  const [sortBy, setSortBy] = useState("newest");

  const handleSort = (event: any) => {
    setSortBy(event.target.value);
  };

  if (Array.isArray(news)) {
    news.sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });
  }

  return (
    <main className="home min-h-screen">
      <Sidebar />
      <section className="news w-full laptop:w-[60%] laptop:pr-2">
        <h2 className="font-domine mt-4 p-2 font-[700] text-xl laptop:text-2xl">
          {heading}
        </h2>
        <div className="font-noto-sans-georgian px-2">
          <span>Sort By</span>
          <select
            value={sortBy}
            onChange={handleSort}
            className="cursor-pointer"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        {news?.length > 0 ? (
          <ul>
            {news?.map((article: Article) => (
              <li key={nanoid()}>
                <Link to={article.url}>
                  <News article={article} />
                </Link>
              </li>
            ))}
          </ul>
        ) : isLoading ? (
          <Loading />
        ) : (
          error && (
            <div className="text-red-500 p-2 font-noto-sans-georgian text-lg">
              ERROR: {error}
            </div>
          )
        )}
        <Loading />
      </section>
    </main>
  );
};

export default Page;
