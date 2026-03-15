// Sobre.jsx
import { useInView } from "react-intersection-observer";

export default function Sobre() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: firstRef, inView: firstInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section
      id="sobre"
      className="py-24 px-4 md:px-16 font-lora space-y-24 bg-[#f4c6c6] text-[#1a1a1a]"
    >
      {/* Título */}
      <h2
        ref={headerRef}
        className={`text-4xl md:text-5xl font-bold text-center transition-all duration-1000 ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        Sobre Ana Célia
      </h2>

      {/* Primeira seção */}
      <div
        ref={firstRef}
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 transition-all duration-1000 ${
          firstInView
            ? "opacity-100 translate-x-0 translate-y-0"
            : "opacity-0 md:-translate-x-20 translate-y-10"
        }`}
      >
        <img
          src="https://ana-celia.vercel.app/assets/ana3-B8tZKWpW.jpeg"
          alt="Ana Célia"
          className="rounded-xl shadow-lg object-cover w-full md:w-110 transition-transform duration-500 hover:scale-105"
          style={{ maxHeight: "900px" }}
        />
        <p className="text-lg md:text-xl leading-relaxed text-justify max-w-xl">
          Ana Célia é psicóloga com mais de 5 anos de experiência, especializada
          em terapia cognitivo-comportamental. Ela acredita no poder da escuta
          empática e do acolhimento, proporcionando um espaço seguro para que
          seus pacientes possam explorar suas emoções e desenvolver estratégias
          eficazes para lidar com os desafios da vida.
        </p>
      </div>

      {/* Segunda seção */}
      <div
        ref={secondRef}
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 transition-all duration-1000 ${
          secondInView
            ? "opacity-100 translate-x-0 translate-y-0"
            : "opacity-0 md:translate-x-20 translate-y-10"
        }`}
      >
        <p className="text-lg md:text-xl leading-relaxed text-justify max-w-xl order-2 md:order-1">
          Em sua prática clínica, Ana Célia atende adultos e adolescentes,
          oferecendo suporte em questões como ansiedade, depressão, estresse,
          autoestima, relacionamentos e transições de vida. Seu objetivo é
          ajudar os pacientes a alcançarem um bem-estar emocional e uma vida mais
          equilibrada.
        </p>
        <img
          src="https://ana-celia.vercel.app/assets/ana4-CLWLSd_D.jpeg"
          alt="Ana Célia atendendo paciente"
          className="rounded-xl shadow-lg object-cover w-full md:w-110 transition-transform duration-500 hover:scale-105 order-1 md:order-2"
          style={{ maxHeight: "900px" }}
        />
      </div>
    </section>
  );
}
