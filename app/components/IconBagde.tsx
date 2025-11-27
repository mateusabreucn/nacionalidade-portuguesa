import Image from "next/image";

interface IconBadgeProps {
  icon: string;
  altText: string;
  titulo?: string;
}

export default function IconBadge({ icon, altText, titulo }: IconBadgeProps) {
  return (
    <div className="w-fit flex flex-col gap-y-8 items-center z-20">
      <div className="rounded-full bg-icon-badge flex justify-center items-center aspect-square w-28 lg:w-32 xl:w-40 2xl:w-48">
        <div className="relative aspect-square w-20 lg:w-24 xl:w-32 2xl:w-40">
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
        <div className="text-2xl xl:text-3xl 2xl:text-4xl text-center">
          {titulo}
        </div>
      )}
    </div>
  );
}
