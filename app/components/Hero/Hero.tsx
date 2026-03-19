import HeroImage from "@components/Hero/HeroImage";
import HeroText from "@components/Hero/HeroText";

export default function Hero() {
  return (
    <div
      className="
        flex flex-col-reverse lg:flex-row
        justify-between items-center
        mx-0
        py-[clamp(1.5rem,2.8vw,4rem)]
        lg:px-[clamp(1rem,calc(15vw-8rem),10rem)]
        gap-x-[clamp(1.5rem,calc(3.125vw-0.5rem),2.5rem)]
        gap-[clamp(2rem,5vw,4rem)]
      "
    >
      <HeroText />
      <HeroImage />
    </div>
  );
}
