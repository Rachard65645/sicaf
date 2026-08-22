import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  BookOpen, Truck, Star, Coffee, Leaf,
  Award,
} from 'lucide-react';

const AteliersSection = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

  const workshops = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: t('ateliers.workshops.0.title', 'Atelier Stratégique - Comprendre le Marché Canadien'),
      objective: t('ateliers.workshops.0.objective', 'Décrypter les dynamiques du marché du café au Canada pour mieux s\'y positionner.'),
      content: [
        t('ateliers.workshops.0.content.0', 'Tendances de consommation et profils d\'acheteurs'),
        t('ateliers.workshops.0.content.1', 'Réglementations, certifications et exigences d\'importation'),
        t('ateliers.workshops.0.content.2', 'Différences culturelles et comportementales'),
      ],
      audience: t('ateliers.workshops.0.audience', 'Producteurs, exportateurs, coopératives, représentants institutionnels'),
      color: 'from-amber-600 to-amber-800',
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: t('ateliers.workshops.1.title', 'Atelier Export - Logistique, Douanes & Accès Marché'),
      objective: t('ateliers.workshops.1.objective', 'Maîtriser le processus d\'exportation vers le Canada.'),
      content: [
        t('ateliers.workshops.1.content.0', 'Procédures douanières et logistique export'),
        t('ateliers.workshops.1.content.1', 'Normes de conformité (traçabilité, résidus, emballage)'),
        t('ateliers.workshops.1.content.2', 'Mise en marché : comment construire une offre exportable'),
      ],
      audience: t('ateliers.workshops.1.audience', 'Opérateurs commerciaux, exportateurs, groupements professionnels'),
      color: 'from-amber-700 to-amber-900',
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: t('ateliers.workshops.2.title', 'Atelier Branding & Positionnement Produit'),
      objective: t('ateliers.workshops.2.objective', 'Valoriser son café pour se distinguer sur un marché concurrentiel.'),
      content: [
        t('ateliers.workshops.2.content.0', 'Construire une marque export (narration, visuel, identité)'),
        t('ateliers.workshops.2.content.1', 'Définir un positionnement premium cohérent'),
        t('ateliers.workshops.2.content.2', 'Emballage, storytelling, certifications : comment convaincre l\'acheteur'),
      ],
      audience: t('ateliers.workshops.2.audience', 'Producteurs, coopératives, PME agro-export, marques locales'),
      color: 'from-amber-800 to-amber-950',
    },
    {
      icon: <Coffee className="h-5 w-5" />,
      title: t('ateliers.workshops.3.title', 'Atelier Goût & Dégustation - L\'Art du Cupping'),
      objective: t('ateliers.workshops.3.objective', 'Maîtriser les critères sensoriels valorisés au Canada.'),
      content: [
        t('ateliers.workshops.3.content.0', 'Introduction au cupping et profils aromatiques appréciés'),
        t('ateliers.workshops.3.content.1', 'Dégustation guidée avec des experts'),
        t('ateliers.workshops.3.content.2', 'Adaptation de l\'offre aux attentes des torréfacteurs nord-américains'),
      ],
      audience: t('ateliers.workshops.3.audience', 'Producteurs, coopératives, baristas, transformateurs, acheteurs'),
      color: 'from-amber-600 to-amber-800',
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: t('ateliers.workshops.4.title', 'Atelier Technique - Culture, Transformation & Durabilité'),
      objective: t('ateliers.workshops.4.objective', 'Renforcer la qualité et la durabilité de la chaîne de valeur caféicole.'),
      content: [
        t('ateliers.workshops.4.content.0', 'Bonnes pratiques agricoles, post-récolte et fermentation'),
        t('ateliers.workshops.4.content.1', 'Durabilité et commerce équitable : comment répondre aux exigences du marché'),
        t('ateliers.workshops.4.content.2', 'Gestion de la qualité, coopératives, certification'),
      ],
      audience: t('ateliers.workshops.4.audience', 'Producteurs, techniciens agricoles, responsables filière'),
      color: 'from-amber-700 to-amber-900',
    },
  ];

  return (
    <section
      id="ateliers"
      className="relative overflow-hidden bg-gradient-to-b from-sicaf-light via-white to-sicaf-light/50 py-16"
    >
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
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full bg-amber-600/10 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-amber-800/10 blur-[120px]"
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
              {t('ateliers.badge', 'ATELIERS & FORMATION')}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-sicaf-darkCoffee md:text-5xl lg:text-6xl">
            {t('ateliers.title', 'Les Ateliers du')} <span className="text-amber-700">SICAF</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-4 h-1 bg-gradient-to-r from-amber-600 to-amber-800"
          />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {t('ateliers.subtitle', 'Des ateliers pratiques conçus pour outiller les acteurs du café africain et les préparer à l\'export vers le marché canadien')}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
        >
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-soft transition-all hover:shadow-xl"
            >
              <div
                className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${workshop.color}`}
              />
              <div className="p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${workshop.color} text-white shadow-lg`}
                  >
                    {workshop.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold leading-tight text-sicaf-darkCoffee">
                  {workshop.title}
                </h3>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-amber-700">
                    {t('ateliers.objectiveLabel', 'Objectif :')}
                  </span>
                  <p className="mt-1 text-sm text-gray-600">{workshop.objective}</p>
                </div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-amber-700">
                    {t('ateliers.contentLabel', 'Contenu :')}
                  </span>
                  <ul className="mt-2 space-y-2">
                    {workshop.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-sm font-semibold text-amber-700">
                    {t('ateliers.audienceLabel', 'Public cible :')}
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {workshop.audience.split(', ').map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AteliersSection;