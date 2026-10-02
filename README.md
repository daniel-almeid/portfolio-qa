# Portfólio de QA: Daniel Almeida
Next.js 15 (App Router) + React 19 + TypeScript, exportado como site estático.

## Rodar no VS Code
Requer Node.js 20+. Abra esta pasta (*File → Open Folder*) e, no terminal (*Terminal → New Terminal*):
```bash
npm install
npm run dev      # http://localhost:3000
```
Outros comandos: `npm run build` (gera `out/`) e `npm run lint` (checa os tipos).

## Sobre
- `data/content.ts`: todos os textos, projetos, trajetória, skills e certificações.
- `app/globals.css`: cores (variáveis no topo, tema claro e escuro) e estilos.
- `components/`: terminal animado, filtro de projetos, botão de tema.
- `app/page.tsx`: ordem das seções.
