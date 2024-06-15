import type { SVGProps } from 'react';
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" {...props}>
    <circle
      cx={20}
      cy={13}
      r={5}
      stroke="#111"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
    />
    <path
      stroke="#111"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M9 28.5a7.5 7.5 0 0 1 7.5-7.5h7a7.5 7.5 0 0 1 7.5 7.5v0a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 9 28.5"
    />
  </svg>
);
export default SvgPerson;
