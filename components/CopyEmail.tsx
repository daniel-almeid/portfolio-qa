'use client';
import { useState } from 'react';
import { perfil } from '@/data/content';

export default function CopyEmail() {
  const [texto, setTexto] = useState('Copiar e-mail');
  async function copiar() {
    try { await navigator.clipboard.writeText(perfil.email); setTexto('Copiado ✓'); }
    catch { setTexto(perfil.email); }
  }
  return <button className="b" type="button" onClick={copiar}>{texto}</button>;
}
