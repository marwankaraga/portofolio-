import { useTranslation } from 'react-i18next';

const skills = [
  { name: 'React.js', color: 'blue' },
  { name: 'Next.js', color: 'gray' },
  { name: 'TypeScript', color: 'blue' },
  { name: 'Tailwind CSS', color: 'teal' },
  { name: 'WebSockets (Pusher)', color: 'purple' },
  { name: 'Complex State Management', color: 'emerald' },
  { name: 'GitLab CI/CD', color: 'green' },
  { name: 'Figma (UI/UX)', color: 'pink' },
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
    <section id="skills" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {t('skills.title')}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`px-4 py-2 rounded-full font-medium border ${colorClasses[skill.color]}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
