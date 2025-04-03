// organizando as rotas que acaba sendo responsabilidade do "express"
import express from 'express'
import BookController from '../controllers/bookController.js'  


// metodo do express para lidar com rotas
const routes = express.Router()

// o "get" é um metodo do express que é responsavel por lidar com as requisições do tipo "GET"
  // o primeiro parametro é a rota que queremos acessar e depois a função, que no caso é o "BookController.BookList"


// No expresse, as rotas vão ser chamadas na sequencia que elas são declaradas aqui no meu routes, tendo que adicionar elas em uma ordem da maior complexidade para a menor, por que se o /:id estiver antes do /books/search, o express vai entender que o /:id é um parametro da rota /books
routes.get('/books', BookController.bookList)
// rota que busca dados por query
routes.get('/books/search', BookController.bookListByPublisher)
routes.get('/books/:id', BookController.bookByID)
routes.post('/books', BookController.bookRegister)
routes.put('/books/:id', BookController.bookUpdate)
routes.delete('/books/:id', BookController.bookDelete)



export default routes
