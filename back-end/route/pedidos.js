import express from "express"

import { addPedido, deletePedido, getPedido} from '../controllers/pedido.js' 

const router = express.Router();


router.get('/', getPedido)
router.post('/', addPedido)
router.delete('/',deletePedido)

export default router
