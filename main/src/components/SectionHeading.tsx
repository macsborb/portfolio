import Reveal from './Reveal';

interface SectionHeadingProps {
  index: string;
  title: string;
  count?: number;
}

export default function SectionHeading({ index, title, count }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-cyan-400/80 tracking-widest">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-cyan-400/70 to-transparent" />
      </div>
      <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
        {title}
        {count !== undefined && (
          <sup className="ml-2 align-super text-base sm:text-lg font-mono font-normal text-cyan-400/80">{count}</sup>
        )}
      </h2>
    </Reveal>
  );
}
