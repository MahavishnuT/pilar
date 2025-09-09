import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';
import './phoneInput.css';

const PhoneInputs = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <div className="phoneInput-container">
      <label htmlFor="phoneInput-label">Phone Number</label>
      <PhoneInput
        placeholder="Enter phone number"
        countryCallingCodeEditable={false}
        international
        defaultCountry="BE"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default PhoneInputs;
