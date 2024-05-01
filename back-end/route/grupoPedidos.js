import express from "express";

import { getGrupoPedido, addGrupoPedido, updateGrupoPedidoProdutos, deleteGrupoPedido } from '../controllers/grupoPedido.js' 

const router = express.Router();


router.get('/', getGrupoPedido)
router.post('/', addGrupoPedido)
router.put('/', updateGrupoPedidoProdutos)
router.delete('/', deleteGrupoPedido)

export default router

