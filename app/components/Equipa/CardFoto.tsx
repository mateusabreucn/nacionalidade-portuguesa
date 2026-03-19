import Image from "next/image";


export default function CardFotoEquipa() {
  return (
    <div
      className="
        flex flex-col items-center
        gap-y-[clamp(0.5rem,1.5vw,2rem)]
        w-full relative
      "
    >
      <div
        className="
          relative w-full
          aspect-[1.25] lg:aspect-square
          rounded-[clamp(1.5rem,3vw,2rem)]
          img-shadow overflow-hidden
        "
      >
        <Image
          src={'/Equipa - Amanda.png'}
          alt={`Foto de Amanda C. Dantas`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-[center_40%] lg:object-center"
        />
      </div>

      <h3
        className="
          text-center whitespace-nowrap
          text-[clamp(0.875rem,3cqw,2rem)]
          lg:text-[clamp(1rem,2cqw,3rem)]
          lg:absolute
          lg:bottom-[clamp(-5.5rem,-4vw,-2rem)]
        "
      >
        Amanda C. Dantas
      </h3>
    </div>
  );
}
