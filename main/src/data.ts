import { translations } from './i18n/translations';
import agencyHome from './img/projects/agency-grillette-home.webp';
import agencyPipeline from './img/projects/agency-pipeline.svg';
import agencyRestaurant from './img/projects/agency-grillette-restaurant.webp';
import pumpDashboard from './img/projects/pumpml-dashboard.webp';
import pumpDeciles from './img/projects/pumpml-deciles.webp';
import pumpCourbe from './img/projects/pumpml-courbe.webp';
import pumpPnl from './img/projects/pumpml-pnl.webp';
import pumpPercees from './img/projects/pumpml-percees.webp';
import pumpCopies from './img/projects/pumpml-copies.webp';
import remailiq from './img/projects/remailiq.webp';
import pybot from './img/projects/pybot.svg';
import dogs from './img/projects/dogs.svg';
import iot from './img/projects/iot.svg';
import chromeExt from './img/projects/chrome-extension.webp';
import tsne from './img/projects/tsne.svg';
import uqacLogo from './img/logos/uqac.webp';
import usmbLogo from './img/logos/usmb.svg';
import ciscoLogo from './img/logos/cisco.svg';
import stormshieldLogo from './img/logos/stormshield.svg';

type T = typeof translations.fr;

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  linkLabel: string;
  cover: string;
  period?: string;
  badge?: string;
  highlights?: string[];
  gallery?: GalleryImage[];
}

function gallery(srcs: string[], captions: string[]): GalleryImage[] {
  return srcs.map((src, i) => ({ src, caption: captions[i] ?? '' }));
}

export function getFeaturedProjects(t: T): Project[] {
  return [
    {
      ...t.projects.agency,
      tech: ['React', 'Vite', 'TypeScript', 'GitHub Actions', 'Cloudflare Pages', 'Cloudflare Access', 'Node.js'],
      link: 'https://chaletgrillette.com',
      linkLabel: t.labels.viewSite,
      badge: t.labels.inProduction,
      cover: agencyHome,
      gallery: gallery([agencyHome, agencyPipeline, agencyRestaurant], t.projects.agency.captions)
    },
    {
      ...t.projects.pumpml,
      tech: ['Python', 'PyTorch', 'LightGBM', 'XGBoost', 'Optuna', 'WebSocket', 'Solana'],
      link: 'https://github.com/macsborb/pumpml',
      linkLabel: t.labels.viewOnGithub,
      badge: t.labels.research,
      cover: pumpDashboard,
      gallery: gallery(
        [pumpDashboard, pumpDeciles, pumpCourbe, pumpPnl, pumpPercees, pumpCopies],
        t.projects.pumpml.captions
      )
    }
  ];
}

export function getOtherProjects(t: T): Project[] {
  const gh = t.labels.viewOnGithub;
  return [
    {
      ...t.projects.saas,
      tech: ['Mistral API', 'Supabase', 'React', 'Outlook API'],
      link: 'https://github.com/macsborb/RemailIQ',
      linkLabel: gh,
      cover: remailiq
    },
    {
      ...t.projects.trading,
      tech: ['Python', 'Solana', 'WebSocket'],
      link: 'https://github.com/macsborb/Pybot',
      linkLabel: gh,
      cover: pybot
    },
    {
      ...t.projects.dogBreed,
      tech: ['PyTorch', 'Scikit-learn', 'Python'],
      link: 'https://github.com/macsborb/Projet_final-IA-Dogs-Image-recogniation-',
      linkLabel: gh,
      cover: dogs
    },
    {
      ...t.projects.iot,
      tech: ['Arduino', 'Node.js', 'MySQL', 'Solana'],
      link: 'https://github.com/macsborb/IOT_Project',
      linkLabel: gh,
      cover: iot
    },
    {
      ...t.projects.chrome,
      tech: ['JavaScript', 'React'],
      link: 'https://github.com/macsborb/StartUp',
      linkLabel: gh,
      cover: chromeExt
    },
    {
      ...t.projects.tsne,
      tech: ['Python', 'Jupyter', 'Scikit-learn'],
      link: 'https://github.com/macsborb/T-SNE-AI',
      linkLabel: gh,
      cover: tsne
    }
  ];
}

/** Most in-demand technologies, all used professionally (confirmed by Robbie). */
export const TOP_STACK = [
  'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'AWS', 'Azure', 'GCP', 'GitLab CI/CD',
  'GitHub Actions', 'Jenkins', 'ArgoCD', 'HashiCorp Vault', 'Linux', 'Python', 'Prometheus', 'Grafana'
];

export function getSkills(t: T) {
  return [
    { category: t.skills.cloud, pro: true, items: ['AWS', 'Azure', 'GCP', 'OpenStack', 'HCP / Terraform Cloud', 'Cloudflare', 'OVHcloud', 'Supabase'] },
    { category: t.skills.containers, pro: true, items: ['Docker', 'Docker Compose', 'Kubernetes', 'Podman'] },
    { category: t.skills.iac, pro: true, items: ['Terraform', 'Ansible', 'Molecule', 'Packer'] },
    { category: t.skills.cicd, pro: true, items: ['GitLab CI/CD', 'GitHub Actions', 'Jenkins', 'ArgoCD', 'Git'] },
    {
      category: t.skills.security,
      pro: true,
      items: ['HashiCorp Vault', 'Keycloak', 'SonarQube', 'OWASP ZAP', 'Burp Suite', 'Nmap', 'Metasploit', 'Gobuster', 'Shodan', 'Wireshark', 'Kali Linux', 'Wazuh', 'Splunk', 'Snort / Suricata', 'Stormshield', 'Fortinet']
    },
    { category: t.skills.systems, pro: true, items: ['Linux', 'Windows Server', 'Active Directory', 'LDAP', 'Cisco IOS', 'VLAN / routage', 'DNS / DHCP', 'Nginx', 'Apache'] },
    { category: t.skills.observability, pro: true, items: ['Prometheus', 'Grafana', 'ELK'] },
    { category: t.skills.languages, pro: true, items: ['Python', 'Bash', 'PowerShell', 'TypeScript', 'JavaScript', 'PHP', 'SQL', 'React', 'Node.js', 'Flask', 'FastAPI', 'API LLM'] },
    { category: t.skills.databases, pro: true, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite'] },
    { category: t.skills.ml, pro: false, items: ['PyTorch', 'Scikit-learn', 'LightGBM / XGBoost', 'Pandas'] }
  ];
}

export function getEducationLogos(): Record<'master' | 'but' | 'highschool', string | undefined> {
  return { master: uqacLogo, but: usmbLogo, highschool: undefined };
}

export function getCertifications(t: T) {
  return [
    { ...t.certifications.csne, logo: stormshieldLogo },
    { ...t.certifications.ccna2, logo: ciscoLogo },
    { ...t.certifications.csna, logo: stormshieldLogo },
    { ...t.certifications.ccna1, logo: ciscoLogo }
  ];
}

export function getStats(t: T) {
  return {
    projects: getFeaturedProjects(t).length + getOtherProjects(t).length,
    skills: getSkills(t).reduce((n, g) => n + g.items.length, 0),
    certifications: getCertifications(t).length
  };
}
