import SplitText from "../components/SplitText";
import FadeContent from '../components/FadeContentProps';
import profilePic from "../img/moi.jpeg";
import LogoLoop from '../components/LoopLogo';
import ai from '../img/logo/ai.png';
import azure from '../img/logo/azure.png';
import cisco from '../img/logo/cisco.png';
import docker from '../img/logo/docker.png';
import github from '../img/logo/github.png';
import gitlab from '../img/logo/gitlab.png';
import js from '../img/logo/js.png';
import linux from '../img/logo/linux.png';
import python from '../img/logo/python.png';
import LightRays from '../components/background';
import LanguageToggle from '../components/LanguageToggle';

// Alternative with image sources
const imageLogos = [
  { src: ai, alt: "AI" },
  { src: azure, alt: "Azure" },
  { src: cisco, alt: "Cisco" },
  { src: docker, alt: "Docker" },
  { src: github, alt: "GitHub" },
  { src: gitlab, alt: "GitLab" },
  { src: js, alt: "JavaScript" },
  { src: linux, alt: "Linux" },
  { src: python, alt: "Python"},
];

export default function HeroSection() {
  return (
    
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background - z-index le plus bas */}
      
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
      {/* Contenu central - z-index moyen - RESPONSIVE */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-24 transition-all duration-500 flex flex-col items-center justify-center min-h-screen text-center">
                <LanguageToggle/>
        <FadeContent blur={true} delay={100} duration={2000} easing="ease-out" initialOpacity={0}>
          <img
            src={profilePic}
            alt="Profile"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl mb-4 sm:mb-6 object-cover"
          />
        </FadeContent>
        <section className="w-full max-w-6xl px-2">
          <SplitText
            text="Blanc Robbie"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center"
            delay={200}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </section>
      </div>

      {/* Logo loop - z-index moyen - RESPONSIVE */}
      <div className="relative z-10 h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden">
        <LogoLoop
          logos={imageLogos}
          speed={120}
          direction="left"
          logoHeight={60}
          gap={80}
          pauseOnHover
          scaleOnHover
          ariaLabel="Favorite Technology"
        />
      </div>
    </div>
  );
}