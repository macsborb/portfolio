import SplitText from '../components/SplitText';
import FadeContent from '../components/FadeContentProps';
import CountUp from '../components/CountUp';
import LogoLoop from '../components/LoopLogo';
import { useLanguage } from '../context/LanguageContext';
import { getStats } from '../data';
import profilePic from '../img/moi.jpeg';
import ai from '../img/logo/ai.png';
import azure from '../img/logo/azure.png';
import cisco from '../img/logo/cisco.png';
import docker from '../img/logo/docker.png';
import github from '../img/logo/github.png';
import gitlab from '../img/logo/gitlab.png';
import js from '../img/logo/js.png';
import linux from '../img/logo/linux.png';
import python from '../img/logo/python.png';
import { FiArrowDown, FiArrowRight } from '../components/icons';

const imageLogos = [
  { src: ai, alt: 'AI' },
  { src: azure, alt: 'Azure' },
  { src: cisco, alt: 'Cisco' },
  { src: docker, alt: 'Docker' },
  { src: github, alt: 'GitHub' },
  { src: gitlab, alt: 'GitLab' },
  { src: js, alt: 'JavaScript' },
  { src: linux, alt: 'Linux' },
  { src: python, alt: 'Python' }
];

export default function HeroSection() {
  const { t, language } = useLanguage();
  const stats = getStats(t);

  const statItems = [
    { value: stats.projects, label: t.hero.statsProjects },
    { value: stats.skills, label: t.hero.statsSkills },
    { value: stats.certifications, label: t.hero.statsCerts }
  ];

  return (
    <section id="top" className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="hero-fade inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-cyan-300">
              <span className="pulse-dot" />
              {t.hero.role}
            </p>

            <SplitText
              key={language}
              tag="h1"
              text={t.hero.name}
              className="font-display mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]"
              delay={60}
              duration={1.4}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
              textAlign="inherit"
            />

            <p className="hero-fade hero-delay-1 mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-gray-300">
              {t.hero.tagline}
            </p>

            <div className="hero-fade hero-delay-2 mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              <a href="#projects" className="btn-primary group">
                {t.hero.ctaProjects}
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-ghost">
                {t.hero.ctaContact}
              </a>
            </div>

            <dl className="hero-fade hero-delay-3 mt-10 grid grid-cols-3 max-w-md mx-auto lg:mx-0 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              {statItems.map((s) => (
                <div key={s.label} className="px-3 py-4 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl sm:text-4xl font-semibold text-white">
                    <CountUp from={0} to={s.value} duration={1.6} />
                  </dd>
                  <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-widest text-gray-400">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 flex justify-center">
            <FadeContent blur={true} delay={100} duration={1600} easing="ease-out" initialOpacity={0}>
              <div className="portrait">
                <div className="portrait-ring" aria-hidden="true" />
                <img
                  src={profilePic}
                  alt={t.hero.photoAlt}
                  width={400}
                  height={400}
                  className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-[2rem] object-cover object-[50%_30%]"
                />
              </div>
            </FadeContent>
          </div>
        </div>
      </div>

      <div className="relative h-24 sm:h-28 overflow-hidden logo-fade">
        <LogoLoop
          logos={imageLogos}
          speed={80}
          direction="left"
          logoHeight={44}
          gap={72}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technologies"
        />
      </div>

      <a href="#about" className="scroll-cue hidden sm:flex" aria-label={t.nav.about}>
        <FiArrowDown />
      </a>
    </section>
  );
}
