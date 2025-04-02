// organizando as rotas que acaba sendo responsabilidade do "express"
import express from 'express'
import AuthorController from '../controllers/authorController.js'  


// metodo do express para lidar com rotas
const routes = express.Router()

// o "get" é um metodo do express que é responsavel por lidar com as requisições do tipo "GET"
  // o primeiro parametro é a rota que queremos acessar e depois a função, que no caso é o "BookController.BookList"
routes.get('/author', AuthorController.authorList)
routes.get('/author/:id', AuthorController.authorByID)
routes.post('/author', AuthorController.authorRegister)
routes.put('/author/:id', AuthorController.authorUpdate)
routes.delete('/author/:id', AuthorController.authorDelete)

export default routes
