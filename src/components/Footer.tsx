import React from 'react';
import { ContactInfoItemBase, QuickLinkItem } from '../types'; // Adjusted types
import { LocationIcon } from './icons/LocationIcon';
import { EmailIcon } from './icons/EmailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10S17.5 2.04 12 2.04zm1 14.43h-2V12h2v-1.13c0-1.95.93-3.07 3.07-3.07h1.43v2.14h-.86c-.95 0-1.14.45-1.14 1.13V12h2.14l-.29 2.43h-1.85v4.04z" /></svg>;
const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.72 0 3.05.01 4.12.06 1.06.05 1.79.22 2.42.47.65.25 1.13.59 1.62 1.08.49.49.83.97 1.08 1.62.25.63.42 1.36.47 2.42.05 1.07.06 1.4.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.42a4.81 4.81 0 01-1.08 1.62c-.49.49-.97.83-1.62 1.08-1.06.35-1.74.42-3.28.47-1.09.04-1.44.05-4.16.05-2.72 0-3.07-.01-4.14-.06-1.08-.05-1.81-.22-2.44-.47a4.849 4.849 0 01-1.62-1.08c-.49-.49-.83-.97-1.08-1.62-.25-.63-.42-1.36-.47-2.42C2.01 15.07 2 14.74 2 12s.01-3.05.06-4.12c.05-1.06.22 1.79.47-2.42C2.78 4.81 3.12 4.33 3.61 3.84c.49-.49.97-.83 1.62-1.08.63-.25 1.36-.42 2.42-.47C8.73 2.06 9.02 2.04 11.72 2c.08 0 .15 0 .24 0L12 2zm0 1.8c-2.64 0-2.95 0-4 .05-1.02.05-1.58.21-1.92.34-.42.15-.72.34-.98.6-.26.26-.45.56-.6.98-.13.34-.29.9-.34 1.92-.05 1.05-.05 1.36-.05 4s0 2.95.05 4c.05 1.02.21 1.58.34 1.92.15.42.34.72.6.98.26.26.56.45.98.6.34.13.9.29 1.92.34 1.05.05 1.36.05 4 .05s2.95 0 4-.05c1.02-.05 1.58-.21 1.92-.34.42-.15.72-.34.98-.6.26-.26.45.56.6-.98.13.34.29-.9.34-1.92.05-1.05.05-1.36.05-4s0-2.95-.05-4c-.05-1.02-.21-1.58-.34-1.92a2.77 2.77 0 00-.6-.98c-.26-.26-.56-.45-.98-.6-.34-.13-.9-.29-1.92-.34C14.95 3.85 14.64 3.8 12 3.8zm0 3.62c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7.22c-1.5 0-2.72-1.22-2.72-2.72s1.22-2.72 2.72-2.72 2.72 1.22 2.72 2.72-1.22 2.72-2.72 2.72zm4.74-7.45a1.07 1.07 0 100-2.14 1.07 1.07 0 000 2.14z"/></svg>;
const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.77.86-2.76 1.06C18.4 4.6 17.29 4 16.07 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.94.07c.54 1.7 2.11 2.93 3.97 2.96N7.48 18.29c-2.32 1.45-5.15 2.3-8.13 2.35h-.42C2.28 22.06 5.02 23 7.94 23c7.82 0 12.1-6.56 12.1-12.1 0-.18 0-.37-.01-.55.83-.6 1.55-1.35 2.12-2.22z"/></svg>;
const YoutubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8zm4.85-4.19c-.22-.83-1.04-1.46-1.97-1.57-.83-.09-3.7-.17-3.7-.17s-2.87.08-3.7.17c-.93.11-1.75.74-1.97 1.57-.14.53-.22 1.24-.22 1.95s.08 1.42.22 1.95c.22.83 1.04 1.46 1.97 1.57.83.09 3.7.17 3.7.17s2.87-.08 3.7-.17c.93.11 1.75-.74 1.97-1.57.14-.53.22-1.24.22-1.95s-.08-1.42-.22-1.95zM10 12.5l3.5 2v-4l-3.5 2z"/></svg>;

