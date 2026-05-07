'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// @ts-ignore
import CLOUDS from 'vanta/dist/vanta.clouds.min';

export default function LandingVanta() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current || vantaEffect) return;

    // Vanta specifically looks for THREE on the window object in many distributions
    (window as any).THREE = THREE;

    try {
      console.log("Initializing Vanta Clouds...");
      const effect = CLOUDS({
        el: ref.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x10215,
        cloudColor: 0xffffff,
        cloudShadowColor: 0x410b84,
        sunColor: 0x132260,
        sunGlareColor: 0x7932ff,
        sunlightColor: 0x3258ff,
        speed: 1.30
      });
      console.log("Vanta initialized successfully:", effect);
      setVantaEffect(effect);
    } catch (err) {
      console.error('Vanta initialization error:', err);
    }

    return () => {
      if (vantaEffect && vantaEffect.destroy) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return <div ref={ref} className="landing-vanta" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: -1, borderRadius: 'inherit' }} />;
}
