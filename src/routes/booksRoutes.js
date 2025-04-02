// organizando as rotas que acaba sendo responsabilidade do "express"
import express from 'express'
import BookController from '../controllers/bookController.js'  


// metodo do express para lidar com rotas
const routes = express.Router()

// o "get" é um metodo do express que é responsavel por lidar com as requisições do tipo "GET"
  // o primeiro parametro é a rota que queremos acessar e depois a função, que no caso é o "BookController.BookList"
routes.get('/books', BookController.bookList)
routes.get('/books/:id', BookController.bookByID)
routes.post('/books', BookController.bookRegister)
routes.put('/books/:id', BookController.bookUpdate)
routes.delete('/books/:id', BookController.bookDelete)

export default routes
