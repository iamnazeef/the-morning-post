import { useState } from "react";
import PlaceHolderImage from "../assets/images/placeholder-image.webp";
import { Article } from "../ts/types";

interface Props {
  article: Article;
}

const News = ({ article }: Props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <article
      className="news-card bg-white shadow-lite tablet:min-h-[200px] p-2 flex my-4 cursor-pointer gap-4"
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <section className="text w-[60%] relative">
        <h2
          className={`title font-domine font-[700] text-base tablet:text-xl laptop:text-2xl mb-2 ${
            isMouseOver ? "underline" : "no-underline"
          }`}
        >
          {article?.title}
        </h2>
        <p className="description hidden tablet:block font-noto-sans-georgian text-sm laptop:text-base">
          {article?.description.substring(0, 100)}...
        </p>
        <div className="date text-sm mt-2 text-gray-600 font-noto-sans-georgian">
          <span className="whitespace-nowrap mr-1">Published on:</span>
          <span className="whitespace-nowrap">
            {article?.publishedAt?.substring(0, 10)}
          </span>
        </div>
      </section>
      <section className="image w-[40%]">
        <img
          src={article?.image ? article?.image : PlaceHolderImage}
          alt="image"
          className="w-full max-w-[350px] h-full object-contain"
          width={200}
          height={200}
        />
      </section>
    </article>
  );
};

export default News;
