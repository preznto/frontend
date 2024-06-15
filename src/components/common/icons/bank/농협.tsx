import type { SVGProps } from 'react';
const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={53} height={28} fill="none" {...props}>
    <path fill="#000" fillOpacity={0.01} d="M.501 0h52v28h-52z" />
    <path
      fill="#FDB913"
      fillRule="evenodd"
      d="m26.5 5.768 4.072-2.035-4.071 7.703-4.072-7.703zm5.43 3.862.064.055v.003a8.29 8.29 0 0 1 2.331 9.183 8.355 8.355 0 0 1-7.825 5.396 8.355 8.355 0 0 1-7.824-5.396 8.29 8.29 0 0 1 2.33-9.183l.064-.056-2.903-1.215V4.356l5.04 2.14 2.795 5.268a4.23 4.23 0 0 0-3.743 4.442 4.236 4.236 0 0 0 4.239 3.977 4.236 4.236 0 0 0 4.238-3.977 4.23 4.23 0 0 0-3.742-4.442l2.797-5.269 5.043-2.14v4.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default Svg;
