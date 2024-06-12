import { PropsWithChildren, useState } from 'react';
import { darkTheme, lightTheme } from '@/theme/globalTheme.css';
import { layout } from './Layout.css';


const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return <main className={`${layout} ${isDarkTheme ? darkTheme : lightTheme}`}>{children}</main>;
};

export default Layout;
