import SplitText from "../components/SplitText";
import FadeContent from '../components/FadeContentProps';
import profilePic from "../img/moi.jpeg";
import StaggeredMenu from '../components/StaggeredMenu';
import logo from "../img/icon.png";

const menuItems = [
  { label: 'About me', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Projects', ariaLabel: 'View our projects', link: '/projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/macsborb' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/robbie-blanc-a37093228' }
];

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      
      {/* Menu fixe en overlay - reste visible lors du scroll */}
      <div style={{ height: '100vh'}} className="fixed top-0 left-0 w-full flex">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={false}
          menuButtonColor="#fff"
          openMenuButtonColor="#484848ff"
          changeMenuColorOnOpen={true}
          colors={['#000000ff', '#200493ff']}
          accentColor="#0ac8eeff"
          logoUrl={logo}
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>

      {/* Contenu central */}
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <FadeContent blur={true} delay={2000} duration={2000} easing="ease-out" initialOpacity={0}>
          <img
            src={profilePic}
            alt="Profile"
            className="w-80 h-80 rounded-2xl mb-6 object-cover"
          />
        </FadeContent>
        <section>
          <SplitText
            text="Blanc Robbie"
            className="text-7xl font-semibold text-center"
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
    </div>
  );
}