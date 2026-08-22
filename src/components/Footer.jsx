import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    MapPin, Phone, Mail, MessageSquare,
    ChevronRight
} from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: t('footer.quickLinks.0', 'Accueil'), href: '#' },
        { name: t('footer.quickLinks.1', 'À propos'), href: '#apropos' },
        { name: t('footer.quickLinks.2', 'Programme'), href: '#programme' },
        { name: t('footer.quickLinks.3', 'Ateliers'), href: '#ateliers' },
        { name: t('footer.quickLinks.4', 'Tarifs'), href: '#tarif' },
    ];

    const legalLinks = [
        { name: t('footer.legalLinks.0', 'Mentions légales'), href: '#' },
        { name: t('footer.legalLinks.1', 'Politique de confidentialité'), href: '#' },
        { name: t('footer.legalLinks.2', 'Conditions générales'), href: '#' },
        { name: t('footer.legalLinks.3', 'FAQ'), href: '#' },
    ];

    const contacts = [
        { icon: <MapPin className="h-4 w-4" />, text: t('footer.contacts.0', 'Montréal, Québec, Canada') },
        { icon: <Phone className="h-4 w-4" />, text: t('footer.contacts.1', '+1 (450) 332-6241') },
        { icon: <Mail className="h-4 w-4" />, text: t('footer.contacts.2', 'sicaf@cc-ca.ca') },
        { icon: <MessageSquare className="h-4 w-4" />, text: t('footer.contacts.3', '+1 (450) 943-7245') },
    ];

    const socialLinks = [
        { icon: <FaFacebook className="h-4 w-4" />, href: '#', name: t('footer.social.facebook', 'Facebook') },
        { icon: <LiaLinkedin className="h-4 w-4" />, href: '#', name: t('footer.social.linkedin', 'LinkedIn') },
    ];

    const partners = [
        { name: 'CCCA', logo: '/cccas.png' },
        { name: 'SICAF', logo: '/sicaf.jpg' },
        { name: 'FOC', logo: '/logo.png' },
    ];

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-sicaf-light to-white">
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
                    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full bg-sicaf-coffee/5 blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
                    className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-sicaf-canada/5 blur-[120px]"
                />
                <svg
                    className="absolute bottom-0 left-0 right-0 w-full"
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H0Z"
                        fill="url(#footerGradient)"
                        fillOpacity="0.1"
                    />
                    <defs>
                        <linearGradient
                            id="footerGradient"
                            x1="720"
                            y1="30"
                            x2="720"
                            y2="120"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#5A2D0C" />
                            <stop offset="1" stopColor="#E11D2E" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4 pt-20 pb-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src="/sicaf.jpg"
                                alt="Logo SICAF"
                                className="h-14 w-auto object-contain"
                            />
                            <img
                                src="/cccas.png"
                                alt="Logo CCCA"
                                className="h-12 w-auto object-contain opacity-80"
                            />
                            <img
                                src="/logo.png"
                                alt="Logo FOC"
                                className="h-12 w-auto object-contain opacity-80"
                            />
                        </div>
                        <p className="mt-6 max-w-md leading-relaxed text-gray-600">
                            {t('footer.description', "Le Salon International du Café Africain (SICAF) est le rendez-vous incontournable des acteurs de la filière café africaine en Amérique du Nord.")}
                        </p>
                        <div className="mt-6 flex gap-3">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-sicaf-coffee/10 text-sicaf-coffee transition-all hover:bg-sicaf-coffee hover:text-white"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <h4 className="mb-6 border-b border-sicaf-coffee/20 pb-2 text-lg font-semibold text-sicaf-darkCoffee">
                            {t('footer.quickLinksTitle', 'Liens rapides')}
                        </h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-gray-600 transition-all hover:translate-x-2 hover:text-sicaf-coffee"
                                    >
                                        <ChevronRight className="h-3 w-3 text-sicaf-coffee/40 transition-all group-hover:translate-x-1 group-hover:text-sicaf-coffee" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <h4 className="mb-6 border-b border-sicaf-coffee/20 pb-2 text-lg font-semibold text-sicaf-darkCoffee">
                            {t('footer.legalTitle', 'Infos pratiques')}
                        </h4>
                        <ul className="space-y-4">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-gray-600 transition-all hover:translate-x-2 hover:text-sicaf-coffee"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-sicaf-coffee/40 transition-all group-hover:bg-sicaf-coffee" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-4"
                    >
                        <h4 className="mb-6 border-b border-sicaf-coffee/20 pb-2 text-lg font-semibold text-sicaf-darkCoffee">
                            {t('footer.contactTitle', 'Contact')}
                        </h4>
                        <ul className="space-y-4">
                            {contacts.map((contact, index) => (
                                <li
                                    key={index}
                                    className="group flex items-start gap-3 text-gray-600 transition-colors hover:text-sicaf-coffee"
                                >
                                    <span className="mt-1 text-sicaf-coffee transition-transform group-hover:scale-110">
                                        {contact.icon}
                                    </span>
                                    <span>{contact.text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <div className="flex flex-wrap items-center gap-4">
                                {partners.map((partner, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="flex h-14 w-24 items-center justify-center rounded-lg border border-gray-200 bg-white/50 shadow-sm backdrop-blur-sm transition-all hover:shadow-md"
                                    >
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-h-10 w-auto object-contain"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-sicaf-coffee/10 pt-8 text-sm text-gray-500 md:flex-row"
                >
                    <div className="flex items-center gap-2">
                        <span>© {currentYear}</span>
                        <span className="font-semibold text-sicaf-coffee">SICAF Canada</span>
                        <span>{t('footer.allRights', 'Tous droits réservés.')}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="transition-colors hover:text-sicaf-coffee hover:underline"
                        >
                            {t('footer.legalMentions', 'Mentions légales')}
                        </a>
                        <span className="text-sicaf-coffee/30">|</span>
                        <a
                            href="#"
                            className="transition-colors hover:text-sicaf-coffee hover:underline"
                        >
                            {t('footer.privacy', 'Confidentialité')}
                        </a>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-sicaf-coffee/5 px-4 py-2">
                        <span className="text-xs">{t('footer.poweredBy', 'Powered by')}</span>
                        <a
                            href="https://franchise-it-tech.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-sicaf-coffee transition-colors hover:text-sicaf-darkCoffee"
                        >
                            Franchise IT
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;