import type { FC } from 'react';
import { Link } from 'react-router';
import './button.css';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  isLightBg?: boolean;
  className?: string;
  isSubmit?: boolean;
  to?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  isLightBg,
  className,
  isSubmit,
  to,
  disabled,
}) => {
  const ButtonContent = (
    <button
      className={`btn ${isLightBg ? 'light-bg' : ''} ${disabled ? 'disabled' : ''}`}
      type={isSubmit ? 'submit' : 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
        <polyline points="169,1 169,59 11,59 11,1 169,1" className="bg-line" />
        <polyline points="169,1 169,59 11,59 11,1 169,1" className="hl-line" />
      </svg>
      <span>{title}</span>
    </button>
  );

  return (
    <div className={`center ${className || ''}`}>
      {to ? <Link to={to}>{ButtonContent}</Link> : ButtonContent}
    </div>
  );
};

export default Button;
