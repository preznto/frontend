import type { SVGProps } from 'react';
const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={53} height={28} fill="none" {...props}>
    <path fill="#000" fillOpacity={0.01} d="M.168 0h52v28h-52z" />
    <path
      fill="#303E49"
      fillRule="evenodd"
      d="M19.214 20.319h-1.868V7.685h1.868zm8.923 0h-2.426l-5.58-6.316 5.58-6.318h2.426l-5.554 6.492z"
      clipRule="evenodd"
    />
    <path fill="#FF4C6B" d="M20.13 24.267V22.54H33.61V5.464H20.131v-1.73h15.32v20.533z" />
  </svg>
);
export default Svg;
