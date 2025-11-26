interface LinkProps {
  name: string;
  href: string;
}

export default function CustomLink({ name, href }: LinkProps) {
  return (
    <a
      href={`#${href}`}
      className="text-black hover:scale-125 hover:bg-icon-badge p-2 rounded-xl transition-transform duration-300"
    >
      {name}
    </a>
  );
}
