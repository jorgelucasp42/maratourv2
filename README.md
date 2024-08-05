# MaraTour

MaraTour é uma plataforma online desenvolvida para explorar destinos populares do Maranhão, proporcionando uma experiência imersiva e informativa para os usuários. A plataforma foi construída utilizando diversas tecnologias de programação para garantir desempenho, escalabilidade e segurança.

## Tecnologias Utilizadas

- **Mongoose**: Biblioteca ODM (Object Data Modeling) para MongoDB e Node.js. Utilizada para modelar e gerenciar os dados.
- **Nodemon**: Ferramenta que ajuda no desenvolvimento de aplicações Node.js, reiniciando automaticamente o servidor sempre que mudanças no código são detectadas.
- **Express**: Framework web para Node.js, utilizado para construir a API que alimenta a plataforma MaraTour.
- **MongoDB Atlas**: Serviço de banco de dados em nuvem que permite configurar, executar e escalar o MongoDB na nuvem.
- **dotenv**: Módulo que carrega variáveis de ambiente de um arquivo `.env` para `process.env`, utilizado para manter as configurações sensíveis fora do código fonte.

## Funcionalidades

### Busca de Destinos e Atrativos

A plataforma oferece uma caixa de busca que permite aos usuários pesquisar por destinos ou atrativos turísticos registrados no banco de dados. A busca é facilitada pelo motor de busca embutido no MongoDB, que utiliza a técnica de embedding para relacionar cidades e seus atrativos diretamente nos documentos do MongoDB.

### Destinos (Cidades) Registrados

Até o momento, as seguintes cidades estão registradas na plataforma:

- **Barreirinhas**
- **São Luís**
- **Carolina**
- **Alcântara**
- **São José de Ribamar**

### Atrativos (Pontos Turísticos) Registrados

Os seguintes pontos turísticos estão registrados e podem ser encontrados utilizando a caixa de busca:

- **Praça Gonçalves Dias**
- **Palácio dos Leões**
- **Teatro Arthur Azevedo**
- **Chapada das Mesas**

## Estrutura de Dados

### Embedding no MongoDB

Para otimizar as buscas e relacionar facilmente destinos e seus atrativos, utilizamos a técnica de embedding no MongoDB. Com essa técnica, os dados dos atrativos turísticos são embutidos diretamente nos documentos das cidades, permitindo buscas rápidas e eficientes.

### Exemplo de Documento de Cidade com Atrativos Embutidos

```json
{
  "nome": "São Luís",
  "descricao": "Patrimônio Histórico",
  "imagem": "images/sao-luis.png",
  "atrativos": [
    {
      "nome": "Praça Gonçalves Dias",
      "descricao": "Um belo ponto turístico...",
      "imagem": "images/praca-goncalves-dias.png"
    },
    {
      "nome": "Palácio dos Leões",
      "descricao": "Residência oficial do governador...",
      "imagem": "images/palacio-dos-leoes.png"
    }
  ]
}
## API Endpoints

A API possui os seguintes endpoints para busca e gerenciamento de destinos e atrativos:

- **GET /destinos/:slug**: Retorna os detalhes de um destino específico usando o slug.
- **GET /atrativos/:slug**: Retorna os detalhes de um atrativo turístico específico usando o slug.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por Jorge Silva e Equipe Trilhas - MA.

