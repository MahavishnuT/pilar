import type { FC } from 'react';
import './button.css';
import { Link } from 'react-router';

interface ButtonProps {
  title: string;
  isLightBg?: boolean;
}

const Button: FC<ButtonProps> = ({ title, isLightBg }) => {
  return (
    <div className="center">
      <Link to={'/booking'}>
        <button className={`btn ${isLightBg ? 'light-bg' : ''}`}>
          <svg
            width="180px"
            height="60px"
            viewBox="0 0 180 60"
            className="border"
          >
            <polyline
              points="169,1 169,59 11,59 11,1 169,1"
              className="bg-line"
            />
            <polyline
              points="169,1 169,59 11,59 11,1 169,1"
              className="hl-line"
            />
          </svg>
          <span>{title}</span>
        </button>
      </Link>
    </div>
  );
};

export default Button;