const footerContactInfoBase: ContactInfoItemBase[] = [
  { icon: <LocationIcon className="w-5 h-5 text-brand-gold" />, labelKey: 'contact.addressLabel', valueKey: 'contact.addressValue' },
  { icon: <EmailIcon className="w-5 h-5 text-brand-gold" />, labelKey: 'contact.emailLabel', valueKey: 'contact.emailValue', hrefKey: 'contact.emailHref' },
  { icon: <PhoneIcon className="w-5 h-5 text-brand-gold" />, labelKey: 'contact.phoneLabel', valueKey: 'contact.phoneValue', hrefKey: 'contact.phoneHref' },
];

const quickLinksBase: QuickLinkItem[] = [
  { nameKey: 'footer.links.ourOils', href: '#products' },
  { nameKey: 'footer.links.productionProcess', href: '#process' },
  { nameKey: 'footer.links.awardsCertifications', href: '#awards' },
  { nameKey: 'footer.links.aboutUs', href: '#history' },
  { nameKey: 'footer.links.contact', href: '#contact' },
];

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerContactInfo = footerContactInfoBase.map(item => ({
      ...item,
      label: t(item.labelKey),
      value: t(item.valueKey),
      href: item.hrefKey ? t(item.hrefKey) : undefined
  }));

  const quickLinks = quickLinksBase.map(link => ({
      ...link,
      name: t(link.nameKey)
  }));

  return (
    <footer className="bg-brand-footer-bg text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"> {/* Changed lg:grid-cols-4 to lg:grid-cols-3 */}
            {/* Column 1: Logo and About */}
            <div>
                <a href="#" className="flex items-center space-x-3 mb-4">
                <img 
                    src="https://www.aceitesreydonjaime.com/rs/icono_reydonjaime.png" 
                    alt={t('navbar.logoAlt')} 
                    className="h-12 w-12" 
                />
                <div>
                    <span className="font-playfair text-xl font-bold text-white">{t('navbar.logoTop')}</span>
                    <p className="text-xs text-gray-400 -mt-1">{t('navbar.logoBottom')}</p>
                </div>
                </a>
                <p className="font-montserrat text-sm leading-relaxed mb-4">
                {t('footer.aboutText')}
                </p>
                <div className="flex space-x-4">
                <motion.a href="#" aria-label={t('footer.social.facebookAriaLabel')} className="text-gray-400 hover:text-brand-gold" whileHover={{scale: 1.2, y: -2}}><FacebookIcon className="w-6 h-6" /></motion.a>
                <motion.a href="#" aria-label={t('footer.social.instagramAriaLabel')} className="text-gray-400 hover:text-brand-gold" whileHover={{scale: 1.2, y: -2}}><InstagramIcon className="w-6 h-6" /></motion.a>
                <motion.a href="#" aria-label={t('footer.social.twitterAriaLabel')} className="text-gray-400 hover:text-brand-gold" whileHover={{scale: 1.2, y: -2}}><TwitterIcon className="w-6 h-6" /></motion.a>
                <motion.a href="#" aria-label={t('footer.social.youtubeAriaLabel')} className="text-gray-400 hover:text-brand-gold" whileHover={{scale: 1.2, y: -2}}><YoutubeIcon className="w-6 h-6" /></motion.a>
                </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <h5 className="font-playfair text-lg font-semibold text-white mb-4">{t('footer.quickLinksTitle')}</h5>
                <ul className="space-y-2">
                {quickLinks.map(link => (
                    <li key={link.nameKey}>
                    <a href={link.href} className="font-montserrat text-sm hover:text-brand-gold transition-colors">{link.name}</a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div>
                <h5 className="font-playfair text-lg font-semibold text-white mb-4">{t('footer.contactUsTitle')}</h5>
                <ul className="space-y-3">
                {footerContactInfo.map((item) => (
                    <li key={item.labelKey} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-brand-gold">{item.icon}</div>
                    <div className="ml-3">
                        {item.href ? (
                        <a href={item.href} className="font-montserrat text-sm hover:text-brand-gold transition-colors">{item.value}</a>
                        ) : (
                        <p className="font-montserrat text-sm">{item.value}</p>
                        )}
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            
            {/* Column 4: Newsletter - REMOVED */}

            </div>
            <div className="border-t border-gray-700 pt-8 text-center">
            <p className="font-montserrat text-sm">
                &copy; {new Date().getFullYear()} {t('footer.copyrightText')}
            </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;