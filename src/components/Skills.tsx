import { useTranslation } from 'react-i18next';

const skillCategories = [
  {
    id: 'languages',
    items: ['JavaScript (ES6)', 'Python', 'TypeScript'],
    color: 'blue'
  },
  {
    id: 'frameworks',
    items: ['React.js', 'Next.js'],
    color: 'teal'
  },
  {
    id: 'tools',
    items: ['Bootstrap 4', 'Bootstrap 5', 'Material UI', 'Rizz UI'],
    color: 'purple'
  },
  {
    id: 'os',
    items: ['Windows', 'Linux'],
    color: 'gray'
  },
  {
    id: 'other',
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Next.js 14'],
    color: 'pink'
  },
  {
    id: 'design',
    items: ['Figma UI/UX'],
    color: 'emerald'
  },
  {
    id: 'fetching',
    items: ['Redux Toolkit', 'React Query'],
    color: 'blue'
  },
  {
    id: 'state',
    items: ['Jotai', 'Atom', 'Redux', 'Zustand React'],
    color: 'green'
  },
  {
    id: 'ai',
    items: ['Generative AI Tools', 'Workflow Optimization'],
    color: 'purple'
  },
  {
    id: 'social_media',
    items: ['Meta Ads Manager', 'Social Media Strategy', 'Content Management', 'ROI Optimization'],
    color: 'teal'
  },
  {
    id: 'graphic_design',
    items: ['Adobe Photoshop', 'Canva', 'Video Editing', 'Brand Identity Design'],
    color: 'pink'
  },
  {
    id: 'office',
    items: ['Microsoft Office Suite', 'Microsoft Word', 'Microsoft Excel', 'General Computer Proficiency'],
    color: 'gray'
  }
];

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700 border-blue-100',
  gray: 'bg-gray-50 text-gray-700 border-gray-200',
  teal: 'bg-teal-50 text-teal-700 border-teal-100',
  purple: 'bg-purple-50 text-purple-700 border-purple-100',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  green: 'bg-green-50 text-green-700 border-green-100',
  pink: 'bg-pink-50 text-pink-700 border-pink-100',
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {t('skills.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                {t(`skills.categories.${category.id}`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-sm rounded-full font-medium border ${colorClasses[category.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
