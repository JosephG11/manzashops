const Footer = () => {
  return (
    <footer className="flex w-full flex-col bg-black px-9 pb-12 pt-8 capitalize text-[#f2f2f2]">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="mr-8 flex flex-col items-center">
          <img src="/manzashops/assets/favicon.png" className="w-96 border-[1px] border-white" />

          <p className="text-[28px]">Est.2024</p>
        </div>

        <div className="flex w-full justify-around lg:w-7/12">
          <div>
            <p className="mb-[15px] text-[28px]">more</p>
            <div className="flex flex-col gap-[15px] pl-12">
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
            </div>
          </div>

          <div>
            <p className="mb-[15px] text-[28px]">more</p>
            <div className="flex flex-col gap-[15px] pl-12">
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
            </div>
          </div>

          <div>
            <p className="mb-[15px] text-[28px]">more</p>
            <div className="flex flex-col gap-[15px] pl-12">
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
              <a href="">contact</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col md:flex-row">
        <p className="flex w-1/2 justify-start text-[28px] md:justify-end">Socials</p>

        <div className="mt-2 flex w-full justify-around gap-2 pl-2 md:mt-12 md:justify-start md:gap-10 md:pl-8 lg:w-1/2">
          <a href="">contact</a>
          <a href="">contact</a>
          <a href="">contact</a>
          <a href="">contact</a>
          <a href="">contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
