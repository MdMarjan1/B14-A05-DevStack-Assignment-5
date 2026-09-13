import logo from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <header className=" container mx-auto flex flex-col md:flex-row md:items-center justify-between mt-8 md:mt-0">
      {/* hero text part */}
      <div className="mx-auto md:mx-0 px-5 md:px-3">
        <h1 className="text-4xl md:text-6xl font-bold pb-7 text-center md:text-start">
          Build Your Ideal <br />
          <span className=" bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[#475569] pb-6 text-center md:text-start text-[1rem] md:text-2xl">
          Explore frontend, backend, database, and tooling options, <br />{" "}
          compare them side by side, and put together the stack that fits your{" "}
          <br /> next project.
        </p>
        <div className="flex pt-9 justify-evenly md:justify-start">
          <button className="btn mr-1.5 md:mr-4 border-0 bg-linear-to-r from-[#FF5722] to-[#D81B7E] text-white  text-[0.8rem] md:text-[1rem]">
            Explore Technologies
          </button>
          <button className="btn  text-[#374151] text-[0.7rem] md:text-[1rem] px-12">
            Learn More
          </button>
        </div>
      </div>

      {/* hero Image part */}
      <div className="mx-auto md:mx-0">
        <img src={logo} alt="" />
      </div>
    </header>
  );
};

export default Hero;
