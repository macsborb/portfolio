import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';
import TechChip from './TechChip';

export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  grade?: string;
  tags?: string[];
  logo?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative">
      <div className="timeline-line absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px" aria-hidden="true" />
      {items.map((item, index) => (
        <li key={item.title} className="relative pl-10 sm:pl-14 pb-8 last:pb-0">
          <span className="timeline-dot absolute left-[4px] sm:left-[8px] top-7" aria-hidden="true" />
          <Reveal delay={index * 90}>
            <SpotlightCard className="p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div className="flex items-start gap-4">
                  {item.logo && (
                    <span className="logo-plate h-14 w-20 sm:w-24 shrink-0">
                      <img src={item.logo} alt={item.subtitle} loading="lazy" className="max-h-full max-w-full object-contain" />
                    </span>
                  )}
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="text-cyan-400 font-medium mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-400 sm:text-right shrink-0">
                  <p className="font-mono text-gray-300">{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
              {(item.grade || item.tags) && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.grade && <span className="chip chip-violet">{item.grade}</span>}
                  {item.tags?.map((tag) => (
                    <TechChip key={tag} name={tag} size="sm" />
                  ))}
                </div>
              )}
            </SpotlightCard>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
