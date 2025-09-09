import type { FC } from 'react';

import './input.css';

interface InputProps {
  title?: string;
  placeholder?: string;
  type: string;
  className?: string;
  min?: string;
  max?: string;
}

const Input: FC<InputProps> = ({ title, placeholder, type, className, min, max }) => {
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
      />
    </div>
  );
};

export default Input;
