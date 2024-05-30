import {
  IconHeart,
  IconHeartFilled,
  IconMessage,
  IconMessageFilled,
  IconPerson,
  IconPersonFilled,
} from './icons';
import { useCallback, useMemo } from 'react';
import * as stylex from '@stylexjs/stylex';
import { layout } from '../../theme/layout.stylex';
import { colors } from '../../theme/colors.stylex';

type Menu = 'wish' | 'message' | 'my';
type NavigationItem = {
  menu: Menu;
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  { menu: 'message', activeIcon: <IconMessageFilled />, inactiveIcon: <IconMessage /> },
  { menu: 'wish', activeIcon: <IconHeartFilled />, inactiveIcon: <IconHeart /> },
  { menu: 'my', activeIcon: <IconPersonFilled />, inactiveIcon: <IconPerson /> },
];

interface BottomNavigationActionProps {
  item: NavigationItem;
  isActive: boolean;
  onClick: (menu: Menu) => void;
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
      style={{ pointerEvents: isActive ? 'none' : undefined }}
      onClick={() => onClick(item.menu)}
    >
      {Icon}
    </div>
  );
};

const styles = stylex.create({
  container: {
    position: 'fixed',
    maxWidth: layout.maxWidth,
    width: '100%',
    bottom: 0,
    left: 'auto',
    right: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '12px 0 8px',
    height: layout.bottomNavigationHeight,
    borderTop: '1px solid ' + colors.black08,
    zIndex: layout.zIndexNavigation,
  },
});

export interface BottomNavigationProps {
  visible: boolean;
  active: Menu | null;
  onChange: (menu: Menu) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ visible, active, onChange }) => {
  const handleClickMenu = useCallback(
    (menu: Menu) => {
      onChange(menu);
    },
    [onChange]
  );
  return (
    visible && (
      <div {...stylex.props(styles.container)}>
        {NAVIGATION_ITEMS.map((item, index) => (
          <BottomNavigationAction
            key={index}
            item={item}
            isActive={active === item.menu}
            onClick={handleClickMenu}
          />
        ))}
      </div>
    )
  );
};

export default BottomNavigation;
