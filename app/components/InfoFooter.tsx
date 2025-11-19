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
      <Image src={icon} alt={altText} width={152} height={152} />

      <div className="text-2xl">{children}</div>
    </div>
  );
}
