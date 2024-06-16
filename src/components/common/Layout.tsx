import { PropsWithChildren, useState } from 'react';
import { darkTheme, lightTheme } from '@/theme/globalTheme.css';
import { layout } from './Layout.css';
import TopNavigation from './TopNavigation';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <main className={`${layout} ${isDarkTheme ? darkTheme : lightTheme}`}>
      <TopNavigation />
      {children}
    </main>
  );
};

export default Layout;
