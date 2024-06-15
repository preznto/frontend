import type { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <rect
      width={12}
      height={12}
      x={2}
      y={2}
      stroke="#111"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={6}
    />
    <path
      stroke="#111"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 8h4.5M8 5.75v4.5"
    />
  </svg>
);
export default SvgPlus;
