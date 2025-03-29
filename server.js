import http from 'http'

const PORT = 3002;

const routers = {
  '/': 'Hello World',
  '/users': 'List of users',
  '/products': 'List of products',
}

// criando o servidor e recebendo o "req" (requisição) e "res" (resposta)
const server = http.createServer((req, res) => {
  // com o "res" chamamos o "writeHead" para definir o cabeçalho da resposta
  // O primeiro parametro é o "200" que é o status code
  // O segundo parametro é um objeto com o cabeçalho da resposta, que é o "Content-Type" que é o tipo de conteúdo da resposta, que neste caso é "text/plain" que é o tipo de conteúdo de texto
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // e com o metodo "end", colcoamos o que queremos retornar, que no caso são nossas rotas
  res.end(routers[req.url]); //o req trás dentro dele uma propriedade que é "url" que é a url que o usuário está acessando
});

// definimos a porta que o servidor vai escutar, que é a 3000, e depois um arrow function que vai ser executada quando o servidor iniciar
server.listen(PORT, () => {
  console.log('Servidor rodando na porta 3002');
});
