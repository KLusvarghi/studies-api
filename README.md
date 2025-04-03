# 📚 API REST com Express e MongoDB

Uma API REST completa para gerenciamento de livros e autores, construída com Node.js, Express e MongoDB.

## 📋 Sobre o Projeto

Este projeto implementa uma API RESTful que permite gerenciar um catálogo de livros e autores. A API possui endpoints para criar, listar, atualizar e excluir (CRUD) livros e autores, além de funcionalidades de busca e filtragem.

### 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript do lado do servidor
- **Express** - Framework web rápido e minimalista para Node.js
- **MongoDB** - Banco de dados NoSQL orientado a documentos
- **Mongoose** - Biblioteca de modelagem de dados para MongoDB
- **Dotenv** - Carregamento de variáveis de ambiente
- **Nodemon** - Utilitário que monitora alterações e reinicia o servidor automaticamente

## 🗂️ Estrutura do Projeto

```
.
├── src/
│   ├── config/        # Configurações do projeto (conexão com banco de dados)
│   ├── controllers/   # Controladores para manipulação de rotas
│   ├── models/        # Modelos de dados (schemas do Mongoose)
│   ├── routes/        # Definição de rotas da API
│   ├── func/          # Funções auxiliares
│   └── app.js         # Configuração do Express
├── server.js          # Ponto de entrada da aplicação
├── package.json       # Dependências e scripts
└── README.md          # Documentação do projeto
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14.x ou superior)
- MongoDB (local ou Atlas)
- NPM ou Yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```
   PORT=3002
   DB_CONNECTION_STRING=sua_string_de_conexao_mongodb
   ```
   
   > 💡 **Dica**: Para obter sua string de conexão MongoDB Atlas, acesse: https://account.mongodb.com/account/login

4. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

## 📌 Endpoints da API

### Livros
- `GET /books` - Lista todos os livros
- `GET /books/:id` - Retorna um livro específico
- `GET /books/search?publisher=nome` - Filtra livros por editora
- `POST /books` - Cadastra um novo livro
- `PUT /books/:id` - Atualiza um livro
- `DELETE /books/:id` - Remove um livro

### Autores
- `GET /author` - Lista todos os autores
- `GET /author/:id` - Retorna um autor específico
- `POST /author` - Cadastra um novo autor
- `PUT /author/:id` - Atualiza um autor
- `DELETE /author/:id` - Remove um autor

## 💾 Modelos de Dados

### Autor
```javascript
{
  name: String,
  nationality: String
}
```

### Livro
```javascript
{
  title: String,
  publisher: String,
  price: Number,
  pages: Number,
  author: ObjectId (referência ao autor)
}
```

## 📊 Relacionamentos no MongoDB

O projeto demonstra duas abordagens para relacionar livros e autores:

### 1. Referência por ID (Normalização)

```javascript
author: { type: mongoose.Schema.Types.ObjectId, ref: 'author', required: true }
```

- Armazena apenas o ID do autor no documento do livro
- Dados normalizados em coleções separadas
- Requer operação `populate()` para obter dados completos
- Ideal quando dados mudam frequentemente

### 2. Subdocumento (Desnormalização)

```javascript
author: authorSchema
```

- Incorpora o documento do autor completo dentro do livro
- Melhor performance para leitura
- Ideal para relacionamentos um-para-um
- Melhor quando os dados raramente mudam

## 🔍 Recursos Adicionais

Para informações mais detalhadas sobre o projeto, consulte:
- [Notion - Conteúdo Detalhado](https://www.notion.so/Node-js-criando-uma-API-Rest-com-Express-e-MongoDB-1c4b51ea26ec807b970bec2bec950033)
- [Repositório Original](https://github.com/alura-cursos/3266-express-mongo)

## 📄 Licença

Este projeto está sob a licença ISC.
