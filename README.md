# NovaRemote · site

Site de apresentação do **NovaRemote** (controle do PC pelo iPhone e pelo Apple Watch), com o download do servidor
para Windows.

- **Next.js 16** (App Router, exportação estática) + **React 19** + **Tailwind CSS 4**
- Mesma paleta dos apps (fundo `#05070d`, ciano `#22d3ee`, violeta `#a78bfa`, magenta `#e879f9`)
- As telas do iPhone e do Apple Watch são desenhadas em HTML/CSS (`src/components/mockups`), não são screenshots

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera o site estático em out/
npm start        # serve out/ localmente
```

## Download do instalador

O botão aponta para a última *release* deste repositório:
`https://github.com/bruno-sartori/novaremote-site/releases/latest/download/NovaRemoteServerSetup.msi`.

Para publicar uma versão nova do servidor:

1. No `novaremote-server`: `dotnet build installer -c Release` (ou o workflow *Installer*).
2. Aqui: `gh release create v0.2.0 ../novaremote-server/installer/bin/Release/pt-BR/NovaRemoteServerSetup.msi --title "NovaRemote Server 0.2.0"`
3. Atualize `SERVER.version` e `SERVER.size` em `src/config/site.ts`.

Para apontar para outro lugar, defina `NEXT_PUBLIC_DOWNLOAD_URL` (por exemplo, nas variáveis do projeto na Vercel).

## Deploy

Na Vercel (framework detectado: Next.js; sem variáveis obrigatórias). `NEXT_PUBLIC_SITE_URL` define a URL usada nas
metatags; na Vercel ela vem sozinha.

## Estrutura

```
src/app/            layout, página, ícones
src/components/     seções (Hero, Recursos, Telas, Como funciona, Segurança, Download, FAQ)
src/components/mockups/   iPhone e Apple Watch com as telas do app
src/config/site.ts  textos gerais, versão e link do instalador
```
