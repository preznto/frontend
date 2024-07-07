import {
  IconHeart,
  IconHeartFilled,
  IconMessage,
  IconMessageFilled,
  IconPerson,
  IconPersonFilled,
} from './icons';
import { useCallback, useMemo } from 'react';
import * as styles from './BottomNavigation.css';

export type BottomNavigationMenu = 'wishlist' | 'message' | 'my';
type NavigationItem = {
  menu: BottomNavigationMenu;
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  { menu: 'message', activeIcon: <IconMessageFilled />, inactiveIcon: <IconMessage /> },
  { menu: 'wishlist', activeIcon: <IconHeartFilled />, inactiveIcon: <IconHeart /> },
  { menu: 'my', activeIcon: <IconPersonFilled />, inactiveIcon: <IconPerson /> },
];

interface BottomNavigationActionProps {
  item: NavigationItem;
  isActive: boolean;
  onClick: (menu: BottomNavigationMenu) => void;
}

const BottomNavigationAction: React.FC<BottomNavigationActionProps> = ({
  item,
  isActive,
  onClick,
}) => {
  const Icon = useMemo(() => {
    return isActive ? item.activeIcon : item.inactiveIcon;
  }, [isActive, item.activeIcon, item.inactiveIcon]);
  return (
    <div
      style={{ pointerEvents: isActive ? 'none' : undefined, cursor: 'pointer' }}
      onClick={() => onClick(item.menu)}
    >
      {Icon}
    </div>
  );
};

export interface BottomNavigationProps {
  active: BottomNavigationMenu | null;
  onChange: (menu: BottomNavigationMenu) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ active, onChange }) => {
  const handleClickMenu = useCallback(
    (menu: BottomNavigationMenu) => {
      onChange(menu);
    },
    [onChange]
  );
  return (
    <div className={styles.container}>
      {NAVIGATION_ITEMS.map((item, index) => (
        <BottomNavigationAction
          key={index}
          item={item}
          isActive={active === item.menu}
          onClick={handleClickMenu}
        />
      ))}
    </div>
  );
};

export default BottomNavigation;
