import Image from "next/image";

interface IconBadgeProps {
  icon: string;
  altText: string;
  titulo?: string;
}

export default function IconBadge({ icon, altText, titulo }: IconBadgeProps) {
  return (
    <div className="w-fit flex flex-col gap-y-8 items-center z-20">
      <div className="rounded-full bg-icon-badge w-48 h-48 flex justify-center items-center">
        <Image src={icon} alt={altText} width={160} height={160} />
      </div>

      {titulo && <div className="text-5xl text-center">{titulo}</div>}
    </div>
  );
}
