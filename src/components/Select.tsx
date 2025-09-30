import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './select.css';

interface SelectProps {
  title: string;
  optionsList: string[];
  onChange?: (value: string) => void;
  value?: string;
  required?: boolean;
}

const Select: FC<SelectProps> = ({
  title,
  optionsList,
  onChange,
  value,
  required,
}) => {
  const { t } = useTranslation();

  return (
    <div className="select-container">
      <label htmlFor={`select-${title}`}>{title}</label>
      <select
        className="select"
        id={`select-${title}`}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
      >
        <option value="">{t('selectDefaultOption')}</option>
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
