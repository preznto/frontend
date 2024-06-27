import type { SVGProps } from 'react';
const SvgClear = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <rect
      width={22}
      height={22}
      x={1}
      y={23}
      fill="#111"
      fillOpacity={0.2}
      rx={11}
      transform="rotate(-90 1 23)"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8 8 8 8M16 8l-8 8"
    />
  </svg>
);
export default SvgClear;
