import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Router } from 'express';
import conexao from '../db/conexao';

import ClienteRotas from '../routes/clienteRoutes';
import PetRotas from '../routes/petRoutes';
import ProdutoRotas from '../routes/produtoRoutes';
import ServicoRotas from '../routes/servicoRoutes';

import Cliente from '../modelo/cliente';
import Pet from '../modelo/pet';
import Produto from '../modelo/produto';
import Servico from '../modelo/servico';
import RG from '../modelo/rg';
import Telefone from '../modelo/telefone';

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/cliente', ClienteRotas);
app.use('/pet', PetRotas);
app.use('/produto', ProdutoRotas);
app.use('/servico', ServicoRotas);

conexao.sync()
  .then(() => {
    app.listen(3001, () => {
      console.log('Backend server is running on port 3001');
    });
  })
  .catch(erro => {
    console.log('Deu erro: ', erro);
  });