import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Camera, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const galerieData = {
    photos: [
        { id: 1, src: '/galerieSicaf/1.jpg', alt: "Cérémonie d'ouverture SICAF 2025" },
        { id: 2, src: '/galerieSicaf/2.jpg', alt: "Hall d'exposition principal SICAF 2025" },
        { id: 3, src: '/galerieSicaf/3.jpg', alt: 'Atelier de dégustation SICAF 2025' },
        { id: 4, src: '/galerieSicaf/4.jpg', alt: 'Conférence inaugurale SICAF 2025' },
        { id: 5, src: '/galerieSicaf/5.jpg', alt: 'Session de networking SICAF 2025' },
        { id: 6, src: '/galerieSicaf/6.jpg', alt: 'Remise des prix SICAF 2025' },
        { id: 7, src: '/galerieSicaf/7.jpg', alt: 'Stand Éthiopie SICAF 2025' },
        { id: 8, src: '/galerieSicaf/8.jpg', alt: 'Masterclass barista SICAF 2025' },
        { id: 9, src: '/galerieSicaf/9.jpg', alt: 'Dégustation de cafés rares SICAF 2025' },
        { id: 10, src: '/galerieSicaf/10.jpg', alt: 'Rencontres B2B SICAF 2025' },
        { id: 11, src: '/galerieSicaf/11.jpg', alt: 'Exposition des producteurs SICAF 2025' },
        { id: 12, src: '/galerieSicaf/12.jpg', alt: 'Atelier de torréfaction SICAF 2025' },
        { id: 13, src: '/galerieSicaf/13.jpg', alt: 'Cocktail de clôture SICAF 2025' },
        { id: 14, src: '/galerieSicaf/banner.jpg', alt: 'Remise des distinctions SICAF 2025' },
        { id: 15, src: '/galerieSicaf/15.jpg', alt: 'Conférence des experts SICAF 2025' },
        { id: 16, src: '/galerieSicaf/16.jpg', alt: 'Stand Rwanda SICAF 2025' },
        { id: 17, src: '/galerieSicaf/17.jpg', alt: 'Atelier de cupping SICAF 2025' },
        { id: 18, src: '/galerieSicaf/18.jpg', alt: 'Signature de partenariats SICAF 2025' },
        { id: 19, src: '/galerieSicaf/19.jpg', alt: 'Démonstration de torréfaction SICAF 2025' },
        { id: 20, src: '/galerieSicaf/20.jpg', alt: 'Stand Kenya SICAF 2025' },
        { id: 21, src: '/galerieSicaf/21.jpg', alt: 'Panel sur le commerce équitable SICAF 2025' },
        { id: 22, src: '/galerieSicaf/22.jpg', alt: 'Atelier de latte art SICAF 2025' },
        { id: 23, src: '/galerieSicaf/23.jpg', alt: 'Stand Ouganda SICAF 2025' },
        { id: 24, src: '/galerieSicaf/24.jpg', alt: 'Conférence sur la durabilité SICAF 2025' },
        { id: 25, src: '/galerieSicaf/25.jpg', alt: 'Dégustation de cafés bio SICAF 2025' },
        { id: 26, src: '/galerieSicaf/26.jpg', alt: 'Stand Tanzanie SICAF 2025' },
        { id: 27, src: '/galerieSicaf/27.jpg', alt: 'Atelier de préparation SICAF 2025' },
        { id: 28, src: '/galerieSicaf/28.jpg', alt: 'Rencontre avec les producteurs SICAF 2025' },
        { id: 29, src: '/galerieSicaf/29.jpg', alt: "Stand Côte d'Ivoire SICAF 2025" },
        { id: 30, src: '/galerieSicaf/30.jpg', alt: "Conférence sur l'innovation SICAF 2025" },
    ],
};

const GaleriePage = () => {
    const { t } = useTranslation();
    const [viewMode] = useState('grid');
    const [visibleCount] = useState(66);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const headerItem = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const photos = galerieData.photos.slice(0, visibleCount);

    return (
        <>
            {/* Hero Header */}
            <section className="relative h-[40vh] overflow-hidden bg-gradient-to-r from-sicaf-darkCoffee to-sicaf-coffee">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{
                            backgroundImage: "url('/cafe.jpg')",
                            backgroundAttachment: 'fixed',
                        }}
                    />
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundSize: '40px',
                        }}
                    />
                </div>
                <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
                    <motion.div
                        variants={headerItem}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl px-4"
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                            <Camera className="h-4 w-4 text-amber-300" />
                            <span className="text-sm font-medium">
                                {t('galeriePage.badge', 'Galerie officielle')}
                            </span>
                        </div>
                        <h1 className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl">
                            SICAF <span className="text-amber-300">{t('galeriePage.year', '2025')}</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-white/90">
                            {t('galeriePage.subtitle', "Revivez les moments magiques de l'édition 2025 à travers notre galerie photo")}
                        </p>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100px' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mx-auto mt-6 h-1 bg-gradient-to-r from-amber-300 to-white"
                        />
                    </motion.div>
                </div>
                <Link
                    to="/"
                    className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span>{t('galeriePage.back', 'Retour')}</span>
                </Link>
            </section>

            {/* Gallery */}
            <section className="relative overflow-hidden bg-gradient-to-b from-white via-sicaf-light/20 to-white py-16">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full bg-sicaf-coffee/20 blur-[120px]"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                        className="absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-sicaf-leaf/20 blur-[120px]"
                    />
                </div>

                <div className="container relative z-10 mx-auto px-4">
                    <motion.div
                        variants={headerItem}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mx-auto mb-12 max-w-3xl text-center"
                    >
                        <h2 className="text-3xl font-bold text-sicaf-darkCoffee md:text-4xl">
                            {t('galeriePage.galleryTitle', "Découvrez les moments forts de l'édition 2025")}
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={
                            viewMode === 'grid'
                                ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'
                                : 'flex flex-col gap-4'
                        }
                    >
                        {photos.map((photo) => (
                            <motion.div
                                key={photo.id}
                                variants={item}
                                layout
                                className={`group relative overflow-hidden rounded-2xl bg-white shadow-soft ${viewMode === 'list' ? 'flex h-48' : ''
                                    }`}
                            >
                                <div
                                    className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3' : 'aspect-[4/3]'
                                        }`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sicaf-coffee/20 to-sicaf-darkCoffee/40"
                                    >
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="h-full w-full object-cover"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default GaleriePage;