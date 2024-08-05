# MaraTour

MaraTour é uma plataforma web desenvolvida para explorar os destinos e atrações turísticas do Maranhão. A plataforma oferece informações detalhadas sobre diversos pontos turísticos, permitindo que os usuários busquem e descubram novos locais para visitar.

## Tecnologias Utilizadas

### Frontend
- **HTML5:** Estrutura básica das páginas.
- **CSS3:** Estilização das páginas, utilizando Flexbox e Media Queries para responsividade.
- **JavaScript (ES6):** Interatividade e manipulação do DOM.
- **Font Awesome:** Ícones para a interface (menu hambúrguer, lupa de busca).
- **Google Fonts:** Fonte Roboto para estilização.

### Backend
- **Node.js:** Ambiente de execução do JavaScript no servidor.
- **Express.js:** Framework para construção de aplicações web.
- **MongoDB Atlas:** Banco de dados NoSQL para armazenamento de dados.
- **Mongoose:** ODM para MongoDB, facilitando a interação com o banco de dados.

### Hospedagem
- **Vercel:** Plataforma de hospedagem utilizada para implantar a aplicação.
- **Imgur:** Plataforma repositório de imagens para busca através dos links registrados nos itens das coleções do BD. 

## Funcionalidades

### Funcionalidades Principais
1. **Página Principal:** Apresenta um carrossel com imagens de destaque e uma grade de destinos e atrações.
2. **Barra de Busca:** Permite aos usuários buscar destinos ou atrações por nome.
3. **Menu Hambúrguer:** Menu de navegação responsivo para acessar diferentes seções do site.
4. **Resultados de Busca:** Exibe uma lista de destinos e atrações correspondentes à pesquisa realizada.
5. **Detalhes do Destino/Atrativo:** Página detalhada para cada destino ou atração, incluindo descrição, dicas e localização no mapa.

### Funcionalidade de Busca
- A busca é realizada através da barra de pesquisa localizada no topo da página. O sistema converte a string inserida pelo usuário em um slug e realiza a busca no banco de dados para encontrar destinos ou atrações correspondentes.
- A pesquisa é feita de forma ampla, considerando partes do nome inserido, para facilitar a localização de resultados relevantes.

## Destinos e Atrações Registrados

### Destinos (Cidades)
- **São Luís:** A capital do Maranhão, famosa por seu centro histórico.
- **Barreirinhas:** Porta de entrada para os Lençóis Maranhenses.
- **Alcântara:** Cidade histórica conhecida por suas ruínas coloniais.
- **Carolina:** Localizada na Chapada das Mesas, conhecida por suas cachoeiras.
- **São José de Ribamar:** Conhecida por suas praias e o Santuário de São José de Ribamar.

### Atrações (Pontos Turísticos)
- **Praça Gonçalves Dias (São Luís):** Uma praça emblemática com vista panorâmica.
- **Palácio dos Leões (São Luís):** Sede do governo estadual e símbolo histórico.
- **Teatro Arthur Azevedo (São Luís):** Um dos teatros mais antigos do Brasil.
- **Lençóis Maranhenses:** Destino natural com dunas de areia branca e lagoas de água doce.
- **Cachoeira do Itapecuru:** Cachoeira localizada na região de Carolina.
- **Cachoeira da Pedra Caída:** Cachoeira na Chapada das Mesas, ideal para trilhas.
- **Igreja de São José de Ribamar:** Igreja histórica e ponto de peregrinação.

### Página de resultados
- A página de resultados é implementada para exibir informações detalhadas de destinos e atrações específicas. Utiliza as rotas de destino e atrativo para buscar as informações registradas das cidades e pontos turísticos e formar a página.
- Dependendo do tipo de resultado (destino ou atração), a página correspondente é carregada com todos os dados necessários, como nome, descrição, dicas, imagem e localização no mapa.
Copiar código
## Endpoints da API

### Endpoints de Destinos
- **GET /api/destinos/:slug:** Rota para buscar um destino pelo slug.
- **GET /api/destinos/:id:** Rota para buscar um destino específico pelo ID.
- **GET /api/destinos:** Rota para listar todos os destinos.
- **GET /api/destinos/:destinoId/atrativos:** Rota para listar atrativos de um destino específico.

### Endpoints de Atrações
- **GET /api/atrativos/:slug:** Rota para buscar uma atração pelo slug.
- **GET /api/atrativos/:id:** Rota para buscar uma atração específica pelo ID.
- **GET /api/atrativos:** Rota para listar todas as atrações.

### Endpoint de Busca
- **GET /api/search?query=texto_de_busca:** Realiza a busca de destinos e atrações com base no texto de busca fornecido. Retorna uma lista de resultados correspondentes. A busca é realizada considerando tanto o nome quanto o slug dos destinos e atrações, permitindo uma busca ampla e flexível.

---