const template = (variables, { tpl }) => {
  return tpl`
import type { SVGProps } from 'react';

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);

${variables.exports};
`
}

module.exports = template