import HeroImage from "./image";
import HeroDescription from "./description";
import IconScroll from "./iconScroll";
import SocialGroup from "../social";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-4 h-min justify-center overflow-visible relative w-full pt-20 pb-96">
      <div className="flex flex-col justify-center items-center">
        <HeroImage />

        <HeroDescription />
        <div className="mt-8">
          <SocialGroup />
        </div>
      </div>
    </div>
  );
};

export default Hero;
