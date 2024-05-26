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
      {/* TODO: 페이지 별로 노출 여부 조정하기. 전역 상태로 관리. */}
      <BottomNavigation show={true} />
    </main>
  );
};

export default Layout;
