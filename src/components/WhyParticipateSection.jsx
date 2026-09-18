import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    TrendingUp, Users, Zap, Award, Share2, Building2,
    ArrowRight, Leaf, Coffee, Globe, Sparkles
} from 'lucide-react';

const WhyParticipateSection = () => {
    const { t } = useTranslation();

    const iconMap = {
        TrendingUp: <TrendingUp className="h-6 w-6" />,
        Users: <Users className="h-6 w-6" />,
        Zap: <Zap className="h-6 w-6" />,
        Award: <Award className="h-6 w-6" />,
        Share2: <Share2 className="h-6 w-6" />,
        Building2: <Building2 className="h-6 w-6" />,
    };

    const reasons = t('whyParticipate.reasons', { returnObjects: true });

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.2 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    // Icônes décoratives flottantes
    const floatingIcons = [
        { Icon: Coffee, delay: 0, duration: 6, x: '5%', y: '15%' },
        { Icon: Leaf, delay: 2, duration: 8, x: '92%', y: '10%' },
        { Icon: Globe, delay: 4, duration: 7, x: '3%', y: '75%' },
        { Icon: Sparkles, delay: 1, duration: 9, x: '95%', y: '80%' },
    ];


    return (
        <section
            id="pourquoi"
            className="relative overflow-hidden bg-gradient-to-b from-white via-sicaf-light/30 to-white py-16"
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
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.03, 0.06, 0.03],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute -top-64 -right-64 h-[800px] w-[800px] rounded-full border-2 border-amber-600/5"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.02, 0.05, 0.02],
                        rotate: [360, 180, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute -bottom-64 -left-64 h-[800px] w-[800px] rounded-full border-2 border-amber-600/5"
                />

                {floatingIcons.map(({ Icon, delay, duration, x, y }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.3, 0.3, 0],
                            scale: [0, 1, 1, 0],
                            x: [0, 20, -20, 0],
                            y: [0, -30, 30, 0]
                        }}
                        transition={{
                            duration: duration,
                            delay: delay,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                        className="absolute hidden lg:block text-amber-600/10"
                        style={{ left: x, top: y }}
                    >
                        <Icon size={48} />
                    </motion.div>
                ))}

                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-amber-400/10 to-orange-400/10 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.08, 0.05]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-amber-600/10 to-amber-400/10 blur-3xl"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto mb-20 max-w-4xl text-center"
                >
                    <motion.div
                        className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-100 to-amber-200/50 px-6 py-2 shadow-inner"
                        whileHover={{ scale: 1.02 }}
                    >
                        <TrendingUp className="h-4 w-4 text-amber-700" />
                        <span className="text-sm font-medium tracking-wider text-amber-800">
                            {t('whyParticipate.badge', 'POURQUOI PARTICIPER')}
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl font-bold text-sicaf-darkCoffee md:text-5xl lg:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('whyParticipate.title', 'Pourquoi')}{' '}
                        <span className="relative">
                            <span className="text-amber-700">{t('whyParticipate.titleHighlight', 'Participer')}</span>
                            <motion.span
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            />
                        </span>
                    </motion.h2>

                    <motion.p
                        className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {t('whyParticipate.subtitle', "La participation à la deuxième édition du SICCAF 2027 à Montréal représente une opportunité stratégique majeure pour tout acteur de la filière café-cacao africaine.")}
                    </motion.p>
                </motion.div>

                {/* Layout principal avec image sticky à droite */}
                <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-8 xl:gap-12">
                    {/* Cartes - 3 colonnes à gauche */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        className="lg:col-span-3"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="group relative rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-amber-200/50"
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50/0 via-amber-50/0 to-amber-100/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    />

                                    <div className="relative">
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                            {iconMap[reason.icon] || <Award className="h-6 w-6" />}
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold text-sicaf-darkCoffee group-hover:text-amber-800 transition-colors duration-300">
                                            {reason.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                                    </div>

                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={item} className="flex flex-wrap gap-3 md:gap-4 pt-8">
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
                            {/* <a href="#apropos" className="relative">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative overflow-hidden rounded-xl border-2 border-sicaf-coffee/20 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-sicaf-coffee transition-all hover:border-sicaf-coffee/40 hover:bg-sicaf-coffee/5"
                                >
                                    {t('common.learnMore', 'En savoir plus')}
                                </motion.button>
                            </a> */}
                        </motion.div>
                    </motion.div>


                    {/* Image sticky à droite - CORRIGÉ */}
                    <div className="lg:col-span-2 relative">
                        {/* Conteneur sticky avec hauteur fixe */}
                        <div className="lg:sticky lg:top-28">
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.3,
                                    ease: [0.25, 0.1, 0.25, 1]
                                }}
                                className="relative w-full"
                            >
                                <div className="relative h-[560px] w-full overflow-visible">

                                    {/* Anneau extérieur */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 30,
                                            repeat: Infinity,
                                            ease: 'linear'
                                        }}
                                        className="absolute -inset-6 rounded-l-[4.5rem] rounded-r-2xl border-2 border-amber-200/20 pointer-events-none"
                                    />

                                    {/* Deuxième anneau */}
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{
                                            duration: 40,
                                            repeat: Infinity,
                                            ease: 'linear'
                                        }}
                                        className="absolute -inset-12 rounded-l-[5rem] rounded-r-2xl border border-amber-200/10 pointer-events-none"
                                    />

                                    {/* Conteneur image */}
                                    <div className="relative h-full w-full overflow-hidden rounded-l-[4rem] rounded-r-2xl shadow-2xl bg-sicaf-darkCoffee/5">

                                        {/* Image */}
                                        <img
                                            src="/new/3.png"
                                            alt="SICCAF 2027 - Café et Cacao Africain"
                                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                        />




                                    </div>
                                    <div className="relative py-8 h-full w-full overflow-hidden rounded-l-[4rem] rounded-r-2xl shadow-2xl bg-sicaf-darkCoffee/5">

                                        {/* Image */}
                                        <img
                                            src="/new/5.png"
                                            alt="SICCAF 2027 - Café et Cacao Africain"
                                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                        />

                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyParticipateSection;