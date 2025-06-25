"use client";

import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { type Container, type Engine, type ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; 

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
      await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {}, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#a855f7",
        },
        links: {
          color: "#a855f7",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}
