import * as stylex from '@stylexjs/stylex';
import { PropsWithChildren } from 'react';
import BottomNavigation from './BottomNavigation';
import { layout } from '../../theme/layout.stylex';
import TopNavigation from './TopNavigation';

const styles = stylex.create({
  layout: {
    maxWidth: layout.maxWidth,
    paddingBottom: layout.bottomNavigationHeight,
    paddingTop: layout.topNavigationHeight,
    marginRight: 'auto',
    marginLeft: 'auto',
    height: '100%',
  },
});

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main {...stylex.props(styles.layout)}>
      {/* TODO: 페이지 별로 prop 다르게 주기. 전역 상태로 관리 */}
      <TopNavigation show={true} left="back" right="close" />
      {children}
      {/* TODO: 페이지 별로 노출 여부 조정하기. 전역 상태로 관리. */}
      <BottomNavigation show={true} />
    </main>
  );
};

export default Layout;
