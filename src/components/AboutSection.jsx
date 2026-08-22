import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    Award, Users, TrendingUp, Zap, Coffee, Share2,
    Download, FileText
} from 'lucide-react';

const AboutSection = () => {
    const { t } = useTranslation();

    const objectives = [
        {
            icon: <Award className="h-5 w-5" />,
            title: t('about.objectivesList.items.0.title', 'Valoriser les origines'),
            description: t('about.objectivesList.items.0.description', 'Valoriser les différentes origines de café africain'),
        },
        {
            icon: <Users className="h-5 w-5" />,
            title: t('about.objectivesList.items.1.title', 'Rencontres B2B'),
            description: t('about.objectivesList.items.1.description', 'Faciliter les rencontres B2B entre producteurs, acheteurs et investisseurs'),
        },
        {
            icon: <TrendingUp className="h-5 w-5" />,
            title: t('about.objectivesList.items.2.title', "Opportunités d'exportation"),
            description: t('about.objectivesList.items.2.description', "Créer des opportunités d'exportation vers les marchés nord-américains"),
        },
        {
            icon: <Zap className="h-5 w-5" />,
            title: t('about.objectivesList.items.3.title', 'Innovations technologiques'),
            description: t('about.objectivesList.items.3.description', 'Présenter les innovations technologiques de la filière café'),
        },
        {
            icon: <Coffee className="h-5 w-5" />,
            title: t('about.objectivesList.items.4.title', 'Transformation locale'),
            description: t('about.objectivesList.items.4.description', 'Encourager la transformation locale du café en Afrique'),
        },
        {
            icon: <Share2 className="h-5 w-5" />,
            title: t('about.objectivesList.items.5.title', "Partage d'expériences"),
            description: t('about.objectivesList.items.5.description', "Favoriser le partage d'expériences entre professionnels du secteur"),
        },
    ];

    const goals = [
        t('about.goalsList.0', "Promouvoir l'excellence du café africain"),
        t('about.goalsList.1', "Faciliter les échanges commerciaux entre l'Afrique et le Canada"),
        t('about.goalsList.2', 'Encourager les investissements dans la filière café'),
        t('about.goalsList.3', 'Soutenir les producteurs et les coopératives'),
        t('about.goalsList.4', "Favoriser le transfert de connaissances et d'expertises"),
        t('about.goalsList.5', 'Positionner le café africain comme un produit de référence sur les marchés internationaux'),
    ];

    return (
        <section id="apropos" className="relative bg-white py-16">
            <div className="absolute inset-0 overflow-hidden">
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
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto mb-16 max-w-4xl text-center"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-6 py-2">
                        <Award className="h-4 w-4 text-amber-700" />
                        <span className="text-sm font-medium tracking-wider text-amber-800">
                            {t('about.badge', 'PRÉSENTATION GÉNÉRALE')}
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-sicaf-darkCoffee md:text-5xl lg:text-6xl">
                        {t('about.title', 'À propos du')} <span className="text-amber-700">SICAF</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '120px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mx-auto mt-4 h-1 bg-gradient-to-r from-amber-600 to-amber-800"
                    />
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Image */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img
                                src="/s.jpg"
                                alt="Café africain - SICAF 2026"
                                className="h-[550px] w-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-sicaf-darkCoffee/40 via-transparent to-transparent" />
                            <div className="absolute -inset-4 pointer-events-none">
                                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber-400/10" />
                                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber-400/10" />
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 space-y-3"
                        >
                            <a
                                href="/p1.pdf"
                                download
                                className="flex items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 p-4 text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="rounded-lg bg-white/20 p-2">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold">
                                            {t('about.downloadFr', 'Dossier de présentation en français')}
                                        </p>
                                        <p className="text-xs text-amber-100">SICAF 2026 - PDF</p>
                                    </div>
                                </div>
                                <Download className="h-5 w-5" />
                            </a>
                            <a
                                href="/p2.pdf"
                                download
                                className="flex items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-amber-700 to-amber-800 p-4 text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="rounded-lg bg-white/20 p-2">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold">
                                            {t('about.downloadEn', 'Dossier de présentation en anglais')}
                                        </p>
                                        <p className="text-xs text-amber-100">SICAF 2026 - PDF</p>
                                    </div>
                                </div>
                                <Download className="h-5 w-5" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                                {t('about.description1', "Le Salon International du Café Africain (SICAF) est une plateforme économique, commerciale et culturelle dédiée à la promotion du café africain sur les marchés internationaux.")}
                            </p>
                            <p className="mt-4 text-lg leading-relaxed text-gray-700 md:text-xl">
                                {t('about.description2', "Après le succès de sa première édition, le SICAF revient pour une deuxième édition qui se tiendra du")}{' '}
                                <strong className="text-amber-700">18 au 20 novembre 2026</strong>{' '}
                                {t('about.description3', "à Montréal, au Canada.")}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h3 className="mb-6 text-2xl font-bold text-sicaf-darkCoffee">
                                {t('about.objectives', 'Objectifs du SICAF 2026')}
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {objectives.map((obj, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -4 }}
                                        className="group rounded-2xl bg-white p-5 shadow-soft transition-all hover:shadow-xl"
                                    >
                                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow-lg">
                                            {obj.icon}
                                        </div>
                                        <h4 className="mb-1 text-sm font-bold text-sicaf-darkCoffee">
                                            {obj.title}
                                        </h4>
                                        <p className="text-xs text-gray-600">{obj.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-900 to-amber-800 p-6 text-white shadow-2xl"
                        >
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    mixBlendMode: 'overlay',
                                }}
                            />
                            <div className="relative z-10">
                                <h3 className="mb-3 text-xl font-bold">{t('about.preamble', 'Préambule')}</h3>
                                <p className="mb-3 text-sm leading-relaxed text-amber-100">
                                    {t('about.preambleText1', "L'Afrique est reconnue comme le berceau du café et demeure l'une des régions productrices les plus importantes au monde. Pourtant, malgré la qualité exceptionnelle de ses cafés et la diversité de ses terroirs, les producteurs africains font encore face à plusieurs défis liés à l'accès aux marchés internationaux, à la transformation locale, au financement et à la valorisation de leurs produits.")}
                                </p>
                                <p className="text-sm leading-relaxed text-amber-100">
                                    {t('about.preambleText2', "Face à ce constat, la")}{' '}
                                    <strong>{t('about.ccca', 'Chambre de Commerce Canada-Afrique (CCCA)')}</strong>{' '}
                                    {t('about.preambleText3', "a initié le Salon International du Café Africain afin de créer un espace de rencontre, de promotion et de développement des opportunités d'affaires entre les acteurs africains et nord-américains.")}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <h3 className="mb-4 text-xl font-bold text-sicaf-darkCoffee">
                                {t('about.goals', 'Le SICAF est né de la volonté de :')}
                            </h3>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {goals.map((goal, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * index }}
                                        className="flex items-start gap-3 rounded-xl bg-amber-50 p-3"
                                    >
                                        <span className="mt-0.5 text-sm font-bold text-amber-600">
                                            ✓
                                        </span>
                                        <span className="text-sm text-gray-700">{goal}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;