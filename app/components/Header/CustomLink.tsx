interface LinkProps {
  name: string;
  href: string;
}

export default function CustomLink({ name, href }: LinkProps) {
  return (
    <a
      href={`#${href}`}
      className="
        text-black
        text-sm xl:text-lg 2xl:text-xl 3xl:text-[1.5rem] 4xl:text-3xl
        font-medium
        px-2 py-1
        rounded-lg
        hover:scale-110 hover:bg-bg-badge
        transition-transform duration-300"
    >
      {name}
    </a>
  );
}
