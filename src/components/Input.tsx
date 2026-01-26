import type { FC } from 'react';

import './input.css';

interface InputProps {
  title?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  min?: string | number;
  max?: string | number;
  value?: string | number;
  onChange?: (value: string) => void;
  required?: boolean;
}

const Input: FC<InputProps> = ({
  title,
  placeholder,
  type = 'text',
  className,
  min,
  max,
  value,
  onChange,
  required,
}) => {
  // Set minimum date to today if type is date and no min is provided
  const minValue = type === 'date' && !min 
    ? new Date().toISOString().split('T')[0] 
    : min;

  return (
    <div className={`input-container ${className || ''}`}>
      {title && (
        <label htmlFor={`input-${title}`}>
          {title}
        </label>
      )}
      <input
        className="input"
        type={type}
        id={`input-${title}`}
        placeholder={placeholder}
        min={minValue}
        max={max}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
      />
    </div>
  );
};

export default Input;
