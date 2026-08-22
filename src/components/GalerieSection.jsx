import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Camera, ArrowRight } from 'lucide-react';

const GalerieSection = () => {
    const { t } = useTranslation();

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const photos = [
        { id: 1, src: '/a/1.jpeg', alt: t('galerie.photos.0.alt', "Cérémonie d'ouverture SICAF 2024"), category: t('galerie.photos.0.category', 'Événement') },
        { id: 2, src: '/a/2.jpeg', alt: t('galerie.photos.1.alt', "Espaces d'exposition SICAF"), category: t('galerie.photos.1.category', 'Exposition') },
        { id: 3, src: '/a/3.jpeg', alt: t('galerie.photos.2.alt', 'Atelier de dégustation SICAF'), category: t('galerie.photos.2.category', 'Atelier') },
        { id: 4, src: '/a/4.jpeg', alt: t('galerie.photos.3.alt', 'Conférence SICAF'), category: t('galerie.photos.3.category', 'Conférence') },
        { id: 5, src: '/a/5.jpeg', alt: t('galerie.photos.4.alt', 'Networking SICAF'), category: t('galerie.photos.4.category', 'Networking') },
        { id: 6, src: '/a/6.jpeg', alt: t('galerie.photos.5.alt', 'Remise des prix SICAF'), category: t('galerie.photos.5.category', 'Récompense') },
    ];

    return (
        <section
            id="galerie"
            className="relative overflow-hidden bg-gradient-to-b from-white via-sicaf-light/20 to-white py-16"
        >
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                    style={{
                        backgroundImage: "url('/cafe.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                    }}
                />
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 1px 1px, #5A2D0C 1px, transparent 0)',
                            backgroundSize: '40px 40px',
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                        className="absolute -top-48 -right-48 h-[500px] w-[500px] rounded-full bg-sicaf-coffee/10 blur-[120px]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                            delay: 0.5,
                        }}
                        className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-sicaf-leaf/10 blur-[120px]"
                    />
                </div>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="relative mx-auto mb-16 text-center"
                >
                    <div className="absolute inset-0 -z-10 rounded-3xl bg-white/30 backdrop-blur-[2px]" />
                    <div className="relative p-8">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sicaf-coffee/10 px-4 py-2 backdrop-blur-sm">
                            <Camera className="h-4 w-4 text-sicaf-coffee" />
                            <span className="text-sm font-medium text-sicaf-coffee">
                                {t('galerie.badge', 'Galerie photos')}
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-sicaf-darkCoffee md:text-5xl lg:text-6xl">
                            {t('galerie.title', 'Moments')} <span className="text-sicaf-coffee">{t('galerie.titleHighlight', 'du SICAF 2025')}</span>
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100px' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mx-auto mt-4 h-1 bg-gradient-to-r from-sicaf-coffee to-sicaf-canada"
                        />
                        <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                            {t('galerie.subtitle', 'Revivez les instants mémorables des éditions précédentes à travers une sélection de photos qui capturent l\'essence du SICAF.')}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            variants={imageVariants}
                            custom={index}
                            whileHover={{ y: -8 }}
                            className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:shadow-xl"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-sicaf-coffee/5">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br"
                                        style={{ background: `url('${photo.src}') center/cover no-repeat` }}
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 z-10 bg-gradient-to-t from-sicaf-darkCoffee/80 via-transparent to-transparent"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <motion.a
                        href="/galerie"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sicaf-coffee to-sicaf-darkCoffee px-8 py-4 text-white shadow-lg transition-all hover:shadow-xl"
                    >
                        <span className="text-lg font-semibold">{t('galerie.seeMore', 'Voir plus de photos')}</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default GalerieSection;