import type { FC } from 'react';
import './popUp.css';

interface PopUpProps {
  title: string;
  text: string;
  onClose: () => void;
}

const PopUp: FC<PopUpProps> = ({ title, text, onClose }) => {
  return (
    <div className="popUp-bg">
      <div className="popUp">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PopUp;
