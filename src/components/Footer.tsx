import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">{t('footer.title')}</h2>
      <p className="text-gray-400 mb-6">{t('footer.subtitle')}</p>
      <a
        href={`mailto:${t('footer.email')}`}
        className="text-blue-400 hover:text-white underline text-lg"
      >
        {t('footer.email')}
      </a>
      <p className="mt-8 text-sm text-gray-500">{t('footer.copyright')}</p>
    </footer>
  );
};

export default Footer;
