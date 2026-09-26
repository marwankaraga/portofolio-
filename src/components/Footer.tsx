import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">{t('footer.title')}</h2>
      <p className="text-gray-400 mb-8">{t('footer.subtitle')}</p>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-lg">
        <a
          href={`mailto:${t('footer.email')}`}
          className="text-blue-400 hover:text-white transition flex items-center gap-2"
        >
          <span className="font-semibold">Email:</span> {t('footer.email')}
        </a>
        <a
          href={`https://wa.me/${t('footer.whatsapp').replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white transition flex items-center gap-2"
        >
          <span className="font-semibold">WhatsApp:</span> {t('footer.whatsapp')}
        </a>
        <a
          href={`https://${t('footer.linkedin')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white transition flex items-center gap-2"
        >
          <span className="font-semibold">LinkedIn:</span> {t('footer.linkedin')}
        </a>
      </div>

      <div className="text-gray-400">
        <span className="font-semibold">Location:</span> {t('footer.location')}
      </div>

      <p className="mt-8 text-sm text-gray-500">{t('footer.copyright')}</p>
    </footer>
  );
};

export default Footer;
