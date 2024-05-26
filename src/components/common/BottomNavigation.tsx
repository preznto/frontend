import { routeTree } from '@/routeTree.gen';
import {
  IconHeart,
  IconHeartFilled,
  IconMessage,
  IconMessageFilled,
  IconPerson,
  IconPersonFilled,
} from './icons';
import { Link, ParseRoute, useRouter } from '@tanstack/react-router';
import { useMemo } from 'react';
import * as stylex from '@stylexjs/stylex';
import { layout } from '../../theme/layout.stylex';

type RegisteredPath = ParseRoute<typeof routeTree>['fullPath'];

type Menu = 'wish' | 'message' | 'my';
type NavigationItem = {
  menu: Menu;
  to: RegisteredPath;
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  { menu: 'message', to: '/' },
  { menu: 'wish', to: '/' },
  { menu: 'my', to: '/' },
];

interface BottomNavigationActionProps {
  item: NavigationItem;
}

const BottomNavigationAction: React.FC<BottomNavigationActionProps> = ({ item }) => {
  const router = useRouter();
  const isActive = useMemo(() => {
    return router.state.location.pathname === item.to;
  }, [item.to, router.state.location.pathname]);

  const Icon = useMemo(() => {
    switch (item.menu) {
      case 'wish':
        return isActive ? <IconHeartFilled /> : <IconHeart />;
      case 'message':
        return isActive ? <IconMessageFilled /> : <IconMessage />;
      case 'my':
        return isActive ? <IconPersonFilled /> : <IconPerson />;
    }
  }, [isActive, item.menu]);
  return (
    <div>
      <Link to={item.to}>{Icon}</Link>
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
    height: 60,
    zIndex: 100,
  },
});

interface BottomNavigationProps {}

const BottomNavigation: React.FC<BottomNavigationProps> = () => {
  return (
    <div {...stylex.props(styles.container)}>
      {NAVIGATION_ITEMS.map((item, index) => (
        <BottomNavigationAction key={index} item={item} />
      ))}
    </div>
  );
};

export default BottomNavigation;
