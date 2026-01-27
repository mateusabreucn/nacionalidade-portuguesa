import HeroImage from "./components/Hero/HeroImage";
import HeroText from "./components/Hero/HeroText";

export default function Hero() {
  return (
    <div className="my-6 mx-0 xl:mx-16 2xl:mx-28 3xl:mx-40 flex flex-col-reverse lg:flex-row justify-between items-center gap-x-6 xl:gap-x-8 2xl:gap-x-10 gap-y-8 xl:gap-y-16">
      <HeroText />
      <HeroImage />
    </div>
  );
}
