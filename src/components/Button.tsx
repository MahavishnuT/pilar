import type { FC } from 'react';
import './button.css';
import { Link } from 'react-router'; // Correction de l'import

interface ButtonProps {
  title: string;
  isLightBg?: boolean;
  className?: string;
  isSubmit?: boolean;
  to?: string; // Nouvelle prop optionnelle pour le lien
}

const Button: FC<ButtonProps> = ({
  title,
  isLightBg,
  className,
  isSubmit,
  to,
}) => {
  const ButtonContent = (
    <button
      className={`btn ${isLightBg ? 'light-bg' : ''}`}
      type={isSubmit ? 'submit' : 'button'}
    >
      <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
        <polyline points="169,1 169,59 11,59 11,1 169,1" className="bg-line" />
        <polyline points="169,1 169,59 11,59 11,1 169,1" className="hl-line" />
      </svg>
      <span>{title}</span>
    </button>
  );

  return (
    <div className={`center ${className}`}>
      {to ? <Link to={to}>{ButtonContent}</Link> : ButtonContent}
    </div>
  );
};

export default Button;
