import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
      className="fixed top-6 right-6 z-50 px-4 py-2 bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-lg text-white hover:border-cyan-400 transition-all duration-300 flex items-center gap-2"
      aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <span className="text-lg">{language === 'fr' ? '🇬🇧' : '🇫🇷'}</span>
      <span className="font-medium">{language === 'fr' ? 'EN' : 'FR'}</span>
    </button>
  );
}