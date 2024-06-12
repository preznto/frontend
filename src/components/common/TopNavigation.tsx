import { useCallback } from 'react';
import { IconClose, IconLeft } from './icons';
import { useRouter } from '@tanstack/react-router';
import useTopNavigationStore from '@/store/topNavigation';
import * as styles from './TopNavigation.css';

const TopNavigation: React.FC = () => {
  const router = useRouter();
  const onBack = useCallback(() => router.history.back(), [router.history]);
  const { visible, left, right } = useTopNavigationStore();

  return (
    <header>
      <nav className={styles.nav[visible ? 'visible' : 'hidden']}>
        <div>
          {left === 'back' ? (
            <IconLeft className={styles.clickable} onClick={onBack} />
          ) : left === 'none' ? (
            <div />
          ) : (
            left
          )}
        </div>

        <div>
          {right === 'close' ? (
            <IconClose className={styles.clickable} onClick={onBack} />
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
