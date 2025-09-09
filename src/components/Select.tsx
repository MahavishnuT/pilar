import type { FC } from 'react';
import './select.css';

interface SelectProps {
  title: string;
  optionsList: string[];
}

const Select: FC<SelectProps> = ({ title, optionsList }) => {
  return (
    <div className="select-container">
      <label htmlFor="select">{title}</label>
      <select className="select" name="select" id="select">
        <option value="">Select an option</option>
        {optionsList.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
