// Servicos.jsx
import { useInView } from "react-intersection-observer";

export default function Servicos() {
  const servicos = [
    {
      title: "Terapia Individual",
      desc: "Atendimento personalizado para adultos e adolescentes.",
      img: "https://images.pexels.com/photos/5699451/pexels-photo-5699451.jpeg",
    },
    {
      title: "Terapia de Casal",
      desc: "Fortaleça a comunicação e a conexão no relacionamento.",
      img: "https://images.pexels.com/photos/7447074/pexels-photo-7447074.jpeg",
    },
    {
      title: "Apoio em Saúde Mental",
      desc: "Cuidando da sua saúde emocional de forma acolhedora.",
      img: "https://images.pexels.com/photos/5234624/pexels-photo-5234624.jpeg",
    },
  ];

  return (
    <section
      id="servicos"
      className="py-24 px-4 md:px-16 font-lora bg-[#f4c6c6] text-[#1a1a1a] space-y-12"
    >
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-1500"
      >
        Serviços
      </h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicos.map((s, i) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.3,
          });

          return (
            <div
              key={i}
              ref={ref}
              className={`p-6 rounded-xl shadow-lg text-center transition-all duration-1000 hover:scale-105 hover:shadow-2xl ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ backgroundColor: "#d97a7a", color: "#1a1a1a" }}
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-base md:text-lg">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
