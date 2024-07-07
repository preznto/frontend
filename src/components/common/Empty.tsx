import { PropsWithChildren } from 'react';
import MultiLine from './MultiLine';
import { IconBang } from './icons';
import { Body14 } from './typography';
import * as styles from './Empty.css';
interface EmptyProps {
  icon?: React.ReactNode;
  text: string;
}

const Empty: React.FC<PropsWithChildren<EmptyProps>> = ({
  icon = <IconBang />,
  text,
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        {icon}
        <Body14 color="black64">
          <MultiLine>{text}</MultiLine>
        </Body14>
        {children}
      </div>
    </div>
  );
};

export default Empty;
