import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  CreditCard, Users, Crown, Building2, MapPin,
  Clock, Check, Star, Phone, Mail, MessageSquare,
} from 'lucide-react';

const TarifsSection = () => {
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
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const packages = [
    {
      name: t('tarifs.packages.classic.name', 'Pack Entreprise individuelle'),
      subtitle: t('tarifs.packages.classic.subtitle', 'PASS CLASSIQUE'),
      price: t('tarifs.packages.classic.price', '850 CAD'),
      taxes: t('tarifs.packages.classic.taxes', '+ Taxes'),
      icon: <CreditCard className="h-5 w-5" />,
      color: 'from-amber-500 to-amber-600',
      paymentLink: 'https://ccca.mykajabi.com/offers/T3VG2gmf/checkout',
      stand: t('tarifs.packages.classic.stand', "Espace d'exposition de 50 pi² et une table"),
      advantages: [
        t('tarifs.packages.classic.advantages.0', 'Accès aux 3 jours de conférence'),
        t('tarifs.packages.classic.advantages.1', 'Attestation de participation'),
        t('tarifs.packages.classic.advantages.2', 'Pause-café incluse'),
        t('tarifs.packages.classic.advantages.3', "Accès au réseau de participants"),
        t('tarifs.packages.classic.advantages.4', "Accès à l'espace de dégustation et aux démonstrations"),
        t('tarifs.packages.classic.advantages.5', 'Networking avec les acteurs du secteur'),
      ],
      exclusif: [],
    },
    {
      name: t('tarifs.packages.vip.name', 'Pack Entreprise individuelle'),
      subtitle: t('tarifs.packages.vip.subtitle', 'PASS VIP'),
      price: t('tarifs.packages.vip.price', '1275 CAD'),
      taxes: t('tarifs.packages.vip.taxes', '+ Taxes'),
      icon: <Crown className="h-5 w-5" />,
      color: 'from-amber-600 to-amber-800',
      premium: true,
      paymentLink: 'https://ccca.mykajabi.com/offers/uKGGiFCT/checkout',
      stand: t('tarifs.packages.vip.stand', 'Chaise, éclairage, prise électrique et table'),
      advantages: [
        t('tarifs.packages.vip.advantages.0', 'Tous les avantages du pass classique'),
        t('tarifs.packages.vip.advantages.1', 'Participation à 2 ateliers privés (valeur 400 CAD)'),
        t('tarifs.packages.vip.advantages.2', 'Certificat VIP'),
        t('tarifs.packages.vip.advantages.3', 'Accès prioritaire aux démonstrations et au mentoring'),
        t('tarifs.packages.vip.advantages.4', 'Accès privilégié à la session B2B spéciale avec les investisseurs et acheteurs de café'),
        t('tarifs.packages.vip.advantages.5', 'Accès au Cocktail dinatoire'),
      ],
      exclusif: [
        t('tarifs.packages.vip.exclusif.0', '2 ateliers privés'),
        t('tarifs.packages.vip.exclusif.1', 'Session B2B privilégiée'),
        t('tarifs.packages.vip.exclusif.2', 'Cocktail dinatoire'),
      ],
    },
    {
      name: t('tarifs.packages.visitor.name', 'Pack Visiteur Canadien'),
      subtitle: t('tarifs.packages.visitor.subtitle', 'ACCÈS SALON'),
      price: t('tarifs.packages.visitor.price', '165 CAD'),
      taxes: t('tarifs.packages.visitor.taxes', '+ Taxes'),
      icon: <Users className="h-5 w-5" />,
      color: 'from-amber-400 to-amber-500',
      paymentLink: 'https://ccca.mykajabi.com/offers/uaWcBD8H',
      stand: t('tarifs.packages.visitor.stand', 'Accès 3 jours au salon'),
      advantages: [],
      exclusif: [],
    },
    {
      name: t('tarifs.packages.organization.name', 'Pack Organisation / ONG / Coopérative / Institutions privées'),
      subtitle: t('tarifs.packages.organization.subtitle', "Jusqu'à 10 Participants"),
      price: t('tarifs.packages.organization.price', '10625 CAD'),
      taxes: t('tarifs.packages.organization.taxes', '+ Taxes'),
      icon: <Building2 className="h-5 w-5" />,
      color: 'from-amber-700 to-amber-950',
      paymentLink: 'https://ccca.mykajabi.com/offers/PNB3gCji',
      stand: t('tarifs.packages.organization.stand', 'Stand de 150 pi² clé en main'),
      advantages: [
        t('tarifs.packages.organization.advantages.0', 'Tous les avantages du pass VIP'),
        t('tarifs.packages.organization.advantages.1', 'Kit VIP de communication et invitations aux dîners officiels'),
        t('tarifs.packages.organization.advantages.2', 'Participation prioritaire aux panels'),
        t('tarifs.packages.organization.advantages.3', 'Mention dans le programme officiel'),
        t('tarifs.packages.organization.advantages.4', 'Accès illimité'),
        t('tarifs.packages.organization.advantages.5', 'Accès complet à tous les ateliers (Gratuit)'),
        t('tarifs.packages.organization.advantages.6', 'Visibilité renforcée (site, visuels, brochures, affichage écran)'),
        t('tarifs.packages.organization.advantages.7', 'Présentation étendue de la délégation ou du pays en 25 min'),
        t('tarifs.packages.organization.advantages.8', 'Droit à la dégustation'),
        t('tarifs.packages.organization.advantages.9', 'Accès VIP pour les rencontres stratégiques'),
        t('tarifs.packages.organization.advantages.10', 'Accès au Cocktail dinatoire'),
      ],
      exclusif: [
        t('tarifs.packages.organization.exclusif.0', 'Présentation pays 25 min'),
        t('tarifs.packages.organization.exclusif.1', 'Visibilité renforcée'),
        t('tarifs.packages.organization.exclusif.2', 'Kit VIP'),
      ],
    },
    {
      name: t('tarifs.packages.pavilion.name', 'Pack Pavillons Pays'),
      subtitle: t('tarifs.packages.pavilion.subtitle', 'À partir de 20 Participants'),
      price: t('tarifs.packages.pavilion.price', '23375 CAD'),
      taxes: t('tarifs.packages.pavilion.taxes', '+ Taxes'),
      icon: <MapPin className="h-5 w-5" />,
      color: 'from-amber-700 to-amber-950',
      paymentLink: 'https://ccca.mykajabi.com/offers/8PJ887UB/checkout',
      stand: t('tarifs.packages.pavilion.stand', 'Stand de 300 pi² clé en main'),
      advantages: [
        t('tarifs.packages.pavilion.advantages.0', 'Tous les avantages du pass VIP'),
        t('tarifs.packages.pavilion.advantages.1', 'Kit VIP de communication et invitations aux dîners officiels'),
        t('tarifs.packages.pavilion.advantages.2', 'Participation prioritaire aux panels'),
        t('tarifs.packages.pavilion.advantages.3', 'Mention dans le programme officiel'),
        t('tarifs.packages.pavilion.advantages.4', 'Accès illimité'),
        t('tarifs.packages.pavilion.advantages.5', 'Accès complet à tous les ateliers (Gratuit)'),
        t('tarifs.packages.pavilion.advantages.6', 'Visibilité renforcée (site, visuels, brochures, affichage écran)'),
        t('tarifs.packages.pavilion.advantages.7', 'Présentation étendue de la délégation ou du pays en 25 min'),
        t('tarifs.packages.pavilion.advantages.8', 'Droit à la dégustation'),
        t('tarifs.packages.pavilion.advantages.9', 'Accès VIP pour les rencontres stratégiques'),
        t('tarifs.packages.pavilion.advantages.10', 'Accès au Cocktail dinatoire'),
      ],
      exclusif: [
        t('tarifs.packages.pavilion.exclusif.0', 'Présentation pays 25 min'),
        t('tarifs.packages.pavilion.exclusif.1', 'Visibilité renforcée'),
        t('tarifs.packages.pavilion.exclusif.2', 'Kit VIP'),
      ],
    },
  ];

  const adminFee = {
    name: t('tarifs.adminFee', 'Frais administratifs pour la représentation'),
    price: t('tarifs.adminFeePrice', '650 CAD'),
  };

  const discounts = [
    {
      title: t('tarifs.discounts.earlyBird.title', 'Early Bird'),
      description: t('tarifs.discounts.earlyBird.description', 'Réduction de 10% pour toute inscription confirmée avant le 09 Juillet 2026'),
      icon: <Clock className="h-5 w-5" />,
    },
    {
      title: t('tarifs.discounts.solidarity.title', "Pack 'Café solidaire'"),
      description: t('tarifs.discounts.solidarity.description', "15% pour les organisations / ONG / Coopératives / Institutions privées venant en délégation d'au moins 10 membres ou plus"),
      icon: <Star className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      category: t('tarifs.services.logistics.category', 'Logistique, transport et hébergement'),
      price: t('tarifs.services.logistics.price', '1500 CAD (Optionnel)'),
      description: t('tarifs.services.logistics.description', 'Hébergement hôtel 3 nuitées. Navette de l\'aéroport à l\'hôtel (arrivée et départ). Navette de l\'hôtel au lieu de l\'évènement'),
      options: [
        { name: t('tarifs.services.logistics.options.0.name', 'Sheraton Centre Montréal'), price: t('tarifs.services.logistics.options.0.price', 'à partir de 200 CAD/nuitée (TTC)') },
        { name: t('tarifs.services.logistics.options.1.name', 'Comfort Inn & Suites'), price: t('tarifs.services.logistics.options.1.price', 'à partir de 150 CAD/nuitée (TTC)') },
      ],
    },
    {
      category: t('tarifs.services.seminar.category', 'Séminaire de perfectionnement'),
      price: t('tarifs.services.seminar.price', '1500 CAD'),
      description: t('tarifs.services.seminar.description', 'Formations continues de La CCCA (avec attestation) :'),
      options: [
        t('tarifs.services.seminar.options.0', "Module 1: Tendances technologiques dans l'industrie du café"),
        t('tarifs.services.seminar.options.1', 'Module 2: Stratégies pour exporter du café vers le Canada'),
        t('tarifs.services.seminar.options.2', 'Module 3: Gestion d\'une entreprise dans la filière café'),
        t('tarifs.services.seminar.options.3', 'Module 4: Techniques de torréfaction artisanales'),
      ],
    },
    {
      category: t('tarifs.services.visa.category', 'Formalités Visa'),
      price: t('tarifs.services.visa.price', 'Payable après obtention de la lettre de dépôt de passeport'),
      description: t('tarifs.services.visa.description', 'Services inclus :'),
      options: [
        t('tarifs.services.visa.options.0', "Vérification d'éligibilité pour un Visa d'affaires"),
        t('tarifs.services.visa.options.1', 'Reservation Hôtel'),
        t('tarifs.services.visa.options.2', 'Reservation billet d\'avion'),
        t('tarifs.services.visa.options.3', 'Remplissage de formulaires'),
        t('tarifs.services.visa.options.4', 'Collecte, tri et ajustements des données et documents appropriés'),
        t('tarifs.services.visa.options.5', 'Entretien et suivi personnel (avec un(e) agent(e) de traitement)'),
        t('tarifs.services.visa.options.6', 'Soumission des demandes'),
        t('tarifs.services.visa.options.7', 'Prise de Rendez-vous pour la biométrie'),
        t('tarifs.services.visa.options.8', "Suivi de la décision d'IRCC"),
      ],
    },
  ];

  const expectedOutcomes = [
    t('tarifs.outcomes.0', "Accroître la visibilité internationale du café africain"),
    t('tarifs.outcomes.1', "Générer de nouvelles opportunités d'affaires"),
    t('tarifs.outcomes.2', "Favoriser les partenariats stratégiques"),
    t('tarifs.outcomes.3', "Renforcer les échanges économiques entre le Canada et l'Afrique"),
    t('tarifs.outcomes.4', "Soutenir la création d'emplois dans la filière café"),
    t('tarifs.outcomes.5', "Encourager l'investissement dans les chaînes de valeur agricoles africaines"),
  ];

  return (
    <section
      id="tarif"
      className="relative overflow-hidden bg-gradient-to-b from-sicaf-light to-white py-16 scroll-mt-24"
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
            <CreditCard className="h-4 w-4 text-amber-700" />
            <span className="text-sm font-medium tracking-wider text-amber-800">
              {t('tarifs.badge', 'TARIFICATION & INSCRIPTION')}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-sicaf-darkCoffee md:text-5xl lg:text-6xl">
            {t('tarifs.title', 'Grille')} <span className="text-amber-700">{t('tarifs.titleHighlight', 'Tarifaire')}</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-4 h-1 bg-gradient-to-r from-amber-600 to-amber-800"
          />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {t('tarifs.subtitle', 'SICAF 2026 • 18 au 20 novembre • Montréal')}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-all hover:shadow-xl ${pkg.premium ? 'lg:scale-105 xl:scale-105' : ''
                }`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${pkg.color}`}
              />
              {pkg.premium && (
                <div className="absolute right-4 top-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                  {t('tarifs.recommended', 'RECOMMANDÉ')}
                </div>
              )}
              <div className="flex h-full flex-col p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${pkg.color} text-white shadow-lg`}
                  >
                    {pkg.icon}
                  </div>
                  <span className="text-sm font-medium text-amber-600">
                    SICAF 2026
                  </span>
                </div>
                <h3 className="text-xl font-bold text-sicaf-darkCoffee">
                  {pkg.name}
                </h3>
                <p className="mb-2 text-sm text-amber-600">{pkg.subtitle}</p>
                {pkg.stand && (
                  <p className="mb-4 text-sm text-gray-600">{pkg.stand}</p>
                )}
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-sicaf-darkCoffee">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-gray-500">{pkg.taxes}</span>
                </div>
                <div className="mb-6 flex-1 space-y-3">
                  {pkg.advantages.map((adv, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                      <span className="text-sm text-gray-600">{adv}</span>
                    </div>
                  ))}
                </div>
                {pkg.exclusif && pkg.exclusif.length > 0 && (
                  <div className="mb-6 rounded-xl bg-amber-50 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
                      {t('tarifs.exclusivities', 'Exclusivités')}
                    </p>
                    {pkg.exclusif.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-amber-800">
                        <Star className="h-3.5 w-3.5 text-amber-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                <a
                  href={pkg.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full rounded-xl bg-gradient-to-r ${pkg.color} px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl`}
                  >
                    {t('tarifs.chooseOffer', 'Choisir cette offre')}
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Admin Fee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="grid gap-6 md:grid-cols-1">
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <h4 className="font-bold text-sicaf-darkCoffee">{adminFee.name}</h4>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-amber-700">
                  {adminFee.price}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Discounts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {discounts.map((discount, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white">
                  {discount.icon}
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">{discount.title}</h4>
                  <p className="mt-1 text-sm text-amber-800">
                    {discount.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <h3 className="mb-8 text-2xl font-bold text-sicaf-darkCoffee">
            {t('tarifs.servicesTitle', 'Services complémentaires')}
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-soft">
                <h4 className="mb-2 font-bold text-sicaf-darkCoffee">
                  {service.category}
                </h4>
                <p className="mb-3 text-lg font-bold text-amber-700">
                  {service.price}
                </p>
                <p className="mb-4 text-sm text-gray-600">{service.description}</p>
                {service.options && (
                  <div className="space-y-2">
                    {service.options.map((option, idx) => (
                      <div key={idx} className="text-sm">
                        {typeof option === 'object' ? (
                          <>
                            <span className="font-medium text-sicaf-darkCoffee">
                              {option.name} :
                            </span>
                            <span className="ml-1 text-gray-600">{option.price}</span>
                          </>
                        ) : (
                          <li className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
                            <span>{option}</span>
                          </li>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Expected Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto mt-20 max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-amber-900 to-amber-800 p-8 text-white shadow-2xl"
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
            <h3 className="mb-6 text-2xl font-bold">{t('tarifs.outcomesTitle', 'Retombées attendues')}</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {expectedOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-amber-300">✓</span>
                  <span className="text-amber-100">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Refund Policy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl bg-white p-8 shadow-soft"
        >
          <h3 className="mb-4 text-2xl font-bold text-sicaf-darkCoffee">
            {t('tarifs.refundTitle', 'Politique de remboursement')}
          </h3>
          <p className="mb-4 leading-relaxed text-gray-700">
            {t('tarifs.refundText1', "Conformément à la politique officielle du Salon International du Café Africain,")}{' '}
            <strong className="text-amber-700">{t('tarifs.refundText2', "aucun remboursement")}</strong>{' '}
            {t('tarifs.refundText3', "ne sera accordé après l'achat d'un billet.")}
          </p>
          <p className="leading-relaxed text-gray-700">
            {t('tarifs.refundText4', "Toutefois, les participants dans l'impossibilité d'assister à l'événement peuvent transférer leur inscription à une autre personne. Une preuve d'achat sera exigée pour toute demande de transfert.")}
          </p>
          <div className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-gray-600">
            <p>
              <strong>{t('tarifs.assistance', 'Pour toute assistance :')}</strong>
            </p>
            <p>{t('tarifs.phone', 'Téléphone : +1 450 516-8274')}</p>
            <p>{t('tarifs.email', 'Courriel : info@ca-cc.ca')}</p>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <h3 className="mb-6 text-2xl font-bold text-sicaf-darkCoffee">
            {t('tarifs.contactTitle', 'Contactez-nous')}
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="mailto:sicaf@cc-ca.ca"
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-soft transition hover:shadow-lg"
            >
              <div className="rounded-full bg-amber-100 p-4 text-amber-600">
                <Mail className="h-6 w-6" />
              </div>
              <span className="font-medium text-sicaf-darkCoffee">Email</span>
              <span className="text-sm text-gray-600">sicaf@cc-ca.ca</span>
            </a>
            <a
              href="tel:+14503326241"
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-soft transition hover:shadow-lg"
            >
              <div className="rounded-full bg-amber-100 p-4 text-amber-600">
                <Phone className="h-6 w-6" />
              </div>
              <span className="font-medium text-sicaf-darkCoffee">Téléphone</span>
              <span className="text-sm text-gray-600">+1 (450) 332-6241</span>
            </a>
            <a
              href="https://wa.me/14509437245"
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-soft transition hover:shadow-lg"
            >
              <div className="rounded-full bg-amber-100 p-4 text-amber-600">
                <MessageSquare className="h-6 w-6" />
              </div>
              <span className="font-medium text-sicaf-darkCoffee">WhatsApp</span>
              <span className="text-sm text-gray-600">+1 (450) 943-7245</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TarifsSection;