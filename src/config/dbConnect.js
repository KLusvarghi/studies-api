// o mongoose é um ORM, ele é um ORM que tem como objetivo facilitar a comunicação entre o nosso código e o banco de dados, ele vai nos ajudar a fazer as operações de CRUD (Create, Read, Update, Delete)
import mongoose, { mongo } from 'mongoose'

export default async function connectToDatabase() {
  try {
    if (!process.env.DB_CONNECTION_STRING) {
      throw new Error('A variável de ambiente DB_CONNECTION_STRING não está definida.');
    }
    
    // await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // });

    // ele recebe o connction string que fará a conexao ao banco, e tem que passar a nossa string de coxao que o MongoDB nos fornece
    await mongoose.connect(process.env.DB_CONNECTION_STRING);

    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    return mongoose.connection;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    process.exit(1); // Encerra o processo em caso de erro crítico
  }
}

