// Hero.jsx
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center font-lora px-4 sm:px-6 md:px-12"
      style={{ backgroundColor: "#f4c6c6", color: "#1a1a1a" }}
    >
      <div className="max-w-4xl text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1500"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Bem-vindo à Clínica Ana Célia
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto transition-all duration-1500"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Cuidando da saúde mental com acolhimento e profissionalismo.
          Terapia individual, de casal, adolescente e criança para seu bem-estar emocional.
        </p>
        <a
          href="#contato"
          className="inline-block bg-[#d9a9a9] text-[#1a1a1a] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#c89b9b] transition-all shadow-md duration-1500"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Agendar Consulta
        </a>
      </div>
    </section>
  );
}
