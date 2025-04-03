// importando nosso model, que é o nosso modelo de livro
import { author } from "../models/Author.js"
import book from "../models/Book.js"

class BookController {

  // o "static" server para quando a genter quer usar metodos de uma classe sem antes ter que instanciar esta classe
  static async bookList(_, res) {
    try {
      // "find" nesse caso, é uma função do mongoose que vai buscar todos os livros que temos no banco de dados
      // e como foi passado apenas "{}" ele vai buscar tudo em relação á "book"

      // Quando usamos references o autor não faz mais parte do objeto livro. Assim, cada livro deve ser “populado” com as referências do autor.
        // Os métodos livro.find({}).populate("autor").exec(); vão utilizar o ID informado no campo autor do livro para buscar a referência desse ID e “popular” a propriedade.
      const booksList = await book.find({});
      // já que não estamos mais trabalahndo com strings, não usamo mais o "send" e usamos o "json"
      res.status(200).json(booksList)
    } catch (error) {
      res.status(500).json({ "message": `${error} - Erro ao listar os livros` })
    }
  }

  // Acessando um livro específico
  static async bookByID(req, res) {
    try {
      // dentro de "req.params" temos acesso aos parametros que o usuário enviou na requisição, e com eles podemos acessar o id do livro que o usuário quer acessar
      const id = req.params.id
      const booksList = await book.findById(id)

      res.status(200).json(booksList)
    } catch (error) {
      res.status(500).json({ "message": `${error} - Erro ao listar o livro do id ${req.params.id}` })
    }
  }

  static async bookRegister(req, res) {
    // dentro do req.body, temos acesso aos dados que o usuário enviou no body da requisição, e com eles atualizamos o array de livros
    // const newBook = await book.create(req.body)

    // como iremos alem de criar um livro, atribuir o id do author a ele, temos que:
    // const newBook = req.body // pegando o body inteiro da requisição
    try {
      // const authorEncontrado = await author.findById(newBook.author)
      // const completedBook = {
      //   ...newBook,
      //   author: {
      //     ...authorEncontrado._doc, // o mongoose ele irá retornar mais dados além dos dados do author, então iremos pegar apenas os dados que queremos
      //   }
      // }
      // const createdBook = await book.create(completedBook)

      // Já o método de cadastrar livro fica como estava anteriormente, pois agora o schema Livro apenas recebeu a propriedade autor com o tipo de dado ID.
      const newBook = await book.create(req.body);


      // e como toda requisição tem que ter um status code, vamos retornar o status code 201 que é o status code de criação
      // vamos retornar um json mais detalhado, com a mensagem e o livro criado
      res.status(201).json({ "message": "Livro cadastrado com sucesso", "book": newBook })
    } catch (erro) {
      res.status(500).json({ "message": `${erro} - Erro ao cadastrar o livro` })
    }
  }


  // Acessando um livro específico e alterando ele
  static async bookUpdate(req, res) {
    try {
      const id = req.params.id
      // esse método, ele recebe dois parametros, o priemiro é o id e o segundo os valores a ser atualizados
      // e como retorno, ele retorna o livro atualizado, mas como não precisamos neste caso, não atribuimos nada a chamada
      await book.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: `Livro atualizado com sucesso` })
    } catch (error) {
      res.status(500).json({ "message": `${error} - Erro ao atualizar o livro do id ${req.params.id}` })
    }
  }

  // Acessando um livro específico e DELETANDO
  static async bookDelete(req, res) {
    const id = req.params.id
    try {
      await book.findByIdAndDelete(id)
      res.status(200).json({ "message": `Livro de id: ${id}, excluido com sucesso` })
    } catch (erro) {
      res.status(500).json({ "message": `${erro} - Erro ao excluir o livro de id: ${id}` })
    }
  }

  static async bookListByPublisher(req, res) {
    // pegando valores que estão sendo passados pela query
    const publisher = req.query.publisher
    try {
      // agora passanod chave e valor, ele vai buscar todos os books que tem o publisher igual ao que foi passado na query, sendo a chave a probiedade "publisher" que tem no schema "book" e o valor é o valor que foi passado na query
        // caso o nome seja igual, da pra deixar apenas o valor, pois o nome da propriedade é igual ao nome do parametro
      const booksByPublisher = await book.find({ publisher: publisher })
      res.status(200).json(booksByPublisher)
    } catch (error) {
      res.status(500).json({ "message": `${error} - Erro ao listar os livros pela ediora ${publisher}` })
      
    }
  }

}

export default BookController
