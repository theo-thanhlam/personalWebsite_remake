import "@/styles/text.css";

const HeroDescription = () => {
  return (
    <div className="text-wrapper pt-10 w-full">
      <div className="text">
        <div className="flex flex-col text-center">
          <div className="flex justify-center ">
            <span className="text-3xl">Hi, I'm&nbsp;</span>
            <h2 className="name-glow text-3xl md:text-4xl">Theo</h2>
          </div>

          <span className="flex flex-col text-xl md:text-2xl">
            A developer interested in
            <span className="text-glow text-3xl md:text-4xl">
              Backend development
            </span>
          </span>

          {/* <span className="text-3xl">Interested in Backend Development</span> */}
        </div>
      </div>
    </div>
  );
};

export default HeroDescription;
