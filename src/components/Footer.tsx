import React from 'react';
import { ContactInfoItemBase, QuickLinkItem } from '../types';
import { LocationIcon } from './icons/LocationIcon';
import { EmailIcon } from './icons/EmailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { FaxIcon } from './icons/FaxIcon';
import { useLanguage } from '../contexts/LanguageContext';

const footerContactInfoBase: ContactInfoItemBase[] = [
  { icon: <LocationIcon className="w-5 h-5 text-brand-gold" />, labelKey: 'contact.addressLabel', valueKey: 'contact.addressValue' },
  { icon: <EmailIcon className="w-5 h-5 text-brand-gold" />, labelKey: 'contact.emailLabel', valueKey: 'contact.emailValue', hrefKey: 'contact.emailHref' },
  { icon: <PhoneIcon className="w-5 h-5 text-brand-gold" />, labelKey: 'contact.phoneLabel', valueKey: 'contact.phoneValue', hrefKey: 'contact.phoneHref' },
  { icon: <FaxIcon className="w-5 h-5 text-brand-gold" />, labelKey: 'contact.faxLabel', valueKey: 'contact.faxValue', hrefKey: 'contact.faxHref' },
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Column 1: Logo and About */}
            <div>
                <a href="#" className="flex items-center space-x-3 mb-4">
                <img 
                    src="/images/icons/icono_reydonjaime.png" 
                    alt={t('navbar.logoAlt')} 
                    className="h-12 w-12 brightness-0 invert" 
                />
                <div>
                    <span className="font-playfair text-xl font-bold text-white">{t('navbar.logoTop')}</span>
                    <p className="text-xs text-gray-400 -mt-1">{t('navbar.logoBottom')}</p>
                </div>
                </a>
                <p className="font-montserrat text-sm leading-relaxed">
                {t('footer.aboutText')}
                </p>
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
                        <p className="font-montserrat text-sm pointer-events-none">{item.value}</p>
                        ) : (
                        <p className="font-montserrat text-sm">{item.value}</p>
                        )}
                    </div>
                    </li>
                ))}
                </ul>
            </div>
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