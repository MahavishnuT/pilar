import { type FC } from 'react';

import './input.css';

interface InputProps {
  title?: string;
  placeholder?: string;
  type: string;
  className?: string;
  min?: string;
  max?: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = ({
  title,
  placeholder,
  type,
  className,
  min,
  max,
  value,
  onChange,
}) => {
  return (
    <div className={`input-container ${className}`}>
      <label htmlFor="input">{title}</label>
      <input
        className="input"
        type={type}
        name="input"
        id="input"
        placeholder={placeholder}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default Input;
