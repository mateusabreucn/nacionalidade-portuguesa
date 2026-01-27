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
        text-black text-sm xl:text-lg 2xl:text-xl 3xl:text-[1.5rem] 4xl:text-3xl font-medium
        rounded-lg
        transition-transform duration-300 hover:scale-110 hover:bg-bg-badge
      "
    >
      {name}
    </a>
  );
}
