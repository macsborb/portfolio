import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';
import LightRays from '../components/background';
import Timeline from '../components/Timeline';
import CountUp from '../components/CountUp';
import linkedin from '../img/logo/linkedin.png';
import github from '../img/logo/github.png';

export default function About() {
  const { t } = useLanguage();
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const skills = [
    { 
      category: t.skills.languages, 
      items: ['Python', 'Bash', 'PowerShell', 'PHP', 'JavaScript', 'HTML/CSS'] 
    },
    { 
      category: t.skills.devops, 
      items: ['Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Azure', 'GCP'] 
    },
    { 
      category: t.skills.networking, 
      items: ['VLANs', 'Subnetting', 'Dynamic Routing', 'CCNA', 'Network Config'] 
    },
    { 
      category: t.skills.webApi, 
      items: ['Flask', 'Node.js', 'REST APIs', 'AJAX', 'LDAP'] 
    },
    { 
      category: t.skills.ml, 
      items: ['PyTorch', 'Scikit-learn', 'CNNs', 'Image Augmentation'] 
    },
    { 
      category: t.skills.tools, 
      items: ['Git', 'VS Code', 'GitLab', 'SharePoint', 'Teams'] 
    },
    { 
      category: t.skills.security, 
      items: ['Nmap', 'Metasploit', 'BurpSuite', 'Gobuster', 'Shodan'] 
    }
  ];

  const experiences = [
    {
      title: t.experiences.netops.title,
      company: t.experiences.netops.company,
      period: t.experiences.netops.period,
      location: t.experiences.netops.location,
      description: t.experiences.netops.description,
      tags: ['Vault', 'GitLab', 'Terraform', 'CI/CD', 'HCP Cloud']
    },
    {
      title: t.experiences.beYS.title,
      company: t.experiences.beYS.company,
      period: t.experiences.beYS.period,
      location: t.experiences.beYS.location,
      description: t.experiences.beYS.description,
      tags: ['Terraform', 'Ansible', 'OpenStack', 'DevSecOps', 'GitLab']
    }
  ];
  const education = [
  {
    title: t.education.master.title,
    school: t.education.master.school,
    period: t.education.master.period,
    location: t.education.master.location,
    description: t.education.master.description,
    grade: t.education.master.grade
  },
  {
    title: t.education.but.title,
    school: t.education.but.school,
    period: t.education.but.period,
    location: t.education.but.location,
    description: t.education.but.description,
    grade: t.education.but.grade
  },
  {
    title: t.education.highschool.title,
    school: t.education.highschool.school,
    period: t.education.highschool.period,
    location: t.education.highschool.location,
    description: t.education.highschool.description,
    grade: t.education.highschool.grade
  }
];

  const projects = [
    {
      title: t.projects.saas.title,
      description: t.projects.saas.description,
      tech: ['Mistral API', 'Supabase', 'React', 'Outlook API'],
      link: 'https://github.com/macsborb/StartUp'
    },
    {
      title: t.projects.trading.title,
      description: t.projects.trading.description,
      tech: ['Python', 'Solana', 'WebSocket', 'Jupiter API'],
      link: 'https://github.com/macsborb/Pybot'
    },
    {
      title: t.projects.iot.title,
      description: t.projects.iot.description,
      tech: ['Arduino', 'Node.js', 'MySQL', 'Solana', 'WebSocket'],
      link: 'https://github.com/macsborb/Projet_final-IA'
    },
    {
      title: t.projects.chrome.title,
      description: t.projects.chrome.description,
      tech: ['JavaScript', 'Chrome API', 'React'],
      link: 'https://github.com/macsborb/StartUp'
    },
    {
      title: t.projects.tsne.title,
      description: t.projects.tsne.description,
      tech: ['Python', 'Jupyter', 'Machine Learning', 'T-SNE'],
      link: 'https://github.com/macsborb/T-SNE-AI'
    }
  ];

  return (
    <div className="relative min-h-screen text-white">

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-24 transition-all duration-500">
        <div className="max-w-6xl mx-auto">
           <LanguageToggle />
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {t.about.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.about.subtitle}
            </p>
          </div>
          {/* Contact Info */}
          <div className="mb-16 sm:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="tel:+33615472938" className="flex items-center gap-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <div className="text-3xl">📱</div>
                <div>
                  <p className="text-sm text-gray-400">{t.contact.phone}</p>
                  <p className="text-white font-medium">+33 6 15 47 29 38</p>
                </div>
              </a>
              <a href="mailto:blancrobbie@gmail.com" target="_blank" className="flex items-center gap-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <div className="text-3xl">📧</div>
                <div>
                  <p className="text-sm text-gray-400">{t.contact.email}</p>
                  <p className="text-white font-medium">blancrobbie@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="text-sm text-gray-400">{t.contact.location}</p>
                  <p className="text-white font-medium">Montréal, QC</p>
                </div>
              </div>
              <a href="https://www.linkedin.com/in/robbie-blanc-a37093228" target="_blank" className="flex items-center gap-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <img className="sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-2xl mb-4 sm:mb-6 object-cover" src={linkedin}/>
                <div>
                  <p className="text-sm text-gray-400">Social</p>
                  <p className="text-white font-medium">Linkedin</p>
                </div>
              </a>
              <a href="https://github.com/macsborb" target="_blank" className="flex items-center gap-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <img className="sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-2xl mb-4 sm:mb-6 object-cover" src={github}/>
                <div>
                  <p className="text-sm text-gray-400">Code</p>
                  <p className="text-white font-medium">My Github</p>
                </div>
              </a>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mb-16 sm:mb-20 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-cyan-400">
              {t.about.journeyTitle}
            </h2>
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>{t.about.journey1}</p>
              <p>{t.about.journey2}</p>
              <p>{t.about.journey3}</p>
            </div>
          </div>
          {/* Formation - Timeline */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center text-cyan-400">
              {t.education.title}
            </h2>
            <Timeline items={education} />
          </div>
          {/* Expériences */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center text-cyan-400">
              {t.about.experienceTitle}
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-gray-400 text-sm sm:text-base mt-2 sm:mt-0 sm:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-cyan-500 bg-opacity-20 text-cyan-400 rounded-full text-sm border border-cyan-500 border-opacity-30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center text-cyan-400">
              <CountUp
                from={0}
                to={5}
                separator=","
                direction="up"
                duration={1.5}
                className="count-up-text text-white text-5xl"
              /> {t.about.projectsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded text-xs border border-blue-500 border-opacity-30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      {t.about.viewOnGithub}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 sm:mb-12 text-center text-cyan-400">
              <CountUp
                from={0}
                to={38}
                separator=","
                direction="up"
                duration={1.5}
                className="count-up-text text-white text-5xl"
              /> {t.about.skillsTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center text-sm"
                        onMouseEnter={() => setActiveSkill(skill)}
                        onMouseLeave={() => setActiveSkill(null)}
                      >
                        <span className={`w-2 h-2 rounded-full mr-2 transition-all ${
                          activeSkill === skill ? 'bg-cyan-400 w-3 h-3' : 'bg-gray-600'
                        }`}></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 sm:mb-12 text-center text-cyan-400">
              <CountUp
                from={0}
                to={4}
                separator=","
                direction="up"
                duration={1.5}
                className="count-up-text text-white text-5xl"
              /> Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">🌐</div>
                <h3 className="text-lg font-semibold text-white">{t.certifications.ccna1.name}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">{t.certifications.ccna1.period}</p>
              <p className="text-gray-300 text-sm">{t.certifications.ccna1.description}</p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">🛡️</div>
                <h3 className="text-lg font-semibold text-white">{t.certifications.csna.name}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">{t.certifications.csna.period}</p>
              <p className="text-gray-300 text-sm">{t.certifications.csna.description}</p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">🌐</div>
                <h3 className="text-lg font-semibold text-white">{t.certifications.ccna2.name}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">{t.certifications.ccna2.period}</p>
              <p className="text-gray-300 text-sm">{t.certifications.ccna2.description}</p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">🛡️</div>
                <h3 className="text-lg font-semibold text-white">{t.certifications.csne.name}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">{t.certifications.csne.period}</p>
              <p className="text-gray-300 text-sm">{t.certifications.csne.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}