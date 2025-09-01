import type { FC } from 'react';
import './button.css';

interface ButtonProps {
  title: string;
}

const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <div className="center">
      <button className="btn">
        <svg
          width="180px"
          height="60px"
          viewBox="0 0 180 60"
          className="border"
        >
          <polyline points="169,1 169,59 11,59 11,1 169,1" className="bg-line" />
          <polyline points="169,1 169,59 11,59 11,1 169,1" className="hl-line" />
        </svg>
        <span>{title}</span>
      </button>
    </div>
  );
};

export default Button;
