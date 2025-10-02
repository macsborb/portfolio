import SplitText from "../components/SplitText";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      {/* Ton nom animé */}
      <SplitText
        text="BLANC Robbie"
        className="text-2xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    </section>
  );
}
