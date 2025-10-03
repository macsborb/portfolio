import SplitText from "../components/SplitText";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-white text-center"
      style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
      }}
    >
      {/* Nom animé */}
      <SplitText
        text="Robbie Blanc"
        className="hero-title"
        delay={1000}
        duration={2}
        ease="power3.outs"
        splitType="words"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    </section>
  );
}
