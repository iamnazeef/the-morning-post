const Weather = () => {
  return (
    <section className="weather bg-white max-w-[400px] laptop:mx-auto flex items-center justify-around font-noto-sans-georgian border border-gray-600 rounded-md p-2 shadow-sm">
      <div className="icon text-5xl">O</div>
      <div className="info text-center flex flex-col max-w-[200px]">
        <div className="text-2xl">
          <span className="font-[700]">40</span>
          <span>&deg;C</span>
        </div>
        <span className="text-sm break-words text-gray-600">Kochi</span>
      </div>
    </section>
  );
};

export default Weather;
