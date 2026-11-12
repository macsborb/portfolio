import { techIcon } from '../tech';

interface TechChipProps {
  name: string;
  size?: 'sm' | 'md';
}

/** Technology name with its official logo on a small light tile (or initials when no logo exists). */
export default function TechChip({ name, size = 'md' }: TechChipProps) {
  const icon = techIcon(name);
  const small = size === 'sm';
  return (
    <span className={`tech-chip ${small ? 'tech-chip-sm' : ''}`}>
      <span className={`tech-logo ${small ? 'h-4 w-4' : 'h-5 w-5'}`} aria-hidden="true">
        {icon ? (
          <img src={icon} alt="" loading="lazy" className="h-full w-full object-contain" />
        ) : (
          <span className="text-[9px] font-bold text-slate-700">{name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()}</span>
        )}
      </span>
      {name}
    </span>
  );
}
