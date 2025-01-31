const MovieCard = () => {
  return (
    <div className="size-full flex flex-col items-center bg-black p-4">
      <div className="flex">
        <div className="w-16 leading-5">
          <p className="text-3xl font-bold text-red-400">Dec</p>
          <p className="text-center text-2xl text-white">10</p>
          <p className="text-center text-sm text-white">2024</p>
        </div>

        <div className="flex bg-black rounded-[10px] h-[350px] w-[700px] border-[1px] border-white">
          <img
            src="/manzashops/assets/ad/movie24.jpeg"
            alt=""
            className="h-full rounded-[10px]"
          />

          <div className="flex flex-col justify-between w-full">
            <div className="bg-header rounded-tr-[10px] flex flex-col gap-6 size-full p-4">
              <div className="flex w-full">
                <div className="w-full text-white">
                  <p>
                    Date: <span>October 4, 2024</span>
                  </p>
                  <p>
                    Title: <span>Witch</span>
                  </p>
                </div>
                <div className="flex w-full justify-center items-center">
                  <button
                    type="button"
                    onClick={() => {}}
                    className="bg-red-500 text-white rounded-[10px] px-4 py-2 w-48 h-10 text-center"
                  >
                    test
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto">
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  vel turpis at nulla tincidunt sodales. Integer tincidunt,
                  sapien id volutpat tincidunt, libero sapien suscipit nisl,
                  eget fermentum justo lorem in urna. Aliquam erat volutpat.
                  Vestibulum ut libero ac sapien venenatis sagittis non nec
                  quam. Curabitur euismod, nulla at pharetra auctor, nisi turpis
                  vehicula justo, ac scelerisque mauris erat id turpis.
                </p>
              </div>
            </div>

            <div className="bg-black w-full p-2 flex justify-around rounded-br-[10px]">
              <button
                type="button"
                onClick={() => {}}
                className="bg-white text-black rounded-[10px] px-4 py-2 w-32 text-center"
              >
                test
              </button>

              <button
                type="button"
                onClick={() => {}}
                className="bg-white text-black rounded-[10px] px-4 py-2 w-32 text-center"
              >
                test
              </button>

              <button
                type="button"
                onClick={() => {}}
                className="bg-white text-black rounded-[10px] px-4 py-2 w-32 text-center"
              >
                test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
