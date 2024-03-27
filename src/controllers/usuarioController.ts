import { usuarioRepository } from "../repositories/usuarioRepositore";
import { Response, Request } from "express";

import Usuario from "../models/usuario";

import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from 'fs'
import path from "path";
import { Buffer } from "buffer";

export class UsuarioController {
  async imgUsuario(req: Request, res: Response) {
    if (req.file) {
      console.log(req.file)
      return res.status(200).json({erro: false, 
        mensagem: 'recebido com sucesso'})
    }

    return res.status(400).json({erro: true,
      mensagem: "erro upload nao realizado"
    })

  }
  
  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const user = await usuarioRepository.findOne({ where: { email: email } });

    //console.log(email, senha, user)
    if (!user) {
      throw new Error("E-mail ou senha inválidos ");
    }

    const verifyPass = await bcrypt.compare(senha, user.senha);

    if (!verifyPass) {
      throw new Error("E-mail ou senha inválidos ");
    }

    //criando token para autenticar usuario
    const token = jwt.sign(
      { id: user.id_usuario },
      process.env.JWT_PASS ?? "",
      {
        expiresIn: "8h",
      }
    );

    console.log("token", token);

    const { senha: _, ...userLogin } = user;

    return res.json({
      user: userLogin,
      token: token,
    });
  }

  async create(req: Request, res: Response) {
    // criar usuário
    const { nome, email, senha } = req.body;

    const userExists = await usuarioRepository.findOneBy({ email });

    if (userExists) {
      throw new Error("Email já cadastrado ");
    }
    let user = Usuario.create(nome, email, senha, null)

    const newUsuario = usuarioRepository.create(user as Usuario);

    const { senha: _, ...userSemSenha } = newUsuario;

    await usuarioRepository.save(newUsuario);


    return res.status(200).json(userSemSenha);
  }

}
