import { useState } from "react";

const News = ({ data }: any) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <article
      className="news-card bg-white shadow-lite tablet:min-h-[200px] p-2 flex my-4 cursor-pointer gap-4"
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <section className="text w-[60%]">
        <div
          className={`title font-domine font-[700] text-base tablet:text-xl laptop:text-2xl mb-2 ${
            isMouseOver ? "underline" : "no-underline"
          }`}
        >
          {data?.title}
        </div>
        <div className="description hidden tablet:block font-noto-sans-georgian text-sm laptop:text-base">
          {data?.description.substring(0, 100)}...
        </div>
      </section>
      <section className="image w-[40%]">
        <img
          src={data?.image}
          alt="image"
          className="w-full max-w-[350px]"
          width={200}
          height={200}
        />
      </section>
    </article>
  );
};

export default News;
