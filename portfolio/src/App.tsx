import HeroSection from "./view/HeroSection";
import StaggeredMenu from './components/StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About me', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Projects', ariaLabel: 'View our projects', link: '/projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/macsborb' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/robbie-blanc-a37093228' }
];

function App() {
  return (
    <>
      <HeroSection />
  </>
);
}

export default App;
