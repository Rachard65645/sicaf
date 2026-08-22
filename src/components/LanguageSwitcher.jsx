import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const toggleLanguage = () => {
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-40"
        >
            <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.92 }}
                className="group flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-sicaf-coffee/10 px-2.5 py-2 shadow-md hover:shadow-lg transition-all duration-300 hover:border-sicaf-coffee/25"
                aria-label="Changer de langue"
            >
                {/* Drapeau */}
                <span className="text-base leading-none">
                    {currentLang === 'fr' ? '🇫🇷' : '🇬🇧'}
                </span>

                {/* Code langue */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-sicaf-coffee/80 group-hover:text-sicaf-coffee transition-colors">
                    {currentLang === 'fr' ? 'FR' : 'EN'}
                </span>

                <span className="w-px h-3 bg-sicaf-coffee/20 group-hover:bg-sicaf-coffee/40 transition-colors" />

                <span className="text-[9px] font-medium uppercase tracking-wider text-sicaf-coffee/30 group-hover:text-sicaf-coffee/50 transition-colors">
                    {currentLang === 'fr' ? 'EN' : 'FR'}
                </span>

                <Languages className="h-3 w-3 text-sicaf-coffee/30 group-hover:text-sicaf-coffee/60 transition-colors" />

                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-sicaf-coffee/5 to-sicaf-canada/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
            </motion.button>
        </motion.div>
    );
};

export default LanguageSwitcher;