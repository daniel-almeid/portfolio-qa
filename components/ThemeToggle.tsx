'use client';
import { useEffect } from 'react';

export default function ThemeToggle() {
  useEffect(() => {
    try {
      const salvo = localStorage.getItem('tema');
      if (salvo) document.documentElement.setAttribute('data-theme', salvo);
    } catch {}
  }, []);

  function alternar() {
    const root = document.documentElement;
    const atual = root.getAttribute('data-theme');
    const escuro = atual ? atual === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    const novo = escuro ? 'light' : 'dark';
    root.setAttribute('data-theme', novo);
    try { localStorage.setItem('tema', novo); } catch {}
  }

  return <button className="tbtn" type="button" onClick={alternar} aria-label="Alternar tema claro ou escuro">Tema</button>;
}
