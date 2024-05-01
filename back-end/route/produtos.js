import express from "express"

import { addProduto, deleteProduto, getProduto } from '../controllers/produto.js' 

const router = express.Router();


router.get('/', getProduto)
router.post('/', addProduto)
router.delete('/', deleteProduto)

export default router
