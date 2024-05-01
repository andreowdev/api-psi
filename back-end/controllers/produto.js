import { response } from 'express';
import { db } from '../db.js';

export const getProduto = (_, res) => {

    const q = 'SELECT * FROM produto'

    db.query(q, (err, data) => {

        if(err) {
            return res.json(err)
        }

        return res.status(200).json(data)
    })
}

export const addProduto = (request, response) => {

      const q = "INSERT INTO produto(`idProduto`, `nomeProduto`, `quantidade`, `preco`) VALUE(?) ";
  
      const values = [
          request.body.idProduto,
          request.body.nomeProduto,
          request.body.quantiade,
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
  

export const updateProdutos = (request, response) => {
    
    const q = "UPDATE  produtos SET `nomeProduto` = ?, `quantidade` = ?, `preco` = ? WHERE `idProduto` = ?"

    const values = [
        request.body.idProduto,
        request.body.nomeProduto,
        request.body.quantiade,
        request.body.preco
    ];

    db.query(q, [...values, request.params.id], (error) => {
        if(error) return response.json(error)

        return response.status(200).json('Produto atualizado com sucesso!')
    })
}

export const deleteProduto = (request, response) => {

    const q = "DELETE FROM produtos WHERE `idProduto` = ?";

    db.query(q, [request.params.id], (error) =>{
        if(error) return response.json(error);

        return response.status(200).json('Produto deletado com sucesso!')
    })
}
