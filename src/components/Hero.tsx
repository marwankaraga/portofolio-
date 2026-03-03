import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 py-20 text-center md:text-start flex flex-col md:flex-row items-center gap-10"
    >
      <div className="md:w-1/2">
        <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">
          {t("hero.subtitle")}
        </h2>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
          {t("hero.greeting")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
            {t("hero.name")}
          </span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {t("hero.description")}
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg font-medium hover:bg-blue-700 transition"
        >
          {t("hero.cta")}
        </a>
      </div>
      {/* <div className="md:w-1/2 flex justify-center">
        <div className="w-64 h-64 bg-gray-200 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-gray-400 overflow-hidden">
          {t('photo')}
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
