import express from 'express'
import connectToDatabase from './config/dbConnect.js'
import routes from './routes/index.js'

// acessando a função que faz a conexão com o banco de dados
const connection = await connectToDatabase()

// os metodos que tem "on" eles estão relacionados a eventos, ou seja, quando acontece algo, ele vai executar uma função
// o on é um evento que é executado quando a conexão com o banco de dados é estabelecida

connection.on('error', (err) => {
  console.error('Erro de conexao', err)
})

// O metodo 'once' é um evento que é executado quando a conexão com o banco de dados é estabelecida
connection.once('open', () => {
  console.log('Conectado ao banco de dados com sucesso')
})


// app sendo um instancia de express
const app = express()
routes(app) // fazendo isso pq a função "routes" precisa do "app"


export default app
