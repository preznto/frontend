import type { SVGProps } from 'react';
const SvgMessageFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" {...props}>
    <path
      fill="#111"
      stroke="#111"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M8 11h24v18H8z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10 13 10 8 10-8"
    />
  </svg>
);
export default SvgMessageFilled;
