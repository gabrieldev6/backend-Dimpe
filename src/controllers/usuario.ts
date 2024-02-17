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

        const {img} = req.body
        // pega so o que precisa para montar a imagem
        const img64 = img.split(',')[1]
        // transforma base base64 para buffer
        const imgbuffer = Buffer.from(img64, 'base64')
        // cria um caminho e nome de arquivo unico para cada imagem
        const pathImg = path.join(__dirname, `uploads/profile${Date.now()}.png`)
        // cria um arquivo de imagem no caminho definido em pathImg
        fs.writeFile(pathImg, imgbuffer, {encoding: 'base64'}, (err) => {
          // se der algum erro vai mostrar no terminal
          console.log(err)
        }) 
        return res.status(200).json('imagem salva com sucesso')
    }
    
    async login(req: Request, res: Response) {
        const { email, senha } = req.body;
    
        const user = await usuarioRepository.findOne({ where: {email: email }});
    
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
