import ThemeToggle from '@/components/ThemeToggle';
import TerminalDemo from '@/components/TerminalDemo';
import ProjetosSection from '@/components/ProjetosSection';
import CopyEmail from '@/components/CopyEmail';
import RevealObserver from '@/components/RevealObserver';
import { perfil, stats, trajetoria, skills, certificacoes } from '@/data/content';

const externo = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Home() {
  return (
    <>
      <div className="nav"><div className="w">
        <b className="mono">daniel<i>.</i>qa</b>
        <a href="#camadas">Atuação</a><a href="#projetos">Projetos</a><a href="#trilha">Trajetória</a>
        <a href="#stack">Stack</a><a href="#cert">Certificações</a><a href="#contato">Contato</a>
        <ThemeToggle />
      </div></div>

      <header className="hero">
        <div className="w hgrid">
          <div>
            <span className="tag">QA · Automação · Qualidade de produto</span>
            <h1>Eu encontro o <em>bug</em> antes do seu usuário.</h1>
            <p className="lead">Daniel Almeida, Analista de Qualidade de Software. Automatizo fluxos críticos com Playwright e Cypress, meço performance com k6 e valido o que a automação não enxerga com testes exploratórios.</p>
            <div className="btns">
              <a className="b main" href="#projetos">Ver projetos</a>
              <a className="b" href={perfil.linkedin} {...externo}>LinkedIn</a>
              <a className="b" href={perfil.github} {...externo}>GitHub</a>
            </div>
          </div>
          <TerminalDemo />
        </div>
        <div className="w">
          <div className="stats">{stats.map((s) => <div key={s.rotulo}><b>{s.valor}</b><span>{s.rotulo}</span></div>)}</div>
        </div>
      </header>

      <ProjetosSection />

      <section id="trilha"><div className="w">
        <h2 className="rv"><small>// trajetória</small>Pipeline de carreira</h2>
        <p className="sub rv">De automação de processos a qualidade de software.</p>
        <ol className="pipe">
          {trajetoria.map((t) => (
            <li key={t.titulo} className={`rv${t.atual ? ' run' : ''}`}>
              <small>{t.periodo}</small><h3>{t.titulo}</h3><p>{t.texto}</p>
            </li>
          ))}
        </ol>
      </div></section>

      <section id="stack"><div className="w">
        <h2 className="rv"><small>// stack</small>Ferramentas e formação</h2>
        <p className="sub rv">Tecnólogo em Análise e Desenvolvimento de Sistemas (Unigranrio, 2024), com formações em QA e React Native.</p>
        <div className="skills rv">{skills.map((s) => <span key={s.nome} className={'destaque' in s && s.destaque ? 'hl' : undefined}>{s.nome}</span>)}</div>
      </div></section>

      <section id="cert"><div className="w">
        <h2 className="rv"><small>// certificações</small>Formação contínua</h2>
        <p className="sub rv">Cursos e formações concluídos em QA, desenvolvimento web e mobile e análise de dados.</p>
        <ul className="certs">
          {certificacoes.map((c, i) => (
            <li key={c.nome} className={`cert rv${i === 0 ? ' feat' : ''}`}>
              <span className="ck">✓</span><div><small>{c.area}</small><h3>{c.nome}</h3></div>
            </li>
          ))}
        </ul>
      </div></section>

      <section id="contato" className="cta"><div className="w rv">
        <h2>Vamos garantir a qualidade do seu produto?</h2>
        <p className="sub">Aberto a conversas sobre vagas de QA e automação de testes.</p>
        <div className="btns">
          <a className="b main" href={`mailto:${perfil.email}`}>Enviar e-mail</a>
          <CopyEmail />
          <a className="b" href={perfil.linkedin} {...externo}>LinkedIn</a>
        </div>
      </div></section>

      <footer>{perfil.nome} · QA e Automação de Testes · {perfil.local}</footer>
      <RevealObserver />
    </>
  );
}
