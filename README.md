# Fourlink Empresas — Site oficial

Site institucional e portal de telefonia corporativa da **Fourlink Empresas**
(fourlinkempresas.com), atendendo empresas no **Rio de Janeiro, Minas Gerais e Espírito Santo**.

Feito em **[Astro](https://astro.build)** (site estático, rápido e otimizado para SEO/GEO).
Publicação **automática** via **GitHub + Cloudflare Pages**.

---

## 🚀 Como funciona a publicação

Depois da configuração inicial (abaixo), **toda atualização vai para o ar sozinha**.
Você só precisa de:

    git add .
    git commit -m "Atualização"
    git push

O Cloudflare Pages detecta o push, roda o build e publica em poucos minutos.
**Nenhuma etapa manual além do git push.** Sem dist/ manual, sem upload.

---

## ⚙️ Configuração inicial (uma única vez)

### 1) Subir o projeto para o GitHub
    git remote add origin https://github.com/SEU-USUARIO/fourlink-empresas.git
    git branch -M main
    git push -u origin main

O repositório Git ja vem inicializado com o primeiro commit. So falta apontar
para o seu GitHub com o comando acima.

### 2) Conectar no Cloudflare Pages
1. Acesse Cloudflare -> Workers & Pages -> Create -> Pages -> Connect to Git.
2. Selecione o repositorio fourlink-empresas.
3. Configure o build:
   - Framework preset: Astro
   - Build command: npm run build
   - Build output directory: dist
   - Node version: 20 (ja fixada pelo arquivo .nvmrc)
4. Clique em Save and Deploy. O primeiro deploy acontece automaticamente.

### 3) Apontar o dominio fourlinkempresas.com
1. No projeto do Pages -> Custom domains -> Set up a custom domain.
2. Digite fourlinkempresas.com (e www.fourlinkempresas.com, se quiser).
3. Siga as instrucoes de DNS que o Cloudflare exibir.

Pronto. A partir dai, todo git push republica o site.

---

## 💻 Rodar localmente (opcional)

| Acao | Comando | Atalho (Windows) |
|------|---------|------------------|
| Instalar dependencias | npm install | install.bat |
| Rodar em desenvolvimento | npm run dev | start.bat |
| Gerar build de producao | npm run build | - |
| Pre-visualizar o build | npm run preview | - |

O site de desenvolvimento abre em http://localhost:4321.

---

## 📁 Estrutura

    src/
      components/     Componentes (Header, Footer, Calculadora, CeoDestaque...)
      config/site.ts  Fonte unica de dados (NAP, servicos, planos, equipe, CEO...)
      content/        Conteudo em Markdown (servicos, cidades, segmentos, artigos, FAQ)
      layouts/        BaseLayout (SEO, schema, fontes)
      pages/          Paginas e rotas (inclui sitemap.xml.ts gerado nativamente)
      styles/         Estilos globais e tokens de design
    public/
      img/            Imagens otimizadas (.webp)
      robots.txt      Aponta para /sitemap.xml

O sitemap.xml e gerado automaticamente pelo endpoint src/pages/sitemap.xml.ts
(sem dependencia externa).

---

## ✅ Observacoes tecnicas
- Build de producao: npm run build -> gera dist/ sem erros.
- A pasta dist/ NAO vai para o Git (esta no .gitignore); o Cloudflare a gera no servidor.
- Node 18+ (recomendado 20, fixado em .nvmrc).
