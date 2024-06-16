import { Color, vars } from '@/theme/globalTheme.css';
import { Body10 } from './typography';
import * as styles from './Badge.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

interface BadgeProps {
  children: string;
  bgColor: Color;
  textColor: Color;
}

const Badge: React.FC<BadgeProps> = ({ children, bgColor, textColor }) => {
  return (
    <span
      className={styles.badge}
      style={assignInlineVars({
        [styles.bgColor]: vars.color[bgColor],
      })}
    >
      <Body10 fw="bold" color={textColor} style={{ wordBreak: 'keep-all' }}>
        {children}
      </Body10>
    </span>
  );
};

export default Badge;
