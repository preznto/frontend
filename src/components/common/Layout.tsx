import * as stylex from '@stylexjs/stylex';
import { PropsWithChildren } from 'react';
import BottomNavigation from './BottomNavigation';
import { layout } from '../../theme/layout.stylex';

const styles = stylex.create({
  layout: {
    maxWidth: layout.maxWidth,
    paddingBottom: 30,
    marginRight: 'auto',
    marginLeft: 'auto',
    height: '100%',
  },
});

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main {...stylex.props(styles.layout)}>
      {children}
      <BottomNavigation />
    </main>
  );
};

export default Layout;
