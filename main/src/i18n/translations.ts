export const translations = {
  fr: {
    nav: {
      about: 'À propos',
      projects: 'Projets',
      experience: 'Expérience',
      education: 'Formation',
      skills: 'Compétences',
      contact: 'Contact',
      menu: 'Menu'
    },
    hero: {
      name: 'Blanc Robbie',
      role: 'Ingénieur DevOps · DevSecOps · Cloud',
      tagline: 'Ingénieur DevOps et DevSecOps : j\'automatise et je sécurise des infrastructures cloud AWS, Azure et GCP avec Kubernetes, Docker, Terraform et Ansible, des pipelines CI/CD GitLab, GitHub Actions et Jenkins, et la gestion des secrets HashiCorp Vault.',
      ctaProjects: 'Voir mes projets',
      ctaContact: 'Me contacter',
      statsProjects: 'projets',
      statsSkills: 'compétences',
      statsCerts: 'certifications',
      photoAlt: 'Portrait de Robbie Blanc'
    },
    sections: {
      about: 'À propos',
      projects: 'Projets',
      featured: 'Projets récents',
      others: 'Autres projets',
      experience: 'Expérience',
      education: 'Formation',
      skills: 'Compétences techniques',
      certifications: 'Certifications',
      contact: 'Contact',
      contactTitle: 'Travaillons ensemble',
      contactText: 'Un poste, une mission DevOps / sécurité ou un projet à automatiser ? Écrivez-moi, je réponds rapidement.'
    },
    about: {
      lead: 'Ingénieur DevOps / DevSecOps spécialisé en CI/CD, infrastructure as code (Terraform, Ansible), conteneurs (Docker, Kubernetes) et cloud (AWS, Azure, GCP).',
      journey1: 'Issu d\'un parcours en cybersécurité (maîtrise à l\'UQAC), j\'ai déployé HashiCorp Vault Enterprise, des modules Terraform et des pipelines GitLab CI/CD chez Loto-Québec, et automatisé le provisionnement OpenStack avec Terraform et Ansible chez BE YS Software.',
      journey2: 'Au quotidien : DevSecOps et gestion des secrets, supervision (Prometheus, Grafana, ELK), sécurité réseau (Stormshield, Fortinet, Cisco) et scripts Python, Bash et PowerShell. Je développe aussi des API et des applications React/TypeScript.',
      journey3: 'Entrepreneur dans l\'âme, je construis mes propres produits : une plateforme qui automatise la création, la relecture et la publication de sites clients, une IA de recherche sur les memecoins, un SaaS B2B d\'e-mails par IA, des bots de trading et des systèmes IoT sécurisés.',
      factLocation: 'Basé à',
      factLocationValue: 'Bourg-Saint-Maurice, France',
      factEducation: 'Formation',
      factEducationValue: 'Maîtrise en cybersécurité, UQAC',
      factFocus: 'Spécialités',
      factFocusValue: 'DevOps, DevSecOps, CI/CD, Cloud',
      security: 'Sécurité',
      securityDesc: 'Infrastructure sécurisée et gestion des secrets',
      automation: 'Automatisation',
      automationDesc: 'CI/CD et pipelines de bout en bout',
      innovation: 'Innovation',
      innovationDesc: 'Technologies de pointe et entrepreneuriat'
    },
    labels: {
      viewOnGithub: 'Voir sur GitHub',
      viewSite: 'Voir le site client',
      inProduction: 'En production',
      research: 'Recherche',
      new: 'Nouveau',
      zoom: 'Agrandir l\'image',
      close: 'Fermer'
    },
    contact: {
      phone: 'Téléphone',
      email: 'E-mail',
      location: 'Localisation',
      social: 'Réseau',
      code: 'Code'
    },
    education: {
      highschool: {
        title: 'Baccalauréat Général',
        school: 'Lycée Français',
        period: '2019 - 2022',
        location: 'France',
        description: 'Spécialités : Mathématiques, Physique-Chimie et Sciences de l\'Informatique',
        grade: 'Moyenne : 13/20'
      },
      but: {
        title: 'BUT Informatique',
        school: 'IUT Annecy',
        period: '2022 - 2024',
        location: 'Annecy, France',
        description: 'Formation technique en développement logiciel, réseaux et cybersécurité',
        grade: 'Moyenne : 13.4/20'
      },
      master: {
        title: 'Maîtrise en Cybersécurité',
        school: 'UQAC',
        period: '2024 - 2026',
        location: 'Québec, Canada',
        description: 'Spécialisation en sécurité des réseaux, DevSecOps et sécurisation des systèmes IoT',
        grade: 'GPA : 3.3/4.2'
      }
    },
    experiences: {
      netops: {
        title: 'Stage NetOps',
        company: 'Loto-Québec',
        period: 'Sept 2025 - Mai 2026',
        location: 'Montréal, QC',
        description: 'Conception et déploiement d\'un cluster HashiCorp Vault Enterprise pour centraliser la gestion des secrets. Intégration de Vault aux pipelines GitLab CI/CD via l\'authentification JWT. Création et documentation de modules Terraform pour provisionner moteurs, politiques et rôles Vault sur plusieurs environnements. Déploiement de ressources sur HCP Cloud avec Terraform.'
      },
      beYS: {
        title: 'Ingénieur DevSecOps',
        company: 'BE YS Software',
        period: 'Avr 2023 - Août 2024',
        location: 'Annecy, France (Remote)',
        description: 'Sécurisation des accès SSH aux machines virtuelles cloud (OpenStack) avec Terraform et Ansible. Automatisation du provisionnement d\'infrastructure et des pipelines de déploiement. Développement de rôles Ansible personnalisés avec tests Molecule. Renforcement de la sécurité avec MFA et contrôles d\'accès granulaires.'
      }
    },
    projects: {
      agency: {
        title: 'Plateforme d\'agence web automatisée',
        period: '2026',
        description: 'Une chaîne complète pour créer, faire relire et publier des sites vitrines clients. Un workflow crée le dépôt privé de chaque site et son webhook signé ; chaque push est compilé puis publié sur Cloudflare Pages. La preview reste privée et intègre des outils de relecture, et la production n\'est mise à jour qu\'après validation de la version exacte par le client.',
        highlights: [
          'Création d\'un site en un workflow : dépôt privé, branches preview / main / client-assets, webhook installé avant le premier push',
          'Webhooks GitHub signés reçus par une Pages Function, qui déclenche la compilation et la publication',
          'Preview protégée par Cloudflare Access, jeton JWT vérifié côté serveur, rôles agence et client',
          'Relecture client intégrée : commentaires sur le texte, envoi de photos, validation puis promotion vers la production',
          'Premier client en production : le restaurant Chalet Grillette'
        ],
        captions: [
          'chaletgrillette.com, premier site client en production, publié automatiquement sur Cloudflare Pages.',
          'Le parcours d\'une modification : push, webhook signé, build, preview privée, validation du client, puis production.',
          'Textes et photos sont relus et validés par la cliente dans la preview avant chaque mise en production.'
        ]
      },
      pumpml: {
        title: 'PumpML, IA de lecture de narratives',
        period: '2026',
        description: 'Projet de recherche : une IA auto-apprenante qui lit la narrative de chaque nouveau memecoin pump.fun (texte, image, tweet lié, historique du créateur) et teste ses décisions en paper trading au prix réel Jupiter, 24 h/24. Elle se réentraîne toutes les 4 heures, et un nouveau modèle ne remplace le champion que s\'il fait mieux sur des heures jamais vues.',
        highlights: [
          'Plus de 150 000 tokens collectés en 5 jours et 124 000 migrations en mémoire longue (fin octobre 2026)',
          'Embeddings CLIP sur GPU, LightGBM et XGBoost CUDA, recherche d\'hyperparamètres Optuna',
          'AUC d\'environ 0,77 à 0,80 sur des heures jamais vues, sans fuite d\'information future',
          'Paper trading uniquement : pas encore rentable, aucun avantage prouvé à ce jour'
        ],
        captions: [
          'Tableau de bord local : chaque nouveau token est noté en direct, avec le PnL simulé et le modèle champion en cours.',
          'Le tri fonctionne : les tokens du top 10 % gagnent 5,5 % du temps, contre moins de 0,1 % pour les 40 % les moins bien notés.',
          'Plus de données aide : l\'AUC passe de 0,745 à 0,769 avec 1, 2 puis 3 jours d\'entraînement, sur les mêmes heures de test.',
          'Mais pas encore rentable : −11,4 SOL simulés après 780 trades, perdus surtout le premier jour ; la courbe est presque plate depuis.',
          'La plupart des « pumps » sont artificiels : sur 732 tokens arrivés vers 30 000 $, seuls 54 y sont parvenus naturellement.',
          'Les copies perdent plus que les originaux : les bloquer aurait évité 390 achats et 6,1 SOL de pertes. La règle est désormais active.'
        ]
      },
      saas: {
        title: 'SaaS B2B Email Automation',
        description: 'Génération automatique d\'e-mails personnalisés via l\'API Mistral avec le contexte Outlook. Interface type messagerie avec stockage dans Supabase.'
      },
      trading: {
        title: 'Trading Bot Solana',
        description: 'Bot de trading Python avec WebSocket asynchrone pour détecter les nouveaux tokens. Gestion des pools de liquidité Raydium/Jupiter, calcul du slippage et du PnL.'
      },
      dogBreed: {
        title: 'Classification de races de chiens',
        description: 'CNN construit avec PyTorch pour classifier plus de 120 races de chiens. Prétraitement et augmentation de plus de 20 000 images. Application web interactive Streamlit pour visualiser le modèle.'
      },
      iot: {
        title: 'IoT Blockchain Security',
        description: 'Système de capteurs Arduino communiquant via HTTP avec un backend Node.js. Stockage MySQL avec tableau de bord temps réel en WebSocket et sécurisation blockchain.'
      },
      chrome: {
        title: 'Extension Chrome Startup',
        description: 'Développement d\'une extension Chrome pour automatiser des tâches B2B et améliorer la productivité.'
      },
      tsne: {
        title: 'T-SNE AI Analysis',
        description: 'Projet d\'analyse de données utilisant l\'algorithme T-SNE pour la visualisation et la classification de données complexes.'
      }
    },
    skills: {
      topTitle: 'Stack principale',
      topNote: 'Les technologies les plus demandées en entreprise, toutes utilisées en contexte professionnel.',
      allTitle: 'Toutes les compétences',
      cloud: 'Cloud',
      containers: 'Conteneurs',
      iac: 'Infrastructure as Code',
      cicd: 'CI/CD',
      security: 'Sécurité',
      systems: 'Systèmes & réseaux',
      observability: 'Supervision',
      languages: 'Langages & web',
      databases: 'Bases de données',
      ml: 'Machine learning',
      mlNote: 'Utilisés dans des projets personnels et universitaires.',
      proNote: 'Utilisés en entreprise.'
    },
    certifications: {
      ccna1: {
        name: 'CCNA Cisco 1',
        period: '2021 - 2022',
        description: 'Fondation solide en réseau, routage et switching, avec expérience pratique en configuration et dépannage d\'environnements Cisco.'
      },
      csna: {
        name: 'CSNA Stormshield',
        period: '2022 - 2023',
        description: 'Formation spécialisée en administration de sécurité réseau sur technologies Stormshield.'
      },
      ccna2: {
        name: 'CCNA Cisco 2',
        period: '2022 - 2023',
        description: 'Configuration avancée de routage et switching Cisco.'
      },
      csne: {
        name: 'CSNE Stormshield',
        period: '2023 - 2024',
        description: 'Ingénierie réseau Stormshield, déploiement de pare-feu et protection avancée contre les menaces.'
      }
    },
    footer: {
      built: 'Conçu avec React, TypeScript et Tailwind.'
    }
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact',
      menu: 'Menu'
    },
    hero: {
      name: 'Robbie Blanc',
      role: 'DevOps · DevSecOps · Cloud Engineer',
      tagline: 'DevOps and DevSecOps engineer: I automate and secure AWS, Azure and GCP cloud infrastructure with Kubernetes, Docker, Terraform and Ansible, GitLab, GitHub Actions and Jenkins CI/CD pipelines, and HashiCorp Vault secrets management.',
      ctaProjects: 'See my projects',
      ctaContact: 'Contact me',
      statsProjects: 'projects',
      statsSkills: 'skills',
      statsCerts: 'certifications',
      photoAlt: 'Portrait of Robbie Blanc'
    },
    sections: {
      about: 'About',
      projects: 'Projects',
      featured: 'Recent projects',
      others: 'Other projects',
      experience: 'Experience',
      education: 'Education',
      skills: 'Technical skills',
      certifications: 'Certifications',
      contact: 'Contact',
      contactTitle: 'Let\'s work together',
      contactText: 'A role, a DevOps / security engagement or a process to automate? Drop me a line, I reply quickly.'
    },
    about: {
      lead: 'DevOps / DevSecOps engineer specialized in CI/CD, infrastructure as code (Terraform, Ansible), containers (Docker, Kubernetes) and cloud (AWS, Azure, GCP).',
      journey1: 'With a cybersecurity background (master\'s at UQAC), I deployed HashiCorp Vault Enterprise, Terraform modules and GitLab CI/CD pipelines at Loto-Québec, and automated OpenStack provisioning with Terraform and Ansible at BE YS Software.',
      journey2: 'Day to day: DevSecOps and secrets management, monitoring (Prometheus, Grafana, ELK), network security (Stormshield, Fortinet, Cisco) and Python, Bash and PowerShell scripting. I also build APIs and React/TypeScript applications.',
      journey3: 'Entrepreneur at heart, I build my own products: a platform that automates the creation, review and publishing of client websites, a memecoin research AI, a B2B AI email SaaS, trading bots and secure IoT systems.',
      factLocation: 'Based in',
      factLocationValue: 'Bourg-Saint-Maurice, France',
      factEducation: 'Education',
      factEducationValue: 'Master\'s in Cybersecurity, UQAC',
      factFocus: 'Focus',
      factFocusValue: 'DevOps, DevSecOps, CI/CD, Cloud',
      security: 'Security',
      securityDesc: 'Secure infrastructure and secrets management',
      automation: 'Automation',
      automationDesc: 'End-to-end CI/CD pipelines',
      innovation: 'Innovation',
      innovationDesc: 'Cutting-edge technologies and entrepreneurship'
    },
    labels: {
      viewOnGithub: 'View on GitHub',
      viewSite: 'Visit the client site',
      inProduction: 'In production',
      research: 'Research',
      new: 'New',
      zoom: 'Enlarge image',
      close: 'Close'
    },
    contact: {
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      social: 'Network',
      code: 'Code'
    },
    education: {
      highschool: {
        title: 'French High School Diploma',
        school: 'French High School',
        period: '2019 - 2022',
        location: 'France',
        description: 'Specializations: Mathematics, Physics-Chemistry and Computer Science',
        grade: 'Average: 13/20'
      },
      but: {
        title: 'Bachelor\'s Degree – Network, Systems & Cybersecurity',
        school: 'Université Savoie Mont-Blanc',
        period: '2021 - 2024',
        location: 'Annecy, France',
        description: 'Technical training in software development, networks and cybersecurity. Completed 1 internship and 1 sandwich course.',
        grade: 'GPA: 13.4/20'
      },
      master: {
        title: 'Master\'s in Cybersecurity',
        school: 'UQAC',
        period: '2024 - 2026',
        location: 'Quebec, Canada',
        description: 'Specialization in network security, DevSecOps and IoT systems security',
        grade: 'GPA: 3.3/4.2'
      }
    },
    experiences: {
      netops: {
        title: 'NetOps Internship',
        company: 'Loto-Québec',
        period: 'Sept 2025 - May 2026',
        location: 'Montreal, QC',
        description: 'Designed and deployed a HashiCorp Vault Enterprise cluster to centralize secrets management. Integrated Vault with GitLab CI/CD pipelines using JWT authentication. Built and documented Terraform modules to provision and manage Vault engines, policies, and roles across environments. Used Terraform to deploy resources on HCP Cloud.'
      },
      beYS: {
        title: 'DevSecOps Engineer',
        company: 'BE YS Software',
        period: 'Apr 2023 - Aug 2024',
        location: 'Annecy, France (Remote)',
        description: 'Secured SSH access to cloud-based virtual machines (OpenStack) with Terraform and Ansible. Automated infrastructure provisioning and service deployment pipelines. Developed custom Ansible roles and used Molecule for infrastructure testing. Enhanced security with MFA and fine-grained access controls.'
      }
    },
    projects: {
      agency: {
        title: 'Automated web agency platform',
        period: '2026',
        description: 'An end-to-end pipeline to create, review and publish client showcase websites. One workflow creates each site\'s private repository and signed webhook; every push is built and published to Cloudflare Pages. The preview stays private with built-in review tools, and production is only updated once the client has approved the exact version.',
        highlights: [
          'One workflow per new site: private repository, preview / main / client-assets branches, webhook installed before the first push',
          'Signed GitHub webhooks received by a Pages Function that triggers the build and deployment',
          'Preview protected by Cloudflare Access, JWT verified server-side, agency and client roles',
          'Built-in client review: comments on text, photo uploads, approval then promotion to production',
          'First client in production: the Chalet Grillette restaurant'
        ],
        captions: [
          'chaletgrillette.com, the first client site in production, automatically published to Cloudflare Pages.',
          'The path of a change: push, signed webhook, build, private preview, client approval, then production.',
          'Text and photos are reviewed and approved by the client in the preview before every production release.'
        ]
      },
      pumpml: {
        title: 'PumpML, narrative-reading AI',
        period: '2026',
        description: 'Research project: a self-learning AI that reads the narrative of every new pump.fun memecoin (text, image, linked tweet, creator history) and tests its decisions by paper trading at real Jupiter prices, 24/7. It retrains every 4 hours, and a new model only replaces the champion if it does better on hours it has never seen.',
        highlights: [
          '150,000+ tokens collected in 5 days and 124,000 past migrations in long-term memory (late October 2026)',
          'CLIP embeddings on GPU, LightGBM and CUDA XGBoost, Optuna hyperparameter search',
          'AUC of about 0.77 to 0.80 on unseen hours, with no look-ahead leakage',
          'Paper trading only: not profitable yet, no proven edge so far'
        ],
        captions: [
          'Local dashboard: every new token is scored live, with the simulated PnL and the current champion model.',
          'The ranking works: top-10% tokens win 5.5% of the time, versus under 0.1% for the bottom 40%.',
          'More data helps: AUC rises from 0.745 to 0.769 when training on 1, 2 then 3 days, on the same test hours.',
          'But not profitable yet: −11.4 SOL simulated after 780 trades, mostly lost on day one; the curve has been almost flat since.',
          'Most "pumps" are fake: of 732 tokens that reached ~$30,000, only 54 got there organically.',
          'Copies lose more than originals: blocking them would have avoided 390 buys and 6.1 SOL of losses. The rule is now live.'
        ]
      },
      saas: {
        title: 'B2B Email Automation SaaS',
        description: 'Built a SaaS platform for AI-generated B2B emails. Integrated Mistral LLM API and Outlook API to generate context-aware emails. Developed a JavaScript/Node.js frontend and deployed the system with CI/CD on Azure.'
      },
      trading: {
        title: 'Solana Trading Bot',
        description: 'Python trading bot with asynchronous WebSocket to detect new tokens. Raydium/Jupiter liquidity pool management, slippage and PnL calculation.'
      },
      dogBreed: {
        title: 'Dog Breed Classification',
        description: 'Built a CNN in PyTorch for classifying 120+ dog breeds. Preprocessed and augmented 20,000+ images to improve accuracy and generalization. Deployed an interactive Streamlit web app for model visualization.'
      },
      iot: {
        title: 'IoT Blockchain Security',
        description: 'Arduino sensor system communicating via HTTP to a Node.js backend. MySQL storage with real-time WebSocket dashboard and blockchain security.'
      },
      chrome: {
        title: 'Chrome Extension Startup',
        description: 'Development of a Chrome extension to automate B2B tasks and improve productivity.'
      },
      tsne: {
        title: 'T-SNE AI Analysis',
        description: 'Data analysis project using the T-SNE algorithm for visualization and classification of complex data.'
      }
    },
    skills: {
      topTitle: 'Core stack',
      topNote: 'The technologies most in demand in industry, all used in a professional setting.',
      allTitle: 'All skills',
      cloud: 'Cloud',
      containers: 'Containers',
      iac: 'Infrastructure as Code',
      cicd: 'CI/CD',
      security: 'Security',
      systems: 'Systems & networking',
      observability: 'Monitoring',
      languages: 'Languages & web',
      databases: 'Databases',
      ml: 'Machine learning',
      mlNote: 'Used in personal and university projects.',
      proNote: 'Used in a professional setting.'
    },
    certifications: {
      ccna1: {
        name: 'CCNA Cisco 1',
        period: '2021 - 2022',
        description: 'Solid foundation in networking, routing, and switching concepts, with hands-on experience in configuring and troubleshooting Cisco environments.'
      },
      csna: {
        name: 'CSNA Stormshield',
        period: '2022 - 2023',
        description: 'Specialized training in network security administration on Stormshield technologies.'
      },
      ccna2: {
        name: 'CCNA Cisco 2',
        period: '2022 - 2023',
        description: 'Advanced Cisco routing and switching configuration.'
      },
      csne: {
        name: 'CSNE Stormshield',
        period: '2023 - 2024',
        description: 'Stormshield network engineering, covering firewall deployment, configuration, and advanced threat protection.'
      }
    },
    footer: {
      built: 'Built with React, TypeScript and Tailwind.'
    }
  }
};

export type Language = 'fr' | 'en';
