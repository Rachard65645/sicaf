import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 1.1, x: 60 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const floatVariants = {
        initial: { y: 0 },
        animate: {
            y: [-10, 10, -10],
            transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        },
    };

    return (
        <section className="relative h-screen max-h-[100vh] overflow-hidden bg-gradient-to-b from-sicaf-light via-white to-sicaf-light/50">
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
                    className="absolute -top-96 -left-96 h-[800px] w-[800px] rounded-full bg-sicaf-coffee/5 blur-[120px]"
                />
                <motion.div
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute -bottom-96 -right-96 h-[800px] w-[800px] rounded-full bg-sicaf-canada/5 blur-[120px]"
                />
                <svg
                    className="absolute bottom-0 left-0 right-0 w-full"
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                        d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H0Z"
                        fill="url(#gradient)"
                        fillOpacity="0.1"
                    />
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="720"
                            y1="30"
                            x2="720"
                            y2="120"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#5A2D0C" />
                            <stop offset="1" stopColor="#E11D2E" stopOpacity="0.5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 flex h-full w-full items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                    <div className="flex h-full flex-col justify-center gap-6 lg:gap-8">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="flex flex-wrap items-center gap-3 md:gap-4"
                        >
                            <div className="flex items-center gap-3 md:gap-4">
                                <img
                                    src="/sicaf.jpg"
                                    alt="Logo SICAF"
                                    className="h-10 w-auto md:h-14 object-contain transition-transform duration-300 hover:scale-105"
                                />
                                <img
                                    src="/cccas.png"
                                    alt="Logo CCCA"
                                    className="h-9 w-auto md:h-12 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                                />
                                <img
                                    src="/logo.png"
                                    alt="Logo FOC"
                                    className="h-9 w-auto md:h-12 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                                />
                            </div>
                            <div className="hidden sm:block h-8 w-px md:h-10 bg-gradient-to-b from-transparent via-sicaf-coffee/20 to-transparent" />
                            <span className="rounded-full bg-sicaf-coffee/5 px-3 py-1 md:px-4 md:py-2 text-[10px] md:text-xs font-medium text-sicaf-coffee">
                                {t('common.edition', 'Édition 2026')}
                            </span>
                        </motion.div>

                        {/* Main Content */}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 flex-1"
                        >
                            <div className="space-y-4 md:space-y-6">
                                <motion.div variants={item} className="space-y-3 md:space-y-4">
                                    <span className="inline-block rounded-full bg-sicaf-canada/10 px-4 py-1.5 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold tracking-wide text-sicaf-canada">
                                        {t('hero.badge', 'SICAF Canada 2026')}
                                    </span>
                                    <h1 className="text-3xl font-bold leading-tight text-sicaf-darkCoffee sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                                        {t('hero.title', 'Salon International')}
                                        <span className="relative mt-1 block text-sicaf-coffee md:mt-2">
                                            {t('hero.subtitle', 'du Café Africain')}
                                            <motion.span
                                                initial={{ width: 0 }}
                                                animate={{ width: '100%' }}
                                                transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
                                                className="absolute -bottom-1 left-0 h-0.5 md:h-1 bg-gradient-to-r from-sicaf-coffee to-sicaf-canada"
                                            />
                                        </span>
                                    </h1>
                                    <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                                        {t('hero.description', "La deuxième édition du Salon International du Café Africain se tiendra du 18 au 20 novembre 2026 à Montréal. Un événement international réunissant producteurs, torréfacteurs et investisseurs pour promouvoir les cafés d'exception africains sur le marché nord-américain.")}
                                    </p>
                                </motion.div>

                                <motion.div variants={item} className="flex flex-wrap gap-3 md:gap-4">
                                    <div className="flex items-center gap-2 md:gap-3 rounded-xl bg-white/50 px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-sm">
                                        <div className="rounded-full bg-sicaf-coffee/10 p-1.5 md:p-2">
                                            <MapPin className="h-3 w-3 md:h-4 md:w-4 text-sicaf-coffee" />
                                        </div>
                                        <span className="text-xs md:text-sm font-medium text-sicaf-darkCoffee">
                                            {t('hero.location', 'Montréal, Canada')}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 md:gap-3 rounded-xl bg-white/50 px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-sm">
                                        <div className="rounded-full bg-sicaf-coffee/10 p-1.5 md:p-2">
                                            <Calendar className="h-3 w-3 md:h-4 md:w-4 text-sicaf-coffee" />
                                        </div>
                                        <span className="text-xs md:text-sm font-medium text-sicaf-darkCoffee">
                                            {t('hero.date', '18–20 Novembre 2026')}
                                        </span>
                                    </div>
                                </motion.div>

                                <motion.div variants={item} className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                                    <motion.a
                                        href="#tarif"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="group relative overflow-hidden rounded-xl bg-sicaf-coffee px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-white shadow-primary transition-all hover:bg-sicaf-darkCoffee"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {t('common.register', "S'inscrire maintenant")}
                                            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                                        </span>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-sicaf-coffee to-sicaf-canada"
                                            initial={{ x: '100%' }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        />
                                    </motion.a>
                                    <a href="#apropos" className="relative">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="relative overflow-hidden rounded-xl border-2 border-sicaf-coffee/20 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-sicaf-coffee transition-all hover:border-sicaf-coffee/40 hover:bg-sicaf-coffee/5"
                                        >
                                            {t('common.learnMore', 'En savoir plus')}
                                        </motion.button>
                                    </a>
                                </motion.div>
                            </div>

                            <motion.div variants={imageVariants} className="relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 1.2,
                                        type: 'spring',
                                        stiffness: 200,
                                        damping: 20,
                                    }}
                                    className="absolute -left-3 top-6 z-20 rounded-xl bg-white px-3 py-1.5 md:px-4 md:py-2 shadow-card lg:-left-6"
                                >
                                    <p className="text-xs md:text-sm font-medium text-sicaf-darkCoffee">
                                        {t('hero.edition', '2ème Édition')}
                                    </p>
                                </motion.div>

                                <div className="absolute -inset-3 md:-inset-4 pointer-events-none">
                                    <div className="absolute left-1/2 top-1/2 h-48 w-48 md:h-64 md:w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sicaf-coffee/5" />
                                    <div className="absolute left-1/2 top-1/2 h-72 w-72 md:h-96 md:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sicaf-coffee/5" />
                                </div>

                                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-sicaf-coffee/20 to-transparent mix-blend-overlay" />
                                    <img
                                        src="/hero.jpg"
                                        alt="Salon International du Café Africain SICAF Canada"
                                        className="h-[250px] w-full object-cover sm:h-[300px] md:h-[350px] lg:h-[400px] transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-sicaf-darkCoffee/20 via-transparent to-transparent" />
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.4, duration: 0.6, ease: 'easeOut' }}
                                    className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 rounded-xl bg-white p-3 md:p-4 shadow-card lg:-right-8"
                                >
                                    <p className="text-xs md:text-sm text-gray-500">
                                        {t('hero.coffeeSpecial', 'Cafés d\'exception')}
                                    </p>
                                    <p className="text-lg md:text-2xl font-bold text-sicaf-coffee">
                                        {t('hero.countries', '29 pays')}
                                    </p>
                                    <div className="mt-1 md:mt-2 flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-white bg-sicaf-coffee/10"
                                            />
                                        ))}
                                        <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border-2 border-white bg-sicaf-coffee text-[8px] md:text-xs text-white">
                                            +25
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="absolute bottom-4 md:bottom-8 left-1/2 hidden -translate-x-1/2 transform lg:block"
            >
                <div className="flex flex-col items-center gap-1 md:gap-2">
                    <span className="text-[10px] md:text-xs tracking-widest text-gray-400">
                        {t('common.scroll', 'SCROLL')}
                    </span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="h-8 w-[2px] md:h-10 bg-gradient-to-b from-sicaf-coffee to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;