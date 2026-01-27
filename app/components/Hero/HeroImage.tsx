import Image from "next/image";

export default function HeroImage() {
  return (
    <div
      className="
        relative shrink-0
        w-full max-w-[98%] lg:max-w-[42%] xl:max-w-[44%] 2xl:max-w-[40%]
        aspect-2/1 lg:aspect-21/20
        overflow-hidden
        rounded-[2.8rem] lg:rounded-4xl
        img-shadow
      "
    >
      <Image
        src="/Intro - Amanda.png"
        alt="Imagem de Amanda Dantas"
        fill
        className="object-cover scale-108 lg:scale-100"
        style={{ objectPosition: "50% 60%" }}
        priority
      />
    </div>
  );
}
