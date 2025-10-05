import HeroSection from "./view/HeroSection";
import About from "./view/About";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
          <HeroSection />
          <About />
    </LanguageProvider>
  );
}

export default App;
