import { useState } from 'react';
import {
  FiArrowUpRight,
  FiCheck,
  FiCpu,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiZap
} from '../components/icons';
import { useLanguage } from '../context/LanguageContext';
import Timeline from '../components/Timeline';
import Reveal from '../components/Reveal';
import SpotlightCard from '../components/SpotlightCard';
import SectionHeading from '../components/SectionHeading';
import TechChip from '../components/TechChip';
import ProjectGallery from '../components/ProjectGallery';
import { techIcon } from '../tech';
import {
  TOP_STACK,
  getCertifications,
  getEducationLogos,
  getFeaturedProjects,
  getOtherProjects,
  getSkills,
  getStats
} from '../data';

export default function About() {
  const { t } = useLanguage();
  const [activeGroup, setActiveGroup] = useState(0);

  const featured = getFeaturedProjects(t);
  const others = getOtherProjects(t);
  const skills = getSkills(t);
  const certifications = getCertifications(t);
  const stats = getStats(t);

  const experiences = [
    {
      ...t.experiences.netops,
      subtitle: t.experiences.netops.company,
      tags: ['HashiCorp Vault', 'GitLab CI/CD', 'Terraform', 'HCP / Terraform Cloud', 'JWT']
    },
    {
      ...t.experiences.beYS,
      subtitle: t.experiences.beYS.company,
      tags: ['Terraform', 'Ansible', 'Molecule', 'OpenStack', 'MFA']
    }
  ];

  const eduLogos = getEducationLogos();
  const education = (['master', 'but', 'highschool'] as const).map((key) => ({
    ...t.education[key],
    subtitle: t.education[key].school,
    logo: eduLogos[key]
  }));

  const values = [
    { icon: <FiShield />, title: t.about.security, desc: t.about.securityDesc },
    { icon: <FiZap />, title: t.about.automation, desc: t.about.automationDesc },
    { icon: <FiCpu />, title: t.about.innovation, desc: t.about.innovationDesc }
  ];

  const facts = [
    { label: t.about.factLocation, value: t.about.factLocationValue },
    { label: t.about.factEducation, value: t.about.factEducationValue },
    { label: t.about.factFocus, value: t.about.factFocusValue }
  ];

  const contacts = [
    { icon: <FiMail />, label: t.contact.email, value: 'blancrobbie@gmail.com', href: 'mailto:blancrobbie@gmail.com' },
    { icon: <FiPhone />, label: t.contact.phone, value: '+33 6 15 47 29 38', href: 'tel:+33615472938' },
    { icon: <FiLinkedin />, label: t.contact.social, value: 'LinkedIn', href: 'https://www.linkedin.com/in/robbie-blanc-a37093228' },
    { icon: <FiGithub />, label: t.contact.code, value: 'github.com/macsborb', href: 'https://github.com/macsborb' },
    { icon: <FiMapPin />, label: t.contact.location, value: t.about.factLocationValue }
  ];

  return (
    <div className="relative">
      {/* ── About ─────────────────────────────── */}
      <section id="about" className="section">
        <div className="container-page">
          <SectionHeading index="01" title={t.sections.about} />
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <p className="font-display text-2xl sm:text-3xl leading-snug text-white">
                {t.about.lead}
              </p>
              <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed text-gray-300">
                <p>{t.about.journey1}</p>
                <p>{t.about.journey2}</p>
                <p>{t.about.journey3}</p>
              </div>
            </Reveal>
            <div className="space-y-4">
              <Reveal delay={120}>
                <SpotlightCard className="p-6">
                  <dl className="divide-y divide-white/5">
                    {facts.map((f) => (
                      <div key={f.label} className="py-3 first:pt-0 last:pb-0">
                        <dt className="text-xs uppercase tracking-widest text-gray-500">{f.label}</dt>
                        <dd className="mt-1 text-white">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </SpotlightCard>
              </Reveal>
              {values.map((v, i) => (
                <Reveal key={v.title} delay={200 + i * 80}>
                  <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <span className="icon-badge">{v.icon}</span>
                    <div>
                      <p className="font-semibold text-white">{v.title}</p>
                      <p className="text-sm text-gray-400">{v.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────── */}
      <section id="projects" className="section">
        <div className="container-page">
          <SectionHeading index="02" title={t.sections.projects} count={stats.projects} />

          <Reveal>
            <h3 className="mb-6 text-sm uppercase tracking-[0.2em] text-gray-400">{t.sections.featured}</h3>
          </Reveal>
          <div className="space-y-8">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <SpotlightCard className="featured-card p-5 sm:p-8 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] items-start">
                    <div className={`min-w-0 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                      {p.gallery && <ProjectGallery images={p.gallery} title={p.title} />}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        {p.badge && (
                          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-400/30">
                            <span className="pulse-dot" />
                            {p.badge}
                          </span>
                        )}
                        {p.period && <span className="font-mono text-xs text-gray-500">{p.period}</span>}
                      </div>
                      <h4 className="font-display mt-4 text-2xl sm:text-3xl font-semibold text-white">{p.title}</h4>
                      <p className="mt-4 text-gray-300 leading-relaxed">{p.description}</p>
                      {p.highlights && (
                        <ul className="mt-6 space-y-2.5">
                          {p.highlights.map((h) => (
                            <li key={h} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                              <FiCheck className="mt-1 shrink-0 text-cyan-400" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.tech.map((tech) => (
                          <TechChip key={tech} name={tech} />
                        ))}
                      </div>
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-7 group">
                        {p.link.includes('github.com') ? <FiGithub /> : <FiGlobe />}
                        {p.linkLabel}
                        <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="mt-16 mb-6 text-sm uppercase tracking-[0.2em] text-gray-400">{t.sections.others}</h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90} className="h-full">
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
                  <SpotlightCard className="h-full flex flex-col">
                    <div className="project-cover">
                      <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-display text-lg font-semibold text-white">{p.title}</h4>
                        <FiArrowUpRight className="shrink-0 text-gray-500 transition-all group-hover:text-cyan-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-gray-400 flex-1">{p.description}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {p.tech.map((tech) => (
                          <TechChip key={tech} name={tech} size="sm" />
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ────────────────────────── */}
      <section id="experience" className="section">
        <div className="container-page max-w-4xl">
          <SectionHeading index="03" title={t.sections.experience} />
          <Timeline items={experiences} />
        </div>
      </section>

      {/* ── Education ─────────────────────────── */}
      <section id="education" className="section">
        <div className="container-page max-w-4xl">
          <SectionHeading index="04" title={t.sections.education} />
          <Timeline items={education} />
        </div>
      </section>

      {/* ── Skills & certifications ───────────── */}
      <section id="skills" className="section">
        <div className="container-page">
          <SectionHeading index="05" title={t.sections.skills} count={stats.skills} />
          <Reveal>
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400">{t.skills.topTitle}</h3>
            <p className="mt-2 mb-6 text-gray-300">{t.skills.topNote}</p>
          </Reveal>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
            {TOP_STACK.map((name, i) => (
              <Reveal key={name} delay={(i % 8) * 50}>
                <div className="top-tile group">
                  <span className="logo-plate h-10 w-10 sm:h-12 sm:w-12 rounded-xl p-2 transition-transform duration-300 group-hover:-translate-y-1">
                    <img src={techIcon(name)} alt="" loading="lazy" className="h-full w-full object-contain" />
                  </span>
                  <span className="mt-2 sm:mt-3 text-center text-[10px] leading-tight sm:text-sm font-medium text-gray-100">{name}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="mt-16 mb-5 text-sm uppercase tracking-[0.2em] text-gray-400">{t.skills.allTitle}</h3>
            <div className="flex flex-wrap gap-2 mb-6" role="tablist">
              {skills.map((g, i) => (
                <button
                  key={g.category}
                  role="tab"
                  aria-selected={activeGroup === i}
                  onClick={() => setActiveGroup(i)}
                  className={`skill-tab ${activeGroup === i ? 'is-active' : ''}`}
                >
                  {g.category}
                  <span className="ml-2 font-mono text-xs opacity-60">{g.items.length}</span>
                </button>
              ))}
            </div>
          </Reveal>
          <SpotlightCard className="p-6 sm:p-8 min-h-[170px]">
            <div key={activeGroup} className="flex flex-wrap gap-3">
              {skills[activeGroup].items.map((skill, i) => (
                <span key={skill} className="skill-pop" style={{ animationDelay: `${i * 35}ms` }}>
                  <TechChip name={skill} />
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs text-gray-500">{skills[activeGroup].pro ? t.skills.proNote : t.skills.mlNote}</p>
          </SpotlightCard>

          <div className="mt-20">
            <Reveal>
              <h3 className="font-display mb-8 text-2xl sm:text-3xl font-semibold text-white">
                {t.sections.certifications}
                <sup className="ml-2 text-base font-mono font-normal text-cyan-400/80">{stats.certifications}</sup>
              </h3>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {certifications.map((c, i) => (
                <Reveal key={c.name} delay={(i % 2) * 90}>
                  <SpotlightCard className="h-full p-6 flex gap-5 items-start">
                    <span className="logo-plate h-14 w-20 shrink-0">
                      <img src={c.logo} alt={c.name.split(' ')[0]} loading="lazy" className="max-h-full max-w-full object-contain" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <h4 className="font-semibold text-white">{c.name}</h4>
                        <span className="font-mono text-xs text-gray-500">{c.period}</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">{c.description}</p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────── */}
      <section id="contact" className="section pb-16">
        <div className="container-page">
          <SectionHeading index="06" title={t.sections.contact} />
          <Reveal>
            <SpotlightCard className="contact-card p-6 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center">
                <div>
                  <p className="font-display text-3xl sm:text-4xl font-semibold text-white">{t.sections.contactTitle}</p>
                  <p className="mt-4 text-gray-300 leading-relaxed max-w-md">{t.sections.contactText}</p>
                  <a href="mailto:blancrobbie@gmail.com" className="btn-primary mt-8 group">
                    <FiMail />
                    blancrobbie@gmail.com
                  </a>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {contacts.map((c) => {
                    const inner = (
                      <>
                        <span className="icon-badge">{c.icon}</span>
                        <span className="min-w-0">
                          <span className="block text-xs uppercase tracking-widest text-gray-500">{c.label}</span>
                          <span className="block truncate text-white">{c.value}</span>
                        </span>
                      </>
                    );
                    return (
                      <li key={c.label}>
                        {c.href ? (
                          <a
                            href={c.href}
                            target={c.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="contact-item"
                          >
                            {inner}
                          </a>
                        ) : (
                          <div className="contact-item">{inner}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
          <footer className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Robbie Blanc</p>
            <p>{t.footer.built}</p>
          </footer>
        </div>
      </section>
    </div>
  );
}
