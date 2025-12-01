import Image from "next/image";

interface IconBadgeProps {
  icon: string;
  altText: string;
  titulo?: string;
}

export default function IconBadge({ icon, altText, titulo }: IconBadgeProps) {
  return (
    <div className="w-fit flex flex-col gap-y-2 xl:gap-y-4 2xl:gap-y-6 items-center z-20">
      <div className="rounded-full bg-icon-badge flex justify-center items-center aspect-square w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36 2xl:w-44">
        <div className="relative aspect-square w-12 sm:w-14 md:w-18 lg:w-20 xl:w-24 2xl:w-32">
          <Image
            src={icon}
            alt={altText}
            fill
            objectFit="cover"
            className="relative"
          />
        </div>
      </div>

      {titulo && (
        <div className="text-xl xl:text-2xl 2xl:text-4xl text-center">
          {titulo}
        </div>
      )}
    </div>
  );
}
