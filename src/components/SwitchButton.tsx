import type { FC } from 'react';
import './switchButton.css';

interface SwitchButtonProps {
  title: string;
}

const SwitchButton:FC<SwitchButtonProps> = ({ title }) => {
  return (
    <div className='switch-container'>
      <span>{title}</span>
      <input type="checkbox" />
    </div>
  )
}

export default SwitchButton