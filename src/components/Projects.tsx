import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImageSlider from './ImageSlider';
import ImageLightbox from './ImageLightbox';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  badgeColor: string;
  technologies: string[];
  link: string;
  images: string[];
  reverse?: boolean;
}

const projects: Project[] = [
  {
    id: 'ataya',
    badgeColor: 'bg-green-100 text-green-800',
    technologies: ['Next.js', 'Tailwind', 'WebSockets'],
    link: 'https://ataya.sa/',
    images: [
            new URL('../assets/images/ataya/1.png', import.meta.url).href,

    ],
  },
  {
    id: 'diaarna',
    badgeColor: 'bg-blue-100 text-blue-800',
    technologies: ['React', 'Tailwind CSS', 'Figma'],
    link: 'https://diaarna.com/',
    images: [
      new URL('../assets/images/diarna/2.png', import.meta.url).href,
    ],
    reverse: true,
  },
  {
    id: 'smartkids',
    badgeColor: 'bg-purple-100 text-purple-800',
    technologies: ['Next.js', 'Tailwind', 'Data Visualization'],
    link: 'https://smartkidsmontessori.com/',
    images: [
      new URL('../assets/images/smartkids/1.png', import.meta.url).href,
      new URL('../assets/images/smartkids/2.png', import.meta.url).href,
      new URL('../assets/images/smartkids/3.png', import.meta.url).href,
    ],
  },
  {
    id: 'mendar',
    badgeColor: 'bg-orange-100 text-orange-800',
    technologies: ['React.js', 'Tailwind CSS', 'Financial APIs'],
    link: 'https://mendar.sa/',
    images: [
      new URL('../assets/images/mendar/1.png', import.meta.url).href,
      

    ],
    reverse: true,
  },
  {
    id: 'unoshop',
    badgeColor: 'bg-red-100 text-red-800',
    technologies: ['Next.js', 'Tailwind CSS', 'Component Builder'],
    link: 'https://unoshop.unocodetech.net/',
    images: [
      new URL('../assets/images/ecommerce/1.png', import.meta.url).href,
      new URL('../assets/images/ecommerce/2.png', import.meta.url).href,
      new URL('../assets/images/ecommerce/3.png', import.meta.url).href,
            new URL('../assets/images/ecommerce/4.png', import.meta.url).href,
      new URL('../assets/images/ecommerce/5.png', import.meta.url).href,

    ],
  },
  {
    id: 'payrollai',
    badgeColor: 'bg-indigo-100 text-indigo-800',
    technologies: ['React', 'Tailwind', 'Azure', 'Data Visualization'],
    link: 'https://app.payrollai.co.uk/',
    images: [
                  new URL('../assets/images/payroll/2.png', import.meta.url).href,
      new URL('../assets/images/payroll/3.png', import.meta.url).href,
      new URL('../assets/images/payroll/4.png', import.meta.url).href,
      new URL('../assets/images/payroll/5.png', import.meta.url).href,



    ],
    reverse: true,
  },
  {
    id: 'universalregister',
    badgeColor: 'bg-cyan-100 text-cyan-800',
    technologies: ['React.js', 'Tailwind CSS', 'QR Generation', 'E-Signatures'],
    link: 'https://universalregister.org/',
    images: [      new URL('../assets/images/universal/2.png', import.meta.url).href,

      new URL('../assets/images/universal/1.png', import.meta.url).href,
      new URL('../assets/images/universal/3.png', import.meta.url).href,
    ],
  },
  {
    id: 'businessworld',
    badgeColor: 'bg-yellow-100 text-yellow-800',
    technologies: ['React', 'Tailwind CSS', 'SEO Optimization'],
    link: 'https://bw-businessworld.com/',
    images: [
      new URL('../assets/images/bw/1.png', import.meta.url).href,

    ],
    reverse: true,
  },
  {
    id: 'unocode',
    badgeColor: 'bg-pink-100 text-pink-800',
    technologies: ['Next.js', 'Tailwind CSS', 'UI/UX Implementation'],
    link: 'https://unocodetech.com/',
    images: [
            new URL('../assets/images/unocode/1.png', import.meta.url).href,

    ],
  },
  {
    id: 'unomenu',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    technologies: ['React.js', 'Tailwind CSS', 'i18n (Multi-lang)', 'Real-time POS'],
    link: 'https://unomenu.unocodetech.net/en',
    images: [
         new URL('../assets/images/menu/1.png', import.meta.url).href,
               new URL('../assets/images/menu/2.png', import.meta.url).href,
      new URL('../assets/images/menu/3.png', import.meta.url).href,
      new URL('../assets/images/menu/4.png', import.meta.url).href,


    ],
    reverse: true,
  },
  {
    id: 'fastexpress',
    badgeColor: 'bg-sky-100 text-sky-800',
    technologies: ['React.js', 'Tailwind CSS', 'i18n (Multi-lang)', 'SEO Optimization'],
    link: 'https://fastexpress-uae.com/',
    images: [
      new URL('../assets/images/fast/1.png', import.meta.url).href,
      new URL('../assets/images/fast/2.png', import.meta.url).href,
    ],
  },
  {
    id: 'phoenitravel',
    badgeColor: 'bg-indigo-100 text-indigo-800',
    technologies: ['React.js', 'Tailwind CSS', 'Pusher (WebSockets)', 'Complex Forms'],
    link: 'https://phoenitravel.phoenitech.sy/',
    images: [
      new URL('../assets/images/travel/1.png', import.meta.url).href,
      new URL('../assets/images/travel/2.png', import.meta.url).href,
      new URL('../assets/images/travel/3.png', import.meta.url).href,
      new URL('../assets/images/travel/4.png', import.meta.url).href,
      new URL('../assets/images/travel/5.png', import.meta.url).href,
      new URL('../assets/images/travel/6.png', import.meta.url).href,
      new URL('../assets/images/travel/7.png', import.meta.url).href,
            new URL('../assets/images/travel/8.png', import.meta.url).href,




    ],
    reverse: true,
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; alt: string } | null>(null);

  const openLightbox = (images: string[], index: number, alt: string) => {
    setLightbox({ images, index, alt });
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        {t('projects.title')}
      </h2>

      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col ${
              project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            } transition-transform hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className="md:w-1/2 min-h-[300px] relative">
              <ImageSlider
                images={project.images}
                alt={t(`projects.items.${project.id}.name`)}
                onImageClick={(index) => openLightbox(project.images, index, t(`projects.items.${project.id}.name`))}
              />
            </div>

            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t(`projects.items.${project.id}.name`)}
                </h3>
                <span
                  className={`${project.badgeColor} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
                >
                  {t(`projects.items.${project.id}.badge`)}
                </span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {t(`projects.items.${project.id}.description`)}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition text-center font-medium self-start"
              >
                {t('projects.visitSite')}
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
};

export default Projects;
