import type { SVGProps } from 'react';
const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
    <path
      stroke="#111"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m20 8-8 8 8 8"
    />
  </svg>
);
export default SvgLeft;
