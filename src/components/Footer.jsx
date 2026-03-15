import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white font-lora" style={{ backgroundColor: "#d97a7a" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-0 py-12 flex flex-col md:flex-row justify-between gap-8">

        {/* Contato */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Ana Célia Nascimento</h3>
          <p className="mb-2">Torre NorteShopping, 901 - Rio de Janeiro</p>
          <p className="mb-2">
            Email: <a href="mailto:contatositeanacelia@gmail.com" className="underline hover:text-[#f4c6c6]">contatositeanacelia@gmail.com</a>
          </p>
          <p className="mb-2">
            WhatsApp: <a href="https://wa.me/5521968056868" className="underline hover:text-[#f4c6c6]">+55 21 96805-6868</a>
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Redes Sociais</h3>
          <div className="flex gap-6 text-3xl">
            <a
              href="https://www.instagram.com/anacelianascimento.psi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4c6c6] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/5521968056868"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4c6c6] transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Sobre Clínica */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Clínica</h3>
          <p>Oferecendo acompanhamento psicológico com acolhimento, ética e profissionalismo.</p>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t mt-6 py-4 text-center text-sm md:text-base" style={{ borderColor: "#c87a7a" }}>
        &copy; {new Date().getFullYear()} Ana Célia Nascimento. Todos os direitos reservados.
      </div>
    </footer>
  )
}
