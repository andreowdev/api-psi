import express from "express"
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();


import grupoPedidosRoute from './route/grupoPedidos.js'
import pedidoRoute from './route/pedidos.js'
import produtoRoute from './route/produtos.js'

const PORT = process.env.DB_PORT
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cors());


app.use('/', grupoPedidosRoute);
app.use('/pedido', pedidoRoute)
app.use('/produto', produtoRoute)


app.listen(PORT, () => {
      console.log("Parabéns, sua API está funcionando e conectada na porta: " + PORT + " link de acesso = localhost:"+PORT)
})