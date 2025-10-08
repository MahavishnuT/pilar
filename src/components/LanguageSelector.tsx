import { useTranslation } from 'react-i18next';
import './languageSelector.css';

const LANGUAGES = [
  { code: 'nl', label: 'NL' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
] as const;

type Language = (typeof LANGUAGES)[number]['code'];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-selector">
      <div className={`slider-bg ${i18n.language}`} />
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          className={`language ${i18n.language === code ? 'active' : ''}`}
          onClick={() => changeLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
