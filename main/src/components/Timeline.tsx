import { useLanguage } from '../context/LanguageContext';

interface TimelineItem {
  title: string;
  school: string;
  period: string;
  location: string;
  description: string;
  grade: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600"></div>

      {items.map((item, index) => (
        <div key={index} className="relative pl-20 pb-12 last:pb-0">
          {/* Point sur la timeline */}
          <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-gray-900 shadow-lg shadow-cyan-400/50"></div>

          {/* Contenu */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-cyan-400 font-medium">{item.school}</p>
              </div>
              <div className="text-gray-400 text-sm mt-2 sm:mt-0 sm:text-right">
                <p className="font-medium">{item.period}</p>
                <p>{item.location}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-2 leading-relaxed">
              {item.description}
            </p>
            <span className="inline-block px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-400 rounded-full text-sm border border-purple-500 border-opacity-30">
              {item.grade}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}