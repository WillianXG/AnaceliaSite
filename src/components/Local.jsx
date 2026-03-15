// Local.jsx
import { useInView } from "react-intersection-observer";

export default function Local() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section
      id="localizacao"
      className="py-24 px-4 md:px-16 font-lora bg-[#f4c6c6] text-[#1a1a1a]"
    >
      <div
        ref={sectionRef}
        className={`transition-all duration-1000 ${
          sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Localização
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Card do mapa */}
          <div className="w-full md:w-1/2 rounded-xl shadow-lg overflow-hidden">
            <iframe
              title="Google Maps Clínica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.204834591299!2d-43.26626518447496!3d-22.890532085009205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f4686f2e515%3A0x4b4b122a234d3d6f!2sAv.%20Dom%20H%C3%A9lder%20C%C3%A2mara%2C%205200%20-%20Cachambi%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020771-004!5e0!3m2!1spt-BR!2sbr!4v1699750000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              className="border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 text-lg md:text-xl leading-relaxed">
            <h3 className="text-2xl md:text-3xl font-bold">Minha Clínica</h3>
            <p>
              Oferecemos serviços de saúde de alta qualidade para toda a família. 
              Nossos profissionais dedicados estão prontos para cuidar de você.
            </p>
            <p>
              Venha nos visitar! Estamos localizados na Av. Dom Hélder Câmara, 5200 - Cachambi, Rio de Janeiro CEP 20771-004 - Sala 925.
            </p>
            <p>⏰ Horário de Funcionamento: Segunda a Sexta: 9h às 21h | Sábado: 8h às 13h ⏰</p>
          </div>
        </div>
      </div>
    </section>
  );
}
