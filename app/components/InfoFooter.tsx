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
    <div className="flex gap-x-1 md:gap-x-2 items-center justify-center">
      <div
        className="relative aspect-square w-20 md:w-24 lg:w-32 xl:w-36
"
      >
        <Image src={icon} alt={altText} fill className="object-cover" />
      </div>

      <div className="text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
        {children}
      </div>
    </div>
  );
}
