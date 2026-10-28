# eyelid / Marca e design system

Abra `index.html` em um navegador para consultar a identidade e explorar os componentes. Baixe ou clone o repositório inteiro para preservar os arquivos relativos. O GitHub exibe o código HTML; a visualização interativa funciona ao abrir o arquivo localmente ou servi-lo por HTTP.

## Conteúdo

- `eyelid-apresentacao-da-marca.pdf`: apresentação em 10 páginas com conceito, variações e mockups.
- `index.html`, `showcase.css` e `showcase.js`: guia visual responsivo, com tema claro e escuro, exemplos de campos, validação, diálogo, filtros e tela de produto.
- `tokens.json` e `eyelid.css`: tokens e estilos de referência da identidade aprovada.
- `logos/`: versões vetoriais principais.
- `fonts/`: Inter e Quicksand, com licenças SIL OFL.
- `icons/`: ícones de apoio em SVG.

## Como aplicar

Use `eyelid.css` como fundação visual e mantenha a pasta `fonts` junto ao arquivo, ou ajuste os caminhos. O CSS e JavaScript do showcase implementam esta demonstração; não são uma biblioteca de componentes de produção.

A demonstração de tema escuro usa variáveis semânticas em `showcase.css`. Os tokens originais continuam preservados em `tokens.json`. Ao construir uma aplicação, defina os tokens semânticos do tema e valide contraste, navegação por teclado, estados assíncronos e tecnologias assistivas em seus fluxos reais.

Os formulários não enviam dados. Projetos e métricas são fictícios. A preferência de tema é salva apenas no navegador. A redução de movimento do sistema é respeitada.

## Regras essenciais

Preserve a logo aprovada, use textos claros sem travessões e mantenha mensagens de estado explícitas. A identidade permanece monocromática; cores funcionais indicam foco, sucesso, atenção e erro.

Os arquivos da marca pertencem à eyelid. A publicação não concede licença de uso da marca. As fontes seguem as respectivas licenças incluídas.
