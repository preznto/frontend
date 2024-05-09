import * as stylex from '@stylexjs/stylex';
import { PropsWithChildren } from 'react';

const MAX_WIDTH = 1280;
const styles = stylex.create({
  layout: {
    maxWidth: MAX_WIDTH,
    paddingBottom: 30,
    marginRight: 'auto',
    marginLeft: 'auto',
    height: '100%',
  },
});

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main {...stylex.props(styles.layout)}>{children}</main>;
};

export default Layout;
