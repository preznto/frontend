import { ReactElement, useCallback } from 'react';
import { IconClose, IconLeft } from './icons';
import { useRouter } from '@tanstack/react-router';
import * as stylex from '@stylexjs/stylex';
import { layout } from '../../theme/layout.stylex';
import { colors } from '../../theme/colors.stylex';

interface TopNavigationProps {
  left: 'back' | 'none' | ReactElement;
  right?: 'close' | 'none' | ReactElement;
  show: boolean;
}

const styles = stylex.create({
  header: {
    position: 'fixed',
    top: 0,
    left: 'auto',
    right: 'auto',
    width: '100%',
    maxWidth: layout.maxWidth,
    height: layout.topNavigationHeight,
    backgroundColor: colors.white100,
    padding: '8px 10px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clickable: {
    cursor: 'pointer',
  },
});

const TopNavigation: React.FC<TopNavigationProps> = ({ show, left, right = 'none' }) => {
  const router = useRouter();
  const onBack = useCallback(() => router.history.back(), [router.history]);

  return (
    show && (
      <header {...stylex.props(styles.header)}>
        <nav {...stylex.props(styles.nav)}>
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
    )
  );
};

export default TopNavigation;
