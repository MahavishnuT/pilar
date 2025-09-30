import { useTranslation } from 'react-i18next';
import './languageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      value={i18n.language}
      onChange={changeLanguage}
      className="language-selector"
    >
      <option value="nl">NL</option>
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
};

export default LanguageSelector;
