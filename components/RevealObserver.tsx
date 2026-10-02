'use client';
import { useEffect } from 'react';

// Adiciona a classe "in" aos elementos ".rv" quando entram na tela.
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entradas) => entradas.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.rv').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
