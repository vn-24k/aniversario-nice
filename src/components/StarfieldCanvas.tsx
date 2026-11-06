import React, { useEffect, useRef } from 'react';

interface Star {
  dirX: number;
  dirY: number;
  offset: number;
  speed: number;
  layer: number;
  color: [number, number, number];
}

const SETTINGS = {
  starCount: 450,
  palette: ["#C084FC", "#E056FD", "#FA709A", "#FEE140", "#A855F7", "#38BDF8"],
  paletteWeights: [0.35, 0.25, 0.15, 0.1, 0.1, 0.05],
  holeRadius: 30,
  reachScale: 1.2,
  minStreakLength: 8,
  maxStreakLength: 160,
  minStreakWidth: 1.2,
  maxStreakWidth: 2.8,
  layers: 4,
};

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
  ];
}

function pickWeightedColor(): [number, number, number] {
  let roll = Math.random();
  for (let i = 0; i < SETTINGS.palette.length; i++) {
    roll -= SETTINGS.paletteWeights[i];
    if (roll <= 0) return hexToRgb(SETTINGS.palette[i]);
  }
  return hexToRgb(SETTINGS.palette[0]);
}

export function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let maxDistance = 0;
    let stars: Star[] = [];
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      centerX = width / 2;
      centerY = height * 0.45;
      maxDistance = Math.hypot(width, height) * 0.6;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = Math.abs(currentScrollY - lastScrollY);
      scrollVelocity = Math.min(diff * 0.08, 3.5);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleResize();

    // Create stars
    stars = [];
    for (let i = 0; i < SETTINGS.starCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      stars.push({
        dirX: Math.cos(angle),
        dirY: Math.sin(angle),
        offset: Math.random(),
        speed: 0.0008 + Math.random() * 0.002,
        layer: Math.floor(Math.random() * SETTINGS.layers),
        color: pickWeightedColor(),
      });
    }

    const render = () => {
      scrollVelocity *= 0.94; // dampening
      const currentSpeedMultiplier = 1 + scrollVelocity * 2.5;

      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.offset += star.speed * currentSpeedMultiplier;
        if (star.offset > 1) {
          star.offset -= 1;
        }

        const distance = SETTINGS.holeRadius + Math.pow(star.offset, 1.8) * (maxDistance - SETTINGS.holeRadius);
        const px = centerX + star.dirX * distance;
        const py = centerY + star.dirY * distance;

        const streakLen = SETTINGS.minStreakLength + Math.pow(star.offset, 2.2) * (SETTINGS.maxStreakLength - SETTINGS.minStreakLength) * (0.6 + scrollVelocity * 0.6);
        const tailX = px - star.dirX * streakLen;
        const tailY = py - star.dirY * streakLen;

        const alpha = Math.min(1, Math.sin(star.offset * Math.PI) * 1.3);
        const [r, g, b] = star.color;

        const grad = ctx.createLinearGradient(tailX, tailY, px, py);
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
        grad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${alpha})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = SETTINGS.minStreakWidth + (star.layer / SETTINGS.layers) * (SETTINGS.maxStreakWidth - SETTINGS.minStreakWidth);
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(px, py);
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70 w-full h-full"
    />
  );
}
