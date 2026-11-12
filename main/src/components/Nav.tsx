import { useEffect, useState } from 'react';
import { FiMenu, FiX } from './icons';
import { useLanguage } from '../context/LanguageContext';

const SECTION_IDS = ['about', 'projects', 'experience', 'education', 'skills', 'contact'] as const;

export default function Nav() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleLang = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'bg-[#07090d]/75 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-white" onClick={() => setOpen(false)}>
          RB<span className="text-cyan-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {SECTION_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-link px-3 py-2 text-sm transition-colors ${
                  active === id ? 'text-white is-active' : 'text-gray-400 hover:text-white'
                }`}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wider text-gray-200 hover:border-cyan-400/60 hover:text-white transition-colors"
            aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
          >
            <span className={language === 'fr' ? 'text-cyan-400' : ''}>FR</span>
            <span className="mx-1 text-gray-600">/</span>
            <span className={language === 'en' ? 'text-cyan-400' : ''}>EN</span>
          </button>
          <button
            className="md:hidden rounded-full border border-white/10 bg-white/5 p-2 text-gray-200"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={t.nav.menu}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="px-4 pb-4 space-y-1">
          {SECTION_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base ${active === id ? 'bg-white/5 text-white' : 'text-gray-300'}`}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
