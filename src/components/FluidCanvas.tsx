import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 st = gl_FragCoord.xy / uResolution;
    float aspect = uResolution.x / uResolution.y;
    st.x *= aspect;

    vec2 mouseNorm = uMouse;
    mouseNorm.x *= aspect;

    float dist = length(st - mouseNorm);
    
    // Soft radiating ethereal rings
    float ring = sin(dist * 28.0 - uTime * 2.5) * 0.5 + 0.5;
    float glow = exp(-dist * 4.5);
    
    // Cosmic magenta / violet / gold light palette
    vec3 color1 = vec3(0.88, 0.34, 0.99); // Magenta
    vec3 color2 = vec3(0.55, 0.25, 0.92); // Deep violet
    vec3 color3 = vec3(0.96, 0.82, 0.38); // Starlight gold

    vec3 mixedColor = mix(color2, color1, sin(uTime * 0.5 + dist * 5.0) * 0.5 + 0.5);
    mixedColor = mix(mixedColor, color3, ring * 0.3);

    float alpha = glow * (0.15 + ring * 0.08);

    gl_FragColor = vec4(mixedColor, alpha);
  }
`;

export function FluidCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const mouse = new THREE.Vector2(0.5, 0.5);
    const targetMouse = new THREE.Vector2(0.5, 0.5);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uMouse: { value: mouse },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uTime: { value: 0 },
      },
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const quad = new THREE.Mesh(geometry, material);
    scene.add(quad);

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX / window.innerWidth;
      targetMouse.y = 1.0 - (e.clientY / window.innerHeight);
    };

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp mouse
      mouse.x += (targetMouse.x - mouse.x) * 0.08;
      mouse.y += (targetMouse.y - mouse.y) * 0.08;

      material.uniforms.uMouse.value.copy(mouse);
      material.uniforms.uTime.value = elapsedTime;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
}
