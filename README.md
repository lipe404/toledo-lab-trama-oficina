# Trama Oficina

Landing page conceitual de portfólio para o segmento de **Arquitetura**. Marca, serviços e dados são fictícios.

**Demonstração:** Galeria de projetos interativa. Não há envio de dados pessoais, sistema de cadastro ou pagamento.

## Rodar localmente

Requisitos: Node.js 22+ e npm.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000 para ver a landing page.

## Publicar

O projeto usa Next.js App Router, TypeScript e exportação estática. `npm run build` gera `out/`.
Para GitHub Pages, em **Settings → Pages**, selecione **GitHub Actions**, então execute o fluxo “Publicar demonstração no GitHub Pages”. O fluxo configura o caminho público do repositório automaticamente.
Para Vercel, importe o repositório como projeto Next.js sem definir `PAGES_BASE_PATH`.

## Funil conceitual e hipótese

A promessa é adaptar o espaço à rotina. Um estudo visual estabelece referência, a camada de luz traduz a intenção e o caderno gera perguntas conforme a prioridade escolhida, sem pedir dados pessoais.

Experimento proposto para sessões consentidas: apresentar o caderno logo após a galeria ou após a seção de método e observar qual sequência gera perguntas mais contextualizadas. A demo não coleta métricas.
