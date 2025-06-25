'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const SmoothScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Animate elements on enter
    gsap.utils.toArray('[data-animate]').forEach(element => {
        gsap.fromTo(element, 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element as Element,
                    start: 'top 90%',
                    end: 'top 70%',
                    scrub: 1,
                }
            }
        );
    });

    return () => {
      lenis.destroy()
      ScrollTrigger.killAll()
    }
  }, [])

  return null
}
