import { useCallback } from 'react';
import { IconClose, IconLeft } from './icons';
import { useRouter } from '@tanstack/react-router';
import * as stylex from '@stylexjs/stylex';
import { layout } from '../../theme/layout.stylex';
import { colors } from '../../theme/colors.stylex';
import useTopNavigationStore from '@/store/topNavigation';

const styles = stylex.create({
  nav: (visible) => ({
    height: visible ? layout.topNavigationHeight : 0,
    padding: visible ? '8px 10px' : 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    left: 'auto',
    right: 'auto',
    width: '100%',
    maxWidth: layout.maxWidth,
    backgroundColor: colors.white100,
  }),
  clickable: {
    cursor: 'pointer',
  },
  space: {
    marginBottom: layout.topNavigationHeight,
  },
});

const TopNavigation: React.FC = () => {
  const router = useRouter();
  const onBack = useCallback(() => router.history.back(), [router.history]);
  const { visible, left, right } = useTopNavigationStore();

  return (
    <header>
      <nav {...stylex.props(styles.nav(visible))}>
        <div>
          {left === 'back' ? (
            <IconLeft {...stylex.props(styles.clickable)} onClick={onBack} />
          ) : left === 'none' ? (
            <div />
          ) : (
            left
          )}
        </div>

        <div>
          {right === 'close' ? (
            <IconClose {...stylex.props(styles.clickable)} onClick={onBack} />
          ) : right === 'none' ? (
            <div />
          ) : (
            right
          )}
        </div>
      </nav>
    </header>
  );
};

export default TopNavigation;
