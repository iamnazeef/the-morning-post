const News = () => {
  return (
    <article className="news-card bg-white shadow-lite p-2 flex my-4 hover:underline cursor-pointer gap-4">
      <section className="text">
        <div className="title font-domine font-[700] text-2xl">Big Title</div>
        <div className="description font-noto-sans-georgian text-sm laptop:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          mollitia aliquid eligendi nihil
        </div>
      </section>
      <section className="image">
        <img
          src="https://images.unsplash.com/photo-1622228629531-0d417d33b316?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
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
