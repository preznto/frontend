import * as stylex from '@stylexjs/stylex';
import { PropsWithChildren } from 'react';
import { layout } from '../../theme/layout.stylex';
import TopNavigation from './TopNavigation';

const styles = stylex.create({
  layout: {
    maxWidth: layout.maxWidth,
    paddingBottom: layout.bottomNavigationHeight,
    marginRight: 'auto',
    marginLeft: 'auto',
    height: '100%',
  },
});

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main {...stylex.props(styles.layout)}>
      <TopNavigation />
      {children}
    </main>
  );
};

export default Layout;
