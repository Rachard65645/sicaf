import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const HeroSection = () => {
    const { t } = useTranslation();

    // Compte à rebours (Mars 2027)
    const targetDate = new Date('2027-03-01T09:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 1.05, x: 40 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const floatVariants = {
        initial: { y: 0 },
        animate: {
            y: [-8, 8, -8],
            transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        },
    };

    const stats = [
        { value: '29', label: t('hero.stats.countries', 'Pays') },
        { value: '500+', label: t('hero.stats.visitors', 'Visiteurs') },
        { value: '50', label: t('hero.stats.stands', 'Stands') },
        { value: '100%', label: t('hero.stats.african', 'Africain') },
    ];

    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <section className="relative h-screen max-h-screen overflow-hidden bg-gradient-to-b from-sicaf-light via-white to-sicaf-light/50">

            {/* ===== BOUTON FIXE — TÉLÉCHARGER LA FICHE D'INSCRIPTION ===== */}
            <motion.a
                href="/new/f.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="fixed top-3 right-3 z-50 md:top-4 md:right-4 lg:right-6 flex items-center gap-1.5 md:gap-2 rounded-lg bg-sicaf-coffee px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-sm font-semibold text-white shadow-primary transition-colors hover:bg-sicaf-darkCoffee"
            >
                <Download className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span className="hidden sm:inline">
                    {t('hero.downloadForm', "Télécharger la fiche d'inscription")}
                </span>
                <span className="sm:hidden">
                    {t('hero.downloadFormShort', 'Fiche d\'inscription')}
                </span>
            </motion.a>

            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 1px 1px, #5A2D0C 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <motion.div
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute -top-96 -left-96 h-[600px] w-[600px] rounded-full bg-sicaf-coffee/5 blur-[120px]"
                />
                <motion.div
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute -bottom-96 -right-96 h-[600px] w-[600px] rounded-full bg-sicaf-canada/5 blur-[120px]"
                />
            </div>

            <div className="relative z-10 flex h-full w-full items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex h-full flex-col justify-center gap-4 lg:gap-5 py-4">

                        {/* ===== HEADER — 3 LOGOS BIEN VISIBLES ===== */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="flex flex-wrap items-center gap-4 md:gap-6"
                        >
                            <div className="flex items-center gap-4 md:gap-6">
                                <img
                                    src="/new/7.png"
                                    alt="Logo SICCAF"
                                    className="h-10 w-auto md:h-12 lg:h-14 object-contain transition-transform duration-300 hover:scale-105"
                                />
                                <div className="h-10 md:h-14 w-px bg-gradient-to-b from-transparent via-sicaf-coffee/30 to-transparent" />
                                <img
                                    src="/cccas.png"
                                    alt="Logo CCCA"
                                    className="h-9 w-auto md:h-11 lg:h-12 object-contain transition-opacity duration-300 hover:opacity-100"
                                />
                                <div className="hidden sm:block h-10 md:h-14 w-px bg-gradient-to-b from-transparent via-sicaf-coffee/30 to-transparent" />
                                <img
                                    src="/logo.png"
                                    alt="Logo FOC"
                                    className="hidden sm:block h-9 w-auto md:h-11 lg:h-12 object-contain transition-opacity duration-300 hover:opacity-100"
                                />
                            </div>
                            <span className="rounded-full bg-sicaf-coffee/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-sicaf-coffee border border-sicaf-coffee/10">
                                {t('common.edition', 'Édition 2027')}
                            </span>
                        </motion.div>

                        {/* ===== CONTENU PRINCIPAL ===== */}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-12 flex-1 min-h-0"
                        >
                            {/* COLONNE GAUCHE */}
                            <div className="space-y-3 md:space-y-4 flex flex-col justify-center h-full">

                                {/* Titre */}
                                <motion.div variants={item} className="space-y-1.5 md:space-y-2">
                                    <h1 className="text-4xl font-bold text-sicaf-darkCoffee md:text-5xl lg:text-6xl">
                                        {t('hero.title', 'Salon International')}
                                        <span className="relative mt-1 block text-sicaf-coffee md:mt-1.5">
                                            {t('hero.subtitle', 'du Café et du Cacao Africain')}
                                            <motion.span
                                                initial={{ width: 0 }}
                                                animate={{ width: '100%' }}
                                                transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
                                                className="absolute -bottom-0.5 left-0 h-0.5 md:h-1 bg-gradient-to-r from-sicaf-coffee to-sicaf-canada"
                                            />
                                        </span>
                                    </h1>
                                    <p className="mx-auto max-w-3xl text-lg text-gray-600 mt-6 ">
                                        {t('hero.description', "La deuxième édition du Salon International du Café et du Cacao Africain se tiendra en mars 2027 à Montréal. Un événement international réunissant producteurs, transformateurs, torréfacteurs, chocolatiers et investisseurs pour promouvoir l'excellence des terroirs africains sur le marché nord-américain.")}
                                    </p>
                                </motion.div>

                                {/* Info pills */}
                                <motion.div variants={item} className="flex flex-wrap gap-2 md:gap-3">
                                    <div className="flex items-center gap-1.5 md:gap-2 rounded-lg bg-white/60 px-2.5 py-1 md:px-3 md:py-1.5 backdrop-blur-sm border border-sicaf-coffee/10">
                                        <span className="text-[10px] md:text-xs font-medium text-sicaf-darkCoffee">
                                            {t('hero.location', 'Montréal, Canada')}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 md:gap-2 rounded-lg bg-white/60 px-2.5 py-1 md:px-3 md:py-1.5 backdrop-blur-sm border border-sicaf-coffee/10">
                                        <span className="text-[10px] md:text-xs font-medium text-sicaf-darkCoffee">
                                            {t('hero.date', 'Mars 2027')}
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Compte à rebours compact */}
                                <motion.div
                                    variants={item}
                                    className="rounded-xl border border-sicaf-coffee/10 bg-white/60 backdrop-blur-sm p-2.5 md:p-3 max-w-md"
                                >
                                    <div className="mb-1.5 flex items-center justify-between">
                                        <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-sicaf-coffee font-semibold">
                                            {t('hero.countdown.title', "Ouverture officielle dans")}
                                        </p>
                                        <span className="text-[9px] md:text-[10px] text-gray-500">
                                            {t('hero.countdown.date', 'Mars 2027')}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-4 gap-1.5">
                                        {[
                                            { value: timeLeft.days, label: t('hero.countdown.days', 'Jours') },
                                            { value: timeLeft.hours, label: t('hero.countdown.hours', 'Heures') },
                                            { value: timeLeft.minutes, label: t('hero.countdown.minutes', 'Min') },
                                            { value: timeLeft.seconds, label: t('hero.countdown.seconds', 'Sec') },
                                        ].map((unit, idx) => (
                                            <div
                                                key={idx}
                                                className="rounded-lg bg-gradient-to-br from-sicaf-coffee/5 to-sicaf-coffee/10 p-1.5 text-center"
                                            >
                                                <div className="text-sm md:text-base font-bold text-sicaf-coffee tabular-nums leading-none">
                                                    {formatNumber(unit.value)}
                                                </div>
                                                <div className="mt-0.5 text-[8px] md:text-[9px] uppercase tracking-wider text-gray-500">
                                                    {unit.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* CTA + Stats */}
                                <motion.div variants={item} className="space-y-2 md:space-y-3">
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        <motion.a
                                            href="#tarif"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="group relative overflow-hidden rounded-lg bg-sicaf-coffee px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-semibold text-white shadow-primary transition-all hover:bg-sicaf-darkCoffee"
                                        >
                                            <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
                                                {t('common.register', "S'inscrire")}
                                                <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-sicaf-coffee to-sicaf-canada"
                                                initial={{ x: '100%' }}
                                                whileHover={{ x: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            />
                                        </motion.a>
                                        <a href="#apropos">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="rounded-lg border-2 border-sicaf-coffee/20 px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-semibold text-sicaf-coffee transition-all hover:border-sicaf-coffee/40 hover:bg-sicaf-coffee/5"
                                            >
                                                {t('common.learnMore', 'En savoir plus')}
                                            </motion.button>
                                        </a>
                                    </div>

                                    {/* Stats inline */}
                                    <div className="grid grid-cols-4 gap-1.5 md:gap-2 pt-2 border-t border-sicaf-coffee/10">
                                        {stats.map((stat, idx) => (
                                            <div key={idx} className="min-w-0">
                                                <p className="text-xs md:text-sm font-bold text-sicaf-darkCoffee leading-none">
                                                    {stat.value}
                                                </p>
                                                <p className="text-[8px] md:text-[9px] text-gray-500 uppercase tracking-wider truncate">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* COLONNE DROITE — IMAGE */}
                            <motion.div variants={imageVariants} className="relative h-full flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 1,
                                        type: 'spring',
                                        stiffness: 200,
                                        damping: 20,
                                    }}
                                    className="absolute -left-2 top-2 z-20 rounded-lg bg-white px-2.5 py-1 md:px-3 md:py-1.5 shadow-card lg:-left-4"
                                >
                                    <p className="text-[10px] md:text-xs font-medium text-sicaf-darkCoffee">
                                        {t('hero.edition', '2ème Édition')}
                                    </p>
                                </motion.div>

                                <div className="absolute -inset-2 md:-inset-3 pointer-events-none">
                                    <div className="absolute left-1/2 top-1/2 h-40 w-40 md:h-56 md:w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sicaf-coffee/5" />
                                    <div className="absolute left-1/2 top-1/2 h-56 w-56 md:h-80 md:w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sicaf-coffee/5" />
                                </div>

                                <div className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-white md:rounded-3xl shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-sicaf-coffee/20 to-transparent mix-blend-overlay z-10" />
                                    <img
                                        src="/new/15.png"
                                        alt="Salon International du Café et du Cacao Africain SICCAF Canada"
                                        className="h-auto max-h-[200px] w-full object-contain sm:max-h-[240px] md:max-h-[280px] lg:max-h-[320px] xl:max-h-[360px] transition-transform duration-700 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-sicaf-darkCoffee/20 via-transparent to-transparent z-10" />
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
                                    className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 rounded-lg bg-white p-2 md:p-3 shadow-card lg:-right-4"
                                >
                                    <p className="text-[10px] md:text-xs text-gray-500">
                                        {t('hero.coffeeSpecial', "Cafés & Cacaos d'exception")}
                                    </p>
                                    <p className="text-base md:text-xl font-bold text-sicaf-coffee">
                                        {t('hero.countries', '29 pays')}
                                    </p>
                                    <div className="mt-1 flex -space-x-1.5">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="h-5 w-5 md:h-6 md:w-6 rounded-full border-2 border-white bg-sicaf-coffee/10"
                                            />
                                        ))}
                                        <div className="flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-full border-2 border-white bg-sicaf-coffee text-[7px] md:text-[9px] text-white">
                                            +25
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;