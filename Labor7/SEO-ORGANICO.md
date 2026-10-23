# SEO orgânico — Labor7

## Escopo e diagnóstico

O projeto é uma SPA estática em português, servida a partir de `index.html`. Há uma única URL pública conhecida; as seções de serviços, portfólio e contato são âncoras da página, não páginas separadas. O conteúdo confirma atendimento a dentistas em São Paulo e região, coleta e entrega, fluxo CAD/CAM, modelagem 3D, acabamento artesanal e as categorias de prótese descritas no site.

Antes das alterações, a página não tinha meta description, diretiva robots, Open Graph ou dados estruturados. O H1 era apenas “Próteses dentárias”. O HTML já tinha `lang="pt-BR"`, viewport, conteúdo de serviços, links de contato, alt descritivo no portfólio e imagens WebP. Não há endereço, e-mail, horário, domínio oficial, sitemap, integração do Search Console ou ID de GA4 no projeto.

## Estratégia de palavras-chave

Não foram usados volumes, dificuldade ou posições estimados por ferramentas. O mapeamento é qualitativo e prioriza a intenção comercial do público real: dentistas procurando um laboratório parceiro.

| Seção | Termo principal | Variações e intenção |
| --- | --- | --- |
| Página inicial | laboratório de prótese dentária para dentistas em São Paulo | laboratório de prótese odontológica; contratação/parceria local |
| Serviços | prótese dentária para dentistas | prótese total; parcial removível; flexível; armação PPR; coroas e pontes metalocerâmicas; zircônia; E.max/dissilicato de lítio; próteses sobre implantes e protocolo |
| Fluxo digital | laboratório de prótese CAD/CAM | modelagem 3D; fluxo digital; intenção comercial e técnica de profissionais |
| Área atendida | laboratório de prótese dentária em São Paulo | coleta e entrega em São Paulo e região, conforme o texto atual do site |

Os serviços aparecem em seções da mesma página; não foram criadas páginas rasas para cada variação. O foco é B2B, não buscas de pacientes por tratamento clínico.

## Pesquisa qualitativa de concorrentes

Consulta pública em 23/10/2026, sem estimativas de tráfego ou posição. As páginas de [LCA Prótese Odontológica](https://laboratoriodeprotese.com.br/), [Lab Stylo](https://labstylo.com.br/) e [PROLAB](https://www.prolabdigitalcad.com/) organizam a comunicação em torno do público profissional, categorias de serviços, fluxo digital/tecnologias, portfólio e contato. Isso reforça a utilidade de manter explícitos no Labor7 o atendimento a dentistas, o catálogo real de serviços, CAD/CAM, trabalhos visuais e WhatsApp. Não foram importados diferenciais, equipamentos, prazos, certificações ou números desses concorrentes.

## Implementado

- Título e meta description únicos para a página inicial, com atividade, público e cidade confirmados.
- Diretiva `index,follow` e `max-image-preview:large`; `robots.txt` permite rastreamento da página e dos recursos públicos e exclui `/tools/`, que contém modelos-fonte e o script de incorporação, sem uso pela página publicada.
- Open Graph básico (`type`, `locale`, nome, título e descrição). Imagem e URL absolutas de compartilhamento aguardam o domínio oficial.
- Favicon apontando para o logo existente, `color-scheme` e preconnect de fontes.
- H1 atualizado para “Laboratório de prótese dentária”; a cópia visível mantém os serviços, o público profissional, CAD/CAM e a área confirmada.
- `main`, rótulos de seção e atalho de teclado para pular a navegação.
- Dimensões intrínsecas nas imagens, alt descritivo existente preservado e carregamento preguiçoso assíncrono de todas as imagens do mosaico. As imagens já estão em WebP; o poster do vídeo permanece JPEG. Não há versões de tamanhos diferentes para montar `srcset`.
- JSON-LD `Organization` com o nome, perfil oficial do Instagram e os dois contatos WhatsApp já publicados no site. Não usei `LocalBusiness` porque endereço e tipo de atendimento presencial não estão confirmados.

## Pendências para o responsável

1. Fornecer o domínio público oficial e a versão preferida (`https`, com ou sem `www`). Com isso, adicionar `rel="canonical"`, `og:url`, URL absoluta do logo/imagem social e `sitemap.xml`. O sitemap não foi criado porque o Google pede URLs absolutas e o domínio não consta no projeto ([documentação de sitemap do Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)).
2. Confirmar endereço, e-mail, horário de atendimento, razão social e se a coleta/entrega envolve contato presencial com clientes. Só então avaliar dados `LocalBusiness` e elegibilidade de Perfil da Empresa. O Google exige contato presencial com clientes durante o horário declarado para elegibilidade do perfil ([regras de elegibilidade](https://support.google.com/business/answer/13763036?hl=pt-BR)).
3. No Google Search Console, adicionar e verificar a propriedade do domínio; enviar `https://DOMINIO-OFICIAL/sitemap.xml` depois de publicado; usar **Inspeção de URL** para testar a página ao vivo e solicitar indexação quando apropriado. No relatório **Desempenho > Resultados da pesquisa**, acompanhar consultas, páginas, cliques, impressões, CTR, posição média, país e dispositivo. Na área **Indexação**, revisar páginas indexadas e problemas de rastreamento. Isso depende de acesso do proprietário; não foi simulado.
4. Se quiser GA4, fornecer um ID real e aprovar a instalação. Nenhum identificador ou rastreador foi inventado.

## Próximas prioridades

1. Publicar em domínio oficial com HTTPS e redirecionamento consistente para uma única versão do host.
2. Adicionar canonical, sitemap e imagem social absoluta; depois verificar no Search Console e solicitar rastreamento da URL publicada.
3. Confirmar os dados operacionais e avaliar Perfil da Empresa apenas se o atendimento presencial atender às regras do Google. Solicitar avaliações genuínas, sem incentivos ou depoimentos fabricados.
4. Medir LCP, INP e CLS em produção e revisar dados de campo quando disponíveis. Não há medição de Core Web Vitals neste projeto; desempenho local não representa as condições de visitantes reais.
5. Considerar páginas próprias para envio de casos ou serviços somente quando houver instruções, detalhes técnicos e conteúdo original suficientes para ajudar dentistas.

## Validação e limites

- A sintaxe do JSON-LD foi conferida localmente como JSON; não foi submetido ao Rich Results Test porque a página ainda não tem URL pública.
- Os 29 arquivos em `assets/` foram conferidos contra as referências locais do HTML. O Chrome abriu a página em 1440×900 e 390×844: sem erros de JavaScript, links internos quebrados ou overflow horizontal; o mosaico criou 27 cartões. O teste é local, não mede a rede de produção.
- `index.html` tem aproximadamente 5,44 MB devido aos modelos Draco embutidos em Base64. Não há dados de campo nem medição Lighthouse comparável para LCP, INP ou CLS; por isso não afirmo melhora de velocidade.
- `/tools/` foi excluída do rastreamento porque guarda arquivos de autoria, mas `robots.txt` não impede acesso direto. Se a hospedagem publicar a pasta inteira e esses arquivos não devam ficar públicos, será necessário excluí-la também da publicação.
- Domínio, HTTPS, status HTTP, redirecionamentos, rastreamento público, Search Console, Perfil da Empresa e Core Web Vitals de campo não podem ser confirmados neste ambiente.
- Fontes do Google: [títulos de resultados](https://developers.google.com/search/docs/appearance/title-link), [snippets e meta descriptions](https://developers.google.com/search/docs/appearance/snippet), [dados estruturados Organization](https://developers.google.com/search/docs/appearance/structured-data/organization), [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro).
