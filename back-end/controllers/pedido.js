import { response } from 'express';
import { db } from '../db.js';

export const getPedido = (_, res) => {

    const q = 'SELECT * FROM pedido'

    db.query(q, (err, data) => {

        if(err) {
            return res.json(err)
        }

        return res.status(200).json(data)
    })
}

export const addPedido = (request, response) => {

      const q = "INSERT INTO pedido(`idPedido`, `idGrupoPedido`, `quantidade`, `preco`) VALUE(?) ";
  
      const values = [
          request.body.idPedido,
          request.body.idGrupoPedido,
          request.body.quantidade,
          request.body.preco
      ];
  
      console.log(values);
      console.log(request);
  
      db.query(q, [values], (err) => {
          if (err) {
              return response.json(err);
          } else {
              return response.status(200).json('Pedido adicionado com sucesso!');
          }
      });
  };
  

export const updatePedido = (request, response) => {
    
    const q = "UPDATE pedido SET `idPedido` = ?, `idGrupoPedido` = ?, `quantidade` = ?, `preco` = ? WHERE `id` = ?"

    const values = [
        request.body.idPedido,
        request.body.idGrupoPedido,
        request.body.quantidade,
        request.body.preco
    ];

    db.query(q, [...values, request.params.id], (error) => {
        if(error) return response.json(error)

        return response.status(200).json('Pedido atualizado com sucesso!')
    })
}

export const deletePedido = (request, response) => {

    const q = "DELETE FROM pedido WHERE `idPedido` = ?";

    db.query(q, [request.params.id], (error) =>{
        if(error) return response.json(error);

        return response.status(200).json({ message: 'Pedido deletado com sucesso!' });

    })
}