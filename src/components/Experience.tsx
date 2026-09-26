import { useTranslation } from 'react-i18next';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const { t, i18n } = useTranslation();
  
  const isRtl = i18n.language === 'ar';

  const experiences = ['sewar', 'stars', 'bw'];

  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Experience Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <Briefcase className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">
              {t('experience.title')}
            </h2>
          </div>
          
          <div className={`relative border-${isRtl ? 'r' : 'l'}-2 border-blue-200 ${isRtl ? 'pr-8' : 'pl-8'} space-y-12 ml-4 mr-4`}>
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className={`absolute top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm ${isRtl ? '-right-[39px]' : '-left-[39px]'}`}></div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {t(`experience.items.${exp}.role`)}
                      </h3>
                      <div className="text-blue-600 font-medium">
                        {t(`experience.items.${exp}.company`)}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-gray-500 text-sm font-medium">
                      <span>{t(`experience.items.${exp}.period`)}</span>
                      <span>{t(`experience.items.${exp}.location`)}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {(t(`experience.items.${exp}.points`, { returnObjects: true }) as string[]).map((point, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-10 justify-center">
            <GraduationCap className="text-teal-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">
              {t('education.title')}
            </h2>
          </div>
          
          <div className={`relative border-${isRtl ? 'r' : 'l'}-2 border-teal-200 ${isRtl ? 'pr-8' : 'pl-8'} ml-4 mr-4`}>
            <div className="relative">
              <div className={`absolute top-0 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-sm ${isRtl ? '-right-[39px]' : '-left-[39px]'}`}></div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {t('education.degree')}
                    </h3>
                    <div className="text-teal-600 font-medium text-lg">
                      {t('education.university')}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-gray-500 text-sm font-medium">
                    <span>{t('education.period')}</span>
                    <span>{t('education.location')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
