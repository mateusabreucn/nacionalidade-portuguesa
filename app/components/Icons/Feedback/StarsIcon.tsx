interface StarsIconProps {
  className?: string;
}

export default function StarsIcon({ className = "" }: StarsIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 232 56"
      fill="none"
      className={className}
    >
      {/* Retângulo arredondado - mais achatado */}
      <rect
        x="3"
        y="3"
        width="226"
        height="50"
        rx="16"
        ry="16"
        stroke="black"
        strokeWidth="5"
        fill="none"
      />
      {/* 5 Estrelas - maiores */}
      <g transform="translate(24, 10)">
        <path
          d="M16 0 L20.5 11.5 L33 13 L24 21.5 L26.5 34 L16 28 L5.5 34 L8 21.5 L0 13 L12 11.5 Z"
          fill="black"
        />
        <path
          d="M16 0 L20.5 11.5 L33 13 L24 21.5 L26.5 34 L16 28 L5.5 34 L8 21.5 L0 13 L12 11.5 Z"
          fill="black"
          transform="translate(38, 0)"
        />
        <path
          d="M16 0 L20.5 11.5 L33 13 L24 21.5 L26.5 34 L16 28 L5.5 34 L8 21.5 L0 13 L12 11.5 Z"
          fill="black"
          transform="translate(76, 0)"
        />
        <path
          d="M16 0 L20.5 11.5 L33 13 L24 21.5 L26.5 34 L16 28 L5.5 34 L8 21.5 L0 13 L12 11.5 Z"
          fill="black"
          transform="translate(114, 0)"
        />
        <path
          d="M16 0 L20.5 11.5 L33 13 L24 21.5 L26.5 34 L16 28 L5.5 34 L8 21.5 L0 13 L12 11.5 Z"
          fill="black"
          transform="translate(152, 0)"
        />
      </g>
    </svg>
  );
}
