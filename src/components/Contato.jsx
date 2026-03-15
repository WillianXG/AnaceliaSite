// Contato.jsx
import { useInView } from "react-intersection-observer";

export default function Contato() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section
      id="contato"
      className="py-20 px-4 md:px-16 font-lora"
      style={{ backgroundColor: "#f4c6c6", color: "#1a1a1a" }}
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-1500"
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        Fale Conosco
      </h2>

      <div
        className="max-w-3xl mx-auto p-8 rounded-xl shadow-lg transition-all duration-1500"
        style={{
          backgroundColor: "#d9a9a9",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f4c6c6] transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f4c6c6] transition"
          />
          <textarea
            placeholder="Digite sua mensagem"
            className="border border-gray-300 rounded-lg p-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-[#f4c6c6] transition"
          />
          <button
            type="submit"
            className="bg-[#f4c6c6] text-[#1a1a1a] font-bold px-6 py-3 rounded-lg hover:bg-[#eab0b0] transition-all shadow-md"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
