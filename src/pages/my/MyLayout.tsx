import BottomNavigation, { BottomNavigationMenu } from '@/components/common/BottomNavigation';
import { Heading28 } from '@/components/common/typography';
import { routeTree } from '@/routeTree.gen';
import { RoutePaths, useMatchRoute, useNavigate, useRouter } from '@tanstack/react-router';
import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

interface TopSectionProps {
  menu: BottomNavigationMenu;
}
// TODO: UI 구현. 컴포넌트 분리
const TopSection: React.FC<TopSectionProps> = ({ menu }) => {
  const title = useMemo(() => {
    switch (menu) {
      case 'message':
        return (
          <Heading28>
            김해피님의
            <br />
            위시리스트 📝
          </Heading28>
        );
      case 'wishlist':
        return (
          <Heading28>
            김해피님
            <br />
            메시지가 왔어요 💌
          </Heading28>
        );
    }
  }, [menu]);

  if (menu === 'my') return null;
  return <div>{title}</div>;
};

const NAVIGATION = {
  message: '/my/message',
  my: '/my',
  wishlist: '/my/wishlist/$wishlistId',
} satisfies Record<BottomNavigationMenu, RoutePaths<typeof routeTree>>;

const MyLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const matchRoute = useMatchRoute();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<BottomNavigationMenu>('message');

  const findActiveMenu = useCallback((): BottomNavigationMenu => {
    for (const key in NAVIGATION) {
      const menu = key as BottomNavigationMenu;
      const isMatched = matchRoute({ to: NAVIGATION[menu as BottomNavigationMenu] });
      if (isMatched) return menu;
    }
    return 'my';
  }, [matchRoute]);

  useEffect(() => {
    setActiveMenu(findActiveMenu());
    router.subscribe('onResolved', () => {
      setActiveMenu(findActiveMenu());
    });
  }, [findActiveMenu, router]);

  const handleChangeMenu = (menu: BottomNavigationMenu) => {
    const to = NAVIGATION[menu].replace('$wishlistId', '1');
    navigate({ to });
  };

  return (
    <div>
      <TopSection menu={activeMenu} />
      {children}
      <BottomNavigation active={activeMenu} onChange={handleChangeMenu} />
    </div>
  );
};

export default MyLayout;
