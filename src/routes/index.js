// Este arquivo ele é o que se chama de "Barril", ou seja, ele é o responsavel por importar todas as rotas que temos no nosso projeto, assim fica mais organizado e fica mais facil de manter

import express from 'express'
import books from './booksRoutes.js'
import authors from './authorRoutes.js'

const routes = (app) => {
  // centralizando as rotas
  app.route('/').get((req, res) => {
    res.status(200).send('Curso de Node')
  })

  // incluindo as rotas
  // o use é o metodo que usamos para incluir middlewares
  // nesta linha de baixo, ele está basicamente dizendo que todas as rotas que começam com "/books" vão ser lidas pelo arquivo "booksRoutes.js"
  // assim o express consegue gerenciar tudo de uma vez (sendo responsabilidade dele lidar com as rotas)
  //-------------------------------------
  // isso que está sendo executado é o middleware, os midwares eles tem acesso as requisições e respostas (req and res) e usamos para aplicar algumas ações nelas. 
  // Ela é uma função que é executada antes de uma requisição ser enviada para o servidor
  // Com essa função "json", qualquer requisição que tenha como pai algo compativel com um "JSON" na sua estrutura, ele vai passar por esse middleware e vai ser convertido (parseado) para JSON, isso porque mesmo que o usuario passe como json, essa viagem "TCP" que ele faz, o body é convertigo para string, então, temos que converter para JSON
  app.use(express.json(), books, authors)
}

export default routes
