// importando nosso model, que é o nosso modelo de livro
import { author } from "../models/Author.js"

class AuthorController {

  // o "static" server para quando a genter quer usar metodos de uma classe sem antes ter que instanciar esta classe

  static async authorList(_, res) {
    try {
      // "find" nesse caso, é uma função do mongoose que vai buscar todos os livros que temos no banco de dados
      // e como foi passado apenas "{}" ele vai buscar tudo em relação á "book"
      const authorsList = await author.find({})
      // já que não estamos mais trabalahndo com strings, não usamo mais o "send" e usamos o "json"
      res.status(200).json(authorsList)
    } catch (error) {
      res.status(500).json({ "message": `${error} - Erro ao listar os autores` })
    }
  }
  // Acessando um livro específico
  static async authorByID(req, res) {
    try {
      // dentro de "req.params" temos acesso aos parametros que o usuário enviou na requisição, e com eles podemos acessar o id do livro que o usuário quer acessar
      const id = req.params.id
      const authorsList = await author.findById(id)

      res.status(200).json(authorsList)
    } catch (error) {
      res.status(500).json({ "message": `${error} - Erro ao listar o autor do id ${req.params.id}` })
    }
  }

  static async authorRegister(req, res) {
    try {
      // dentro do req.body, temos acesso aos dados que o usuário enviou no body da requisição, e com eles atualizamos o array de livros
      const newAuthor = await author.create(req.body)

      // e como toda requisição tem que ter um status code, vamos retornar o status code 201 que é o status code de criação
      // vamos retornar um json mais detalhado, com a mensagem e o livro criado
      res.status(201).json({ "message": "Autor cadastrado com sucesso", "autor": newAuthor })
    } catch (erro) {
      res.status(500).json({ "message": `${erro} - Erro ao cadastrar o autor` })
    }
  }


  // Acessando um livro específico e alterando ele
  static async authorUpdate(req, res) {
    try {
      const id = req.params.id
      // esse método, ele recebe dois parametros, o priemiro é o id e o segundo os valores a ser atualizados
      // e como retorno, ele retorna o livro atualizado, mas como não precisamos neste caso, não atribuimos nada a chamada
      await author.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: `Autor atualizado com sucesso` })
    } catch (error) {
      res.status(500).json({ "message": `${error} - Erro ao atualizar o autor do id ${req.params.id}` })
    }
  }

  // Acessando um livro específico e DELETANDO
  static async authorDelete(req, res) {
    const id = req.params.id
    try {
      await author.findByIdAndDelete(id)
      res.status(200).json({ "message": `Autor de id: ${id}, excluido com sucesso` })
    } catch (erro) {
      res.status(500).json({ "message": `${erro} - Erro ao excluir o autor de id: ${id}` })
    }
  }

}

export default AuthorController
