import HeroImage from "./components/Hero/HeroImage";
import HeroText from "./components/Hero/HeroText";

export default function Hero() {
  return (
    <div
      className="
        flex flex-col-reverse lg:flex-row
        justify-between items-center
        my-6 mx-hero
        gap-x-hero
        gap-y-hero
      "
    >
      <HeroText />
      <HeroImage />
    </div>
  );
}
