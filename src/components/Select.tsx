import type { FC } from 'react';
import './select.css';

interface SelectProps {
  title: string;
  optionsList: string[];
  onChange?: (value: string) => void;
}

const Select: FC<SelectProps> = ({ title, optionsList, onChange }) => {
  return (
    <div className="select-container">
      <label htmlFor="select">{title}</label>
      <select
        className="select"
        name="select"
        id="select"
        onChange={(e) => onChange?.(e.target.value)}
      >
        <option value="">Select an option</option>
        {optionsList.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
