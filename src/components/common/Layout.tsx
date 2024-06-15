import { PropsWithChildren } from 'react';
import { darkTheme } from '@/theme/globalTheme.css';
import { layout } from './Layout.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  // 다크/라이트 모드 추가시 주석해제
  // const [isDarkTheme, setIsDarkTheme] = useState(false);

  return <main className={`${layout} ${darkTheme}`}>{children}</main>;
};

export default Layout;
