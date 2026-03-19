import Image from "next/image";

export default function HeroImage() {
  return (
    <div
      className="
        relative shrink-0
        w-full max-w-[98%] lg:max-w-[clamp(40%,42vw,44%)]
        aspect-5/3 lg:aspect-21/20
        overflow-hidden
        rounded-[clamp(2.8rem,4vw,3.5rem)]
        img-shadow
      "
    >
      <Image
        src="/Hero - Amanda.png"
        alt="Imagem de Amanda Dantas"
        fill
        sizes="(max-width: 1024px) 98vw, 44vw"
        className="object-cover object-[center_48%] lg:object-[center_75%]"
        priority
      />
    </div>
  );
}
