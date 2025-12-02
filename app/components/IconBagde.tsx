import Image from "next/image";

interface IconBadgeProps {
  icon: string;
  altText: string;
  titulo?: string;
}

export default function IconBadge({ icon, altText, titulo }: IconBadgeProps) {
  return (
    <div className="w-full flex flex-col gap-y-1 xl:gap-y-2 2xl:gap-y-4 items-center z-20">
      <div className="w-[35%] rounded-full bg-icon-badge flex justify-center items-center aspect-square">
        <div className="relative aspect-square w-[60%]">
          <Image
            src={icon}
            alt={altText}
            fill
            className="relative object-cover"
          />
        </div>
      </div>

      {titulo && (
        <div className="text-base xl:text-xl 2xl:text-3xl text-center relative">
          {titulo}
        </div>
      )}
    </div>
  );
}
