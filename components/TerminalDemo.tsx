'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { execucao } from '@/data/content';

export default function TerminalDemo() {
  const [n, setN] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const rodar = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setN(0);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return setN(execucao.length);
    execucao.forEach((_, i) => timers.current.push(setTimeout(() => setN(i + 1), 500 + i * 520)));
  }, []);

  useEffect(() => {
    rodar();
    return () => timers.current.forEach(clearTimeout);
  }, [rodar]);

  return (
    <div className="term" role="img" aria-label="Terminal executando uma suíte de testes">
      <header><span></span><span></span><span></span><em>playwright</em></header>
      <div className="bar"><i style={{ width: `${(n / execucao.length) * 100}%` }} /></div>
      <div id="log">{execucao.slice(0, n).map((l) => <div key={l.texto} className={l.tipo}>{l.texto}</div>)}</div>
      <div className="cap"><span>exemplo ilustrativo</span><button type="button" onClick={rodar}>↻ rodar de novo</button></div>
    </div>
  );
}
