interface LinkProps {
  name: string;
  href: string;
}

export default function CustomLink({ name, href }: LinkProps) {
  return (
    <a
      href={`#${href}`}
      className="
        px-2 py-1
        text-black font-medium
        rounded-lg
        text-[clamp(0.875rem,1.2vw,1.875rem)]
        transition-transform duration-300 hover:scale-105 hover:bg-bg-badge
      "
    >
      {name}
    </a>
  );
}
