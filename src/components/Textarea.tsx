import type { FC } from 'react';

import './textarea.css';

interface TextareaProps {
  title?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}

const Textarea: FC<TextareaProps> = ({
  title,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="textarea-container">
      <label htmlFor={`textarea-${title}`}>
        {title}
      </label>
      <textarea
        className="textarea"
        id={`textarea-${title}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
      />
    </div>
  );
};

export default Textarea;
