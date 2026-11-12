import HeroSection from './view/HeroSection';
import About from './view/About';
import Nav from './components/Nav';
import LightRays from './components/background';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.2}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <div className="absolute inset-0 bg-grid" />
      </div>
      <Nav />
      <main className="relative z-10 text-white">
        <HeroSection />
        <About />
      </main>
    </LanguageProvider>
  );
}

export default App;
