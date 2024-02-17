import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken"

import { usuarioRepository } from "../repositories/usuarioRepositore";



export const autenticaoToken = async (req: Request, res: Response, next: NextFunction) => {

    const { authorization } = req.headers;

    if (!authorization) {
        throw new Error("Não autorizado");
    }
  
      const token = authorization.split(" ")[1];
  
      // verificando se o token existe
      const { id_usuario } = jwt.verify(
        token,
        process.env.JWT_PASS ?? ""
      ) as jwt.JwtPayload;
  
      const user = await usuarioRepository.findOneBy({ id_usuario });


      if (!user) {
        throw new Error("Não autorizado");
      }
      //const { senha: _, ...loggedUser } = user;
      
      next()
      

  
}
