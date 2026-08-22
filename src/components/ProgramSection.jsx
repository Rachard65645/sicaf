import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    Calendar, Users, TrendingUp, Award, Coffee, Share2
} from 'lucide-react';

const ProgramSection = () => {
    const { t } = useTranslation();

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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

    const activities = [
        {
            icon: <Coffee className="h-6 w-6" />,
            title: t('program.activities.0.title', 'Exposition commerciale'),
            description: t('program.activities.0.description', 'Présentation des produits, équipements et services liés à l\'industrie du café.'),
            color: 'from-amber-600 to-amber-800',
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: t('program.activities.1.title', 'Rencontres B2B'),
            description: t('program.activities.1.description', 'Mise en relation entre entreprises africaines, canadiennes et internationales.'),
            color: 'from-amber-700 to-amber-900',
        },
        {
            icon: <TrendingUp className="h-6 w-6" />,
            title: t('program.activities.2.title', 'Conférences et panels'),
            description: t('program.activities.2.description', 'Interventions d\'experts, décideurs, investisseurs et acteurs de la filière.'),
            color: 'from-amber-800 to-amber-950',
        },
        {
            icon: <Award className="h-6 w-6" />,
            title: t('program.activities.3.title', 'Ateliers techniques'),
            description: t('program.activities.3.description', 'Sessions de formation sur les nouvelles tendances du marché, la transformation et l\'exportation.'),
            color: 'from-amber-600 to-amber-800',
        },
        {
            icon: <Coffee className="h-6 w-6" />,
            title: t('program.activities.4.title', 'Dégustations et démonstrations'),
            description: t('program.activities.4.description', 'Découverte des différentes variétés de cafés africains.'),
            color: 'from-amber-700 to-amber-900',
        },
        {
            icon: <Share2 className="h-6 w-6" />,
            title: t('program.activities.5.title', 'Soirée de réseautage'),
            description: t('program.activities.5.description', 'Renforcement des relations d\'affaires entre participants.'),
            color: 'from-amber-800 to-amber-950',
        },
    ];

    const participants = [
        t('program.participants.0', 'Producteurs de café'),
        t('program.participants.1', 'Coopératives agricoles'),
        t('program.participants.2', 'Exportateurs'),
        t('program.participants.3', 'Importateurs'),
        t('program.participants.4', 'Torréfacteurs'),
        t('program.participants.5', 'Distributeurs'),
        t('program.participants.6', 'Investisseurs'),
        t('program.participants.7', 'Institutions financières'),
        t('program.participants.8', 'Chambres de commerce'),
        t('program.participants.9', 'Représentants gouvernementaux'),
        t('program.participants.10', 'Organisations internationales'),
        t('program.participants.11', 'Médias spécialisés'),
    ];

    return (
        <section
            id="programme"
            className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sicaf-light to-white py-16"
        >
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('pro.jpg')",
                        backgroundAttachment: 'fixed',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-sicaf-darkCoffee/90 via-sicaf-darkCoffee/80 to-sicaf-coffee/90" />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-amber-600/10 blur-[120px]"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-20 text-center"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 backdrop-blur-sm">
                        <Calendar className="h-4 w-4 text-amber-300" />
                        <span className="text-sm font-medium tracking-wider text-amber-300">
                            {t('program.badge', 'ACTIVITÉS PRÉVUES')}
                        </span>
                    </div>
                    <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                        {t('program.title', 'Notre')} <span className="text-amber-300">{t('program.titleHighlight', 'Programme')}</span>
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '150px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mx-auto mt-4 h-1 bg-gradient-to-r from-amber-300 to-amber-500"
                    />
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-50/90">
                        {t('program.subtitle', 'Durant les trois jours du salon, plusieurs activités seront organisées')}
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md transition-all hover:shadow-2xl"
                        >
                            <div
                                className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${activity.color}`}
                            />
                            <div className="p-8">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow-lg">
                                    {activity.icon}
                                </div>
                                <h3 className="mb-3 text-2xl font-bold leading-tight text-sicaf-darkCoffee">
                                    {activity.title}
                                </h3>
                                <p className="text-gray-700">{activity.description}</p>
                            </div>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative mx-auto mt-20 max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-r from-amber-900/90 to-amber-800/90 p-10 text-center text-white backdrop-blur-sm"
                >
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="relative z-10">
                        <h4 className="text-2xl font-bold">{t('program.participantsTitle', 'Participants attendus')}</h4>
                        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                            {participants.map((participant, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl bg-white/10 p-3 text-sm font-medium backdrop-blur-sm"
                                >
                                    {participant}
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-sm text-amber-200">
                            {t('program.consumers', 'Consommateurs et amateurs de café')}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mx-auto mt-20 h-px max-w-2xl bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"
                />
            </div>
        </section>
    );
};

export default ProgramSection;