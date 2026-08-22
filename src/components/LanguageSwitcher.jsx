import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const toggleLanguage = () => {
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang);
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
            aria-label="Changer de langue"
        >
            <span className="text-sm">
                {currentLang === 'fr' ? '🇫🇷' : '🇬🇧'}
            </span>
            <span className="text-xs font-medium uppercase">
                {currentLang === 'fr' ? 'FR' : 'EN'}
            </span>
        </motion.button>
    );
};

export default LanguageSwitcher;