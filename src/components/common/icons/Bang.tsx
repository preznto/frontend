import type { SVGProps } from 'react';
const SvgBang = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} fill="none" {...props}>
    <rect width={57.6} height={57.6} x={3.2} y={3.2} fill="#ECECEC" rx={28.8} />
    <rect
      x="32"
      y="18.4873"
      width="7.11111e-05"
      height="17.0667"
      stroke="#111111"
      stroke-opacity="0.2"
      stroke-width="5.68889"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      width={7.111}
      height={7.111}
      x={28.444}
      y={41.956}
      fill="#111"
      fillOpacity={0.2}
      rx={3.556}
    />
  </svg>
);
export default SvgBang;
