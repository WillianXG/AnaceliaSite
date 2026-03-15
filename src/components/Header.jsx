// Header.jsx
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll suave customizado (mais lento)
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 60; // ajusta pelo header
      window.scrollTo({
        top,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Sobre", id: "sobre" },
    { label: "Serviços", id: "servicos" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{ backgroundColor: "#d97a7a", color: "#1a1a1a" }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1
          className="text-2xl md:text-3xl font-bold font-lora cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
         Psique é Bem-Estar
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 font-medium">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleScroll(item.id)}
              className="px-3 py-2 rounded-lg hover:bg-[#c76666] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#1a1a1a] rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1a1a1a] rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1a1a1a] rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden w-full absolute top-full left-0 shadow-lg overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
        style={{ backgroundColor: "#d97a7a" }}
      >
        <ul className="flex flex-col items-center gap-4">
          {menuItems.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => handleScroll(item.id)}
                className="px-4 py-2 rounded-lg hover:bg-[#c76666] transition-colors w-full text-center"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
