import React from 'react';
import { switchStyle } from './Switch.css';

type Props = {
  onChange: (checked: boolean) => void;
};

const Switch: React.FC<Props> = ({ onChange }) => {
  return (
    <input
      onChange={(e) => onChange(e.target.checked)}
      type="checkbox"
      name="switch"
      className={switchStyle}
    />
  );
};

export default Switch;
