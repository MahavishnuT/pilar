import type { FC } from 'react';
import './switchButton.css';

interface SwitchButtonProps {
  title: string;
  name: string;
  onChange?: (value: boolean) => void;
  value?: boolean;
}

const SwitchButton: FC<SwitchButtonProps> = ({
  title,
  onChange,
  value,
}) => {
  return (
    <div className="switch-container">
      <span>{title}</span>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default SwitchButton;
