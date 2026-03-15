import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Contato from './components/Contato'
import Local from './components/local'
import Footer from './components/Footer'
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em ms
      easing: 'ease-out-cubic', // tipo de easing
      once: true, // anima uma vez, não repetidamente
    });
  }, []);
  return (
    <div className="font-sans text-dark">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Local />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}

export default App