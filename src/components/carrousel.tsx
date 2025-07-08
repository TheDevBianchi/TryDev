"use client";

import { useEffect, useRef } from "react";

// Asociación de logos con Instagram
const clientesRifas = [
  {
    nombre: "Rifas Camiari",
    logo: "/images/logo_clientes/camiari.webp",
    instagram: "https://www.instagram.com/rifascamiari",
  },
  {
    nombre: "Juegacon George",
    logo: "/images/logo_clientes/george.png",
    instagram: "https://www.instagram.com/juegacongeorge_/",
  },
  {
    nombre: "DimeloNell",
    logo: "/images/logo_clientes/nelson.webp",
    instagram: "https://instagram.com/dimelonell",
  },
  {
    nombre: "Juega Y Gana con 777",
    logo: "/images/logo_clientes/777.png",
    instagram: "https://instagram.com/777rifas",
  },
  {
    nombre: "Rifas con Jirvin",
    logo: "/images/logo_clientes/jirvin.webp",
    instagram: "https://instagram.com/jirvinrifas",
  },
];

function CarruselClientes() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicamos los logos para simular el loop infinito
  const logos = [...clientesRifas, ...clientesRifas];

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;
    let animationFrame: number;
    let left = 0;
    const speed = 0.15; // Más lento y fluido

    // Calculamos el ancho real de la mitad del track para el loop perfecto
    const singleLoopWidth = track.scrollWidth / 2;

    function animate() {
      left -= speed;
      if (Math.abs(left) >= singleLoopWidth) {
        left = 0;
      }
      if (track) {
        track.style.transform = `translateX(${left}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full overflow-x-hidden py-8 bg-secondary/20 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm mt-20">
      <h3 className="text-xl font-semibold mb-6 text-muted-foreground text-center">
        Clientes que confían en la plataforma
      </h3>
      <div ref={containerRef} className="relative w-full flex items-center overflow-x-hidden select-none scrollbar-none">
        <div
          ref={trackRef}
          className="flex gap-10 items-center"
          style={{ willChange: "transform" }}
        >
          {logos.map((cliente, idx) => (
            <a
              key={cliente.nombre + idx}
              href={cliente.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${cliente.nombre}`}
              className="flex-shrink-0"
            >
              <img
                src={cliente.logo}
                alt={`Logo de ${cliente.nombre}`}
                className="h-36 w-auto object-contain mx-4 transition-transform hover:scale-110 duration-300"
                draggable={false}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarruselClientes;
