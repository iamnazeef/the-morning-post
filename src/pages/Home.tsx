import News from "../components/News";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <main className="home">
      <Sidebar />
      <section className="news w-full laptop:w-[60%] laptop:pr-2">
        <h2 className="font-domine mt-4 p-2 font-[700] text-xl laptop:text-2xl">
          Today's News
        </h2>
        {Array(20)
          .fill(0)
          .map((item) => (
            <News />
          ))}
      </section>
    </main>
  );
};

export default Home;
