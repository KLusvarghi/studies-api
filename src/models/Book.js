import mongoose from "mongoose";
import { authorSchema } from './Author.js'

// criando schema
// o schema é o modelo que vai definir como vai ser a estrutura e as propriedades de um livro neste caso (nosso banco de dados)
const bookSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId, // essa é uma função do mongoose que vai gerar um id unico para cada livro
  },
  title: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'author', required: true },
  // author: authorSchema, // aqui estamos usando o schema que criamos para o autor
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // essa versionKey é para que o mongoose não crie um campo chamado __v, que é a versão do livro, que é uma propriedade que o mongoDB cria automaticamente para cada documento que é inserido no banco de dados.
}, { versionKey: false });

// o "model" é o modelo que vai ser usado para criar os livros no banco de dados
// o primeiro parametro é o nome do modelo (coleção de books"), e o segundo é o schema que criamos acima
const book = mongoose.model("books", bookSchema)

export default book
