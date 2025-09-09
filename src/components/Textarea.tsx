import type { FC } from 'react';

import './textarea.css';

interface TextareaProps {
  title?: string;
  placeholder?: string;
}

const Textarea: FC<TextareaProps> = ({ title, placeholder }) => {
  return (
    <div className="textarea-container">
      <label htmlFor="textarea">{title}</label>
      <textarea
        className="textarea"
        name="textarea"
        id="textarea"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textarea;
