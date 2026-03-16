import Image from "next/image";

export default function HeroImage() {
  return (
    <div
      className="
        relative shrink-0
        w-full max-w-[98%] lg:max-w-[42%] xl:max-w-[44%] 2xl:max-w-[40%]
        aspect-5/3 lg:aspect-21/20
        overflow-hidden
        rounded-[2.8rem] lg:rounded-4xl
        img-shadow
      "
    >
      <Image
        src="/Hero - Amanda.png"
        alt="Imagem de Amanda Dantas"
        fill
        className="object-cover object-[center_48%] lg:object-[center_75%]"
        priority
      />
    </div>
  );
}
