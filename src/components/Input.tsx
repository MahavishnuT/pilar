import type { FC } from 'react';

import './input.css';

interface InputProps {
  title: string;
  placeholder: string;
  type: string;
}

const Input: FC<InputProps> = ({ title, placeholder, type }) => {
  return (
    <div className="input-container">
      <label htmlFor="input">{title}</label>
      <input
        className="input"
        type={type}
        name="input"
        id="input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
