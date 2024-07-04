import { Color, vars } from '@/theme/globalTheme.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './ProgressBar.css';
interface ProgressBarProps {
  total: number;
  value: number;
  bgColor?: Color;
  progressColor?: Color;
}
const ProgressBar: React.FC<ProgressBarProps> = ({
  total,
  value,
  bgColor = 'black04',
  progressColor = 'black100',
}) => {
  return (
    <div
      className={styles.bar}
      style={assignInlineVars({
        [styles.bgColor]: vars.color[bgColor],
      })}
    >
      <div
        className={styles.progress}
        style={assignInlineVars({
          [styles.progressColor]: vars.color[progressColor],
          [styles.progressWidth]: `${(value / total) * 100}%`,
        })}
      ></div>
    </div>
  );
};

export default ProgressBar;
