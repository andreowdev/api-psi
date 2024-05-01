import { response } from 'express';
import { db } from '../db.js';

export const getGrupoPedido = (_, res) => {

    const q = 'SELECT * FROM grupopedido'

    db.query(q, (err, data) => {

        if(err) {
            return res.json(err)
        }

        return res.status(200).json(data)
    })
}

export const addGrupoPedido = (request, response) => {

      const q = "INSERT INTO grupopedido(`nomeGrupoPedido`, `dataEntrada`, `dataSaida`) VALUE(?) ";
  
      const values = [
          request.body.nomeGrupoPedido,
          request.body.dataEntrada,
          request.body.dataSaida
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
  

export const updateGrupoPedidoProdutos = (request, response) => {
    
    const q = "UPDATE  grupopedido SET `nomeGrupoPedido` = ?, `dataEntrada` = ?, `dataSaida` = ? WHERE `idGrupoPedido` = ?"

    const values = [
        request.body.nomeGrupoPedido,
        request.body.dataEntrada,
        request.body.dataSaida
    ];

    db.query(q, [...values, request.params.idGrupoPedido], (error) => {
        if(error) return response.json(error)

        return response.status(200).json('grupoPedido atualizado com sucesso!')
    })
}

export const deleteGrupoPedido = (request, response) => {

    const q = "DELETE FROM grupopedido WHERE `idGrupoPedido` = ?";

    db.query(q, [request.params.idGrupoPedido], (error) =>{
        if(error) return response.json(error);

        return response.status(200).json('grupoPedido deletado com sucesso!')
    })
}