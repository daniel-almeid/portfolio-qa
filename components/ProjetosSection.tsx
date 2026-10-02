'use client';
import { useState } from 'react';
import { camadas, projetos, perfil, type Categoria } from '@/data/content';

type Filtro = Categoria | 'all';
const chips: { id: Filtro; rotulo: string }[] = [
  { id: 'all', rotulo: 'todos' }, { id: 'e2e', rotulo: 'e2e' }, { id: 'api', rotulo: 'api + perf' }, { id: 'manual', rotulo: 'processo' },
];

export default function ProjetosSection() {
  const [filtro, setFiltro] = useState<Filtro>('all');

  function escolher(id: Filtro, rolar = false) {
    setFiltro(id !== 'all' && filtro === id ? 'all' : id);
    if (rolar) document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <section id="camadas">
        <div className="w split">
          <div className="rv">
            <h2><small>// atuação</small>Do exploratório ao E2E</h2>
            <p className="sub">Cada camada responde a uma pergunta diferente. Clique em uma delas para filtrar os projetos correspondentes.</p>
            <p className="sub" style={{ margin: 0 }}>
              <strong style={{ color: 'var(--fg)' }}>Base:</strong> processo, casos e exploração.{' '}
              <strong style={{ color: 'var(--fg)' }}>Meio:</strong> API e performance.{' '}
              <strong style={{ color: 'var(--fg)' }}>Topo:</strong> fluxos de ponta a ponta, em desktop e mobile.
            </p>
          </div>
          <div className="pyr rv">
            {camadas.map((c) => (
              <button key={c.id} type="button" aria-pressed={filtro === c.id} onClick={() => escolher(c.id, true)}>
                <strong>{c.titulo}</strong><small>{c.apoio}</small>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos">
        <div className="w">
          <h2 className="rv"><small>// projetos</small>Suítes que eu rodaria no seu CI</h2>
          <p className="sub rv">Projetos públicos em ambientes de prática, cada um com README e instruções para rodar.</p>
          <div className="chips rv">
            {chips.map((c) => (
              <button key={c.id} className="chip" type="button" aria-pressed={filtro === c.id} onClick={() => escolher(c.id)}>{c.rotulo}</button>
            ))}
          </div>
          <div className="grid">
            {projetos.map((p) => (
              <article key={p.repo} className="card rv" hidden={filtro !== 'all' && p.categoria !== filtro}>
                <div className="ok">{p.status}</div>
                <h3>{p.titulo}</h3>
                <p>{p.descricao}</p>
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <details><summary>ver trecho</summary><pre>{p.snippet}</pre></details>
                <a className="gh" href={`${perfil.github}/${p.repo}`} target="_blank" rel="noopener noreferrer">Ver no GitHub →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
