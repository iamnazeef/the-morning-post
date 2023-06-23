import Video from "../assets/icons/Video";

const Weather = () => {
  return (
    <section className="weather max-w-[400px] laptop:mx-auto flex items-center justify-around font-noto-sans-georgian border border-gray-600 rounded-md p-2 shadow-sm">
      <div className="icon">
        <Video />
      </div>
      <div className="info text-center flex flex-col max-w-[200px]">
        <span className="text-2xl">40&deg;C</span>
        <span className="text-sm break-words">Kochi</span>
      </div>
    </section>
  );
};

export default Weather;
