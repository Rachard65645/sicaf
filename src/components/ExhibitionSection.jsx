import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useCallback } from 'react';
import {
    MapPin, Building2, Coffee, Zap,
    ChevronLeft, ChevronRight,
    ArrowRight, Layout
} from 'lucide-react';
import { GiCoffeeBeans } from 'react-icons/gi';

const ExhibitionSection = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying,] = useState(true);
    const [direction, setDirection] = useState(0);

    const iconMap = {
        MapPin: <MapPin className="h-6 w-6" />,
        Building2: <Building2 className="h-6 w-6" />,
        Coffee: <Coffee className="h-6 w-6" />,
        Beans: <GiCoffeeBeans className="h-6 w-6" />,
        Zap: <Zap className="h-6 w-6" />,
    };

    // Récupérer les espaces depuis la traduction
    const spacesFromTranslation = t('exhibition.spaces', { returnObjects: true });

    // Images spécifiques pour chaque espace avec des thèmes cohérents
    const spaceImages = {
        'Pavillons Pays': {
            image: '/new/10.png',
            gradient: 'from-emerald-900/70 to-blue-900/70'
        },
        'Pavillons Entreprises': {
            image: '/new/11.png',
            gradient: 'from-blue-900/70 to-indigo-900/70'
        },
        'Espace Café': {
            image: '/new/12.png',
            gradient: 'from-amber-900/70 to-orange-900/70'
        },
        'Espace Cacao & Chocolat': {
            image: '/new/4.png',
            gradient: 'from-amber-900/70 to-brown-900/70'
        },
        'Espace Innovation': {
            image: '/new/13.png',
            gradient: 'from-purple-900/70 to-violet-900/70'
        }
    };

    const spacesData = spacesFromTranslation.map((space, index) => ({
        ...space,
        id: `space-${index}`,
        image: spaceImages[space.title]?.image || 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        gradient: spaceImages[space.title]?.gradient || 'from-amber-900/70 to-amber-800/70'
    }));

    const totalSlides = spacesData.length;

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Autoplay
    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isPlaying, nextSlide]);


    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.9,
            rotateY: direction > 0 ? 15 : -15,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.9,
            rotateY: direction < 0 ? 15 : -15,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };


    const currentSpace = spacesData[currentIndex];
    const benefits = t('exhibition.benefits', { returnObjects: true });

    return (
        <section
            id="exposition"
            className="relative overflow-hidden bg-gradient-to-b from-sicaf-light to-white py-16"
        >
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
                    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full bg-amber-600/5 blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-amber-800/5 blur-[120px]"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto mb-12 max-w-4xl text-center"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-100 to-amber-200/50 px-6 py-2 shadow-inner">
                        <MapPin className="h-4 w-4 text-amber-700" />
                        <span className="text-sm font-medium tracking-wider text-amber-800">
                            {t('exhibition.badge', "ESPACES D'EXPOSITION")}
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-sicaf-darkCoffee md:text-5xl lg:text-6xl">
                        {t('exhibition.title', 'Nos')}{' '}
                        <span className="relative">
                            <span className="text-amber-700">{t('exhibition.titleHighlight', 'Espaces')}</span>
                            <motion.span
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            />
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                        {t('exhibition.subtitle', "Le salon proposera différents espaces permettant aux exposants de présenter leurs produits et services.")}
                    </p>
                </motion.div>

                {/* Carrousel */}
                <div className="relative mx-auto max-w-5xl">
                    <div className="relative overflow-hidden">
                        <div className="relative h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0"
                                >
                                    <div className="absolute inset-0">
                                        <img
                                            src={currentSpace.image}
                                            alt={currentSpace.title}
                                            className="h-full w-full object-cover"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${currentSpace.gradient}`} />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
                                    </div>

                                    <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12 lg:p-16">
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-3xl md:text-4xl font-bold text-white mb-3"
                                        >
                                            {currentSpace.title}
                                        </motion.h3>

                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="max-w-xl text-base md:text-lg text-white/90 leading-relaxed"
                                        >
                                            {currentSpace.description}
                                        </motion.p>

                                        <div className="absolute bottom-6 right-6 flex gap-2">
                                            {spacesData.map((_, idx) => (
                                                <motion.button
                                                    key={idx}
                                                    whileHover={{ scale: 1.2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={() => goToSlide(idx)}
                                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                                        ? 'w-10 bg-white'
                                                        : 'w-2 bg-white/40 hover:bg-white/60'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute inset-x-4 top-1/2 z-20 flex -translate-y-1/2 justify-between">
                                <motion.button
                                    whileHover={{ scale: 1.1, x: -2, backgroundColor: 'rgba(255,255,255,0.3)' }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={prevSlide}
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white shadow-lg transition-all duration-300 border border-white/20"
                                    aria-label={t('exhibition.previous', 'Précédent')}
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1, x: 2, backgroundColor: 'rgba(255,255,255,0.3)' }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={nextSlide}
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white shadow-lg transition-all duration-300 border border-white/20"
                                    aria-label={t('exhibition.next', 'Suivant')}
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        {spacesData.map((space, idx) => (
                            <motion.button
                                key={idx}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => goToSlide(idx)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'bg-gradient-to-r from-amber-600 to-amber-800 text-white shadow-lg shadow-amber-600/25'
                                    : 'bg-white/80 text-gray-600 hover:bg-amber-50 hover:text-amber-700 border border-gray-200/50'
                                    }`}
                            >
                                <span className="text-sm">
                                    {iconMap[space.icon]}
                                </span>
                                <span className="text-sm font-medium whitespace-nowrap">
                                    {space.title}
                                </span>
                                {idx === currentIndex && (
                                    <motion.span
                                        layoutId="active-dot"
                                        className="h-1.5 w-1.5 rounded-full bg-white"
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mx-auto mt-16 max-w-4xl rounded-3xl bg-gradient-to-br from-amber-50 to-amber-100 p-8"
                >
                    <h3 className="mb-6 text-2xl font-bold text-amber-900 text-center">
                        Ce que les exposants pourront faire :
                    </h3>
                    <div className="grid gap-3 md:grid-cols-2">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <span className="mt-1 text-amber-600 text-sm">✓</span>
                                <span className="text-sm text-amber-900">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Plan d'aménagement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mx-auto mt-16 max-w-6xl"
                >
                    <div className="rounded-3xl bg-white p-8 shadow-soft">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="rounded-full bg-amber-600 p-2 text-white">
                                <Layout className="h-5 w-5" />
                            </div>
                            <h3 className="text-2xl font-bold text-sicaf-darkCoffee">
                                {t('exhibition.floorPlan', "Plan d'aménagement de la salle d'exposition")}
                            </h3>
                        </div>
                        <p className="mb-6 text-gray-600">
                            {t('exhibition.floorPlanDetails', '1000 m² – Surface totale de la salle')}
                        </p>
                        <div className="relative overflow-hidden rounded-2xl border-2 border-amber-200">
                            <img
                                src="/new/plan.png"
                                alt="Plan d'aménagement SICCAF 2027"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="mt-4 text-xs text-gray-500 italic">
                            * Le plan est susceptible d'être modifié selon les contraintes techniques de la salle.
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={item} className="flex flex-wrap gap-3 md:gap-4 justify-center pt-8">
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
                </motion.div>
            </div>
        </section>
    );
};

export default ExhibitionSection;