# Importar business-hub do GitHub

## Objetivo
Trazer o código do repositório público `leandroluja-dev/business-hub` para este projeto Lovable e adaptá-lo para rodar no template atual (TanStack Start + React 19 + Tailwind v4 + Vite 7).

## Etapas

### 1. Clonar e analisar o repositório
- Clonar `https://github.com/leandroluja-dev/business-hub.git` em uma pasta temporária
- Inspecionar `package.json`, estrutura de pastas e configs para identificar:
  - Stack original (Next.js, Vite + React Router, CRA, etc.)
  - Dependências usadas
  - Sistema de roteamento
  - Integrações externas (Supabase, APIs, etc.)
  - Versão do Tailwind e tokens de design
  - Existência de banco de dados / schemas

### 2. Mapear estratégia de migração
Com base na análise, decidir caso a caso:
- **Componentes UI / páginas**: copiar para `src/components/` e `src/routes/`
- **Roteamento**: converter rotas (Next `app/`, `pages/` ou React Router) para o formato file-based do TanStack (`src/routes/index.tsx`, `src/routes/about.tsx`, etc.)
- **Estilos**: migrar tokens/variáveis para `src/styles.css` (Tailwind v4 com `@theme inline`)
- **Assets** (imagens, fontes): copiar para `src/assets/` ou `public/`
- **Lógica de servidor / API routes**: portar para `createServerFn` em `src/server/*.functions.ts`
- **Banco de dados**: se usar Supabase, migrar para Lovable Cloud (criar tabelas + RLS equivalentes)

### 3. Instalar dependências compatíveis
- Adicionar via `bun add` apenas pacotes que funcionam no runtime Worker/edge
- Substituir pacotes Node-only (que dependem de `child_process`, binários nativos, etc.) por alternativas compatíveis
- Pular dependências do Next.js (`next`, `next/image`, `next/link`) — substituir por equivalentes TanStack/React

### 4. Adaptar e testar
- Converter imports `next/link` → `@tanstack/react-router` `<Link>`
- Converter `next/image` → `<img>` padrão
- Converter `useRouter` do Next → `useNavigate` / `useRouter` do TanStack
- Substituir `getServerSideProps` / route handlers por `createServerFn` ou `src/routes/api/*`
- Garantir que `src/routes/__root.tsx`, `src/routes/index.tsx` e `src/router.tsx` continuem válidos
- Substituir o placeholder atual em `src/routes/index.tsx` pela home real

### 5. Reportar resultado
Ao final, listar:
- O que foi importado com sucesso
- O que precisou ser adaptado (com motivos)
- O que **não** pôde ser migrado automaticamente e precisa de decisão sua (ex.: integrações com serviços externos, secrets, banco de dados)

## Riscos e ressalvas
- **Stack incompatível**: se o `business-hub` for Next.js completo (com SSR pesado, middleware, server actions), a migração será parcial — alguns recursos precisarão ser reescritos
- **Banco de dados**: dados existentes em outro Supabase/Postgres não vêm junto; só o schema é replicável
- **Secrets / API keys**: variáveis de ambiente do projeto original precisam ser adicionadas manualmente nos secrets do Lovable Cloud
- **Repositório privado**: se o repo for privado, o clone vai falhar e você precisará torná-lo público temporariamente ou seguir a Opção 3 manual via clone local
