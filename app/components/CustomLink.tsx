interface LinkProps {
  name: string;
  href: string;
}

export default function CustomLink({ name, href }: LinkProps) {
  return (
    <a
      href={`#${href}`}
      className="text-black text-sm xl:text-lg font-medium px-2 py-1 rounded-lg hover:scale-110 hover:bg-icon-badge transition-transform duration-300"
    >
      {name}
    </a>
  );
}
