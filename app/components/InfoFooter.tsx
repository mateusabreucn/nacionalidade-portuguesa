import Image from "next/image";

interface InfoFooterProps {
  icon: string;
  altText: string;
  children: React.ReactNode;
}

export default function InfoFooter({
  icon,
  altText,
  children,
}: InfoFooterProps) {
  return (
    <div className="flex gap-x-2 items-center justify-center">
      <div className="relative aspect-square w-[120px] lg:w-[140px] xl:w-[150px]">
        <Image src={icon} alt={altText} fill objectFit="cover" />
      </div>

      <div className="text-md lg:text-md xl:text-xl 2xl:text-2xl">
        {children}
      </div>
    </div>
  );
}
