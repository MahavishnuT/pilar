import type { FC } from 'react';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';
import './phoneInput.css';

interface PhoneInputsProps {
  value?: string;
  onChange?: (value: string | undefined) => void;
  required?: boolean;
}

const PhoneInputs: FC<PhoneInputsProps> = ({ value, onChange, required }) => {
  const [phoneValue, setPhoneValue] = useState<string | undefined>(value);

  const handleChange = (newValue: string | undefined) => {
    setPhoneValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="phoneInput-container">
      <label htmlFor="phoneInput-label">Telefoonnummer</label>
      <PhoneInput
        placeholder="Enter phone number"
        countryCallingCodeEditable={false}
        international
        defaultCountry="BE"
        value={phoneValue}
        onChange={handleChange}
        required={required}
      />
    </div>
  );
};

export default PhoneInputs;
