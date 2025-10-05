export const translations = {
  fr: {
    contact: {
      title: 'Contact',
      phone: 'Téléphone',
      email: 'Email',
      location: 'Localisation'
    },
    education: {
      title: 'Formation',
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

    nav: {
      home: 'Accueil',
      about: 'À Propos',
      projects: 'Projets',
      contact: 'Contact',
      socials: 'Réseaux'
    },
    hero: {
      name: 'Blanc Robbie'
    },
    about: {
      title: 'À Propos',
      subtitle: 'Ingénieur en cybersécurité et DevOps passionné par l\'automatisation, la sécurité des infrastructures et les technologies blockchain.',
      journeyTitle: 'Mon Parcours',
      journey1: 'Actuellement en maîtrise en cybersécurité à l\'UQAC et stagiaire NetOps chez Loto-Québec, je me spécialise dans le DevOps, la sécurité des infrastructures et l\'automatisation des processus.',
      journey2: 'Mon expertise technique couvre HashiCorp Vault, GitLab CI/CD, Docker, Kubernetes, et Terraform. Je maîtrise également le développement d\'API REST, l\'intégration de modèles LLM, et la création de solutions blockchain sur Solana.',
      journey3: 'Entrepreneur dans l\'âme, je développe des projets variés : SaaS B2B d\'automatisation d\'emails, bots de trading crypto, systèmes IoT sécurisés, et solutions d\'infrastructure scalable. Mon objectif est de combiner innovation technique et impact réel dans des projets ambitieux.',
      experienceTitle: 'Expérience',
      projectsTitle: 'Projets Principaux',
      skillsTitle: 'Compétences Techniques',
      certificationsTitle: 'Certifications',
      valuesTitle: 'Valeurs',
      viewOnGithub: 'Voir sur GitHub →',
      security: 'Sécurité',
      securityDesc: 'Infrastructure sécurisée et gestion des secrets',
      automation: 'Automatisation',
      automationDesc: 'CI/CD et pipelines optimisés',
      innovation: 'Innovation',
      innovationDesc: 'Technologies de pointe et entrepreneuriat'
    },
    experiences: {
      netops: {
        title: 'Stage NetOps',
        company: 'Loto-Québec',
        period: 'Sept 2025 - Jan 2026',
        location: 'Montréal, QC',
        description: 'Déploiement de HashiCorp Vault, intégration avec GitLab CI/CD et Terraform Cloud. Gestion sécurisée des secrets, JWT authentication, design de namespaces multi-environnements.'
      },
      beYS: {
        title: 'Ingénieur DevSecOps',
        company: 'BE YS Software',
        period: 'Avr 2023 - Août 2024',
        location: 'Annecy, France (Remote)',
        description: 'Sécurisation des accès SSH aux machines virtuelles cloud (OpenStack) avec Terraform et Ansible. Automatisation du provisionnement d\'infrastructure et pipelines de déploiement. Développement de rôles Ansible personnalisés avec tests Molecule. Renforcement de la sécurité avec MFA et contrôles d\'accès granulaires.',
      }
    },
    projects: {
      dogBreed: {
        title: 'Classification de Races de Chiens - ML',
        description: 'CNN construit avec PyTorch pour classifier 120+ races de chiens. Prétraitement et augmentation de 20 000+ images. Application web interactive Streamlit pour visualisation du modèle.',
        tech: ['PyTorch', 'Scikit-learn', 'CNNs', 'Streamlit', 'Image Augmentation']
      },
      saas: {
        title: 'SaaS B2B Email Automation',
        description: 'Génération automatique d\'emails personnalisés via Mistral API avec contexte Outlook. Interface type messagerie avec stockage dans Supabase.'
      },
      trading: {
        title: 'Trading Bot Solana',
        description: 'Bot de trading Python avec WebSocket asynchrone pour détecter nouveaux tokens. Gestion de pools de liquidité Raydium/Jupiter, calcul de slippage et PnL.'
      },
      iot: {
        title: 'IoT Blockchain Security',
        description: 'Système de capteurs Arduino communicant via HTTP vers backend Node.js. Stockage MySQL avec dashboard temps réel WebSocket et sécurisation blockchain.'
      },
      chrome: {
        title: 'Extension Chrome Startup',
        description: 'Développement d\'une extension Chrome pour automatiser des tâches B2B et améliorer la productivité.'
      },
      tsne: {
        title: 'T-SNE AI Analysis',
        description: 'Projet d\'analyse de données utilisant l\'algorithme T-SNE pour la visualisation et classification de données complexes.'
      }
    },
    skills: {
      languages: 'Langages',
      devops: 'DevOps & Cloud',
      networking: 'Réseaux',
      webApi: 'Web & API',
      ml: 'Machine Learning',
      tools: 'Outils',
      security: 'Sécurité & Pentesting'
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
    }
  },
  en: {
    contact: {
      title: 'Contact',
      phone: 'Phone',
      email: 'Email',
      location: 'Location'
    },
    education: {
      title: 'Education',
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
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      socials: 'Socials'
    },
    hero: {
      name: 'Robbie Blanc'
    },
    about: {
      title: 'About',
      subtitle: 'Cybersecurity and DevOps engineer passionate about automation, infrastructure security and blockchain technologies.',
      journeyTitle: 'My Journey',
      journey1: 'Currently pursuing a master\'s degree in cybersecurity at UQAC and NetOps intern at Loto-Québec, I specialize in DevOps, infrastructure security and process automation.',
      journey2: 'My technical expertise covers HashiCorp Vault, GitLab CI/CD, Docker, Kubernetes, and Terraform. I also master REST API development, LLM model integration, and blockchain solutions on Solana.',
      journey3: 'Entrepreneur at heart, I develop various projects: B2B email automation SaaS, crypto trading bots, secure IoT systems, and scalable infrastructure solutions. My goal is to combine technical innovation and real impact in ambitious projects.',
      experienceTitle: 'Experience',
      projectsTitle: 'Main Projects',
      skillsTitle: 'Technical Skills',
      certificationsTitle: 'Certifications',
      valuesTitle: 'Values',
      viewOnGithub: 'View on GitHub →',
      security: 'Security',
      securityDesc: 'Secure infrastructure and secrets management',
      automation: 'Automation',
      automationDesc: 'Optimized CI/CD pipelines',
      innovation: 'Innovation',
      innovationDesc: 'Cutting-edge technologies and entrepreneurship'
    },
    experiences: {
      netops: {
        title: 'NetOps Internship',
        company: 'Loto-Québec',
        period: 'Sept 2025 - Jan 2026',
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
      dogBreed: {
        title: 'Dog Breed Classification - ML Project',
        description: 'Built a CNN in PyTorch for classifying 120+ dog breeds. Preprocessed and augmented 20,000+ images to improve accuracy and generalization. Deployed an interactive Streamlit web app for model visualization.',
        tech: ['PyTorch', 'Scikit-learn', 'CNNs', 'Streamlit', 'Image Augmentation']
      },
      saas: {
        title: 'B2B Email Automation SaaS',
        description: 'Built a SaaS platform for AI-generated B2B emails. Integrated Mistral LLM API and Outlook API to generate context-aware emails. Developed a JavaScript/Node.js frontend and deployed the system with CI/CD on Azure.'
      },
      trading: {
        title: 'Solana Trading Bot',
        description: 'Python trading bot with asynchronous WebSocket to detect new tokens. Raydium/Jupiter liquidity pool management, slippage and PnL calculation.'
      },
      iot: {
        title: 'IoT Blockchain Security',
        description: 'Arduino sensor system communicating via HTTP to Node.js backend. MySQL storage with real-time WebSocket dashboard and blockchain security.'
      },
      chrome: {
        title: 'Chrome Extension Startup',
        description: 'Development of a Chrome extension to automate B2B tasks and improve productivity.'
      },
      tsne: {
        title: 'T-SNE AI Analysis',
        description: 'Data analysis project using T-SNE algorithm for visualization and classification of complex data.'
      }
    },
    skills: {
      languages: 'Languages',
      devops: 'DevOps & Cloud',
      networking: 'Networking',
      webApi: 'Web & API',
      ml: 'Machine Learning',
      tools: 'Tools',
      security: 'Security & Pentesting'
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
    }
  }
};

export type Language = 'fr' | 'en';